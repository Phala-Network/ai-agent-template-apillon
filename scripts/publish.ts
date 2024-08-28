import { Storage, LogLevel, FileStatus } from '@apillon/sdk';
import * as fs from 'fs';
import 'dotenv/config'

try {
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
    logLevel: LogLevel.VERBOSE,
  });
  const gatewayUrl = 'https://wapo-testnet.phala.network';
  // create and instance of a bucket directly through uuid
  const bucket = storage.bucket(process.env.APILLON_S3_BUCKET_UUID ?? '');

  // send file buffers as upload parameters
  const agentScriptBuffer = fs.readFileSync('./dist/index.js');

  const agentScriptUpload = await bucket.uploadFiles(
    [
      {
        fileName: 'index.js',
        contentType: 'FILE',
        content: agentScriptBuffer,
      },
    ],
  );
  const fileUuid = agentScriptUpload[0].fileUuid as string;
  let fileCID = agentScriptUpload[0].CID;
  console.log(fileCID);
  while (fileCID == undefined) {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    await sleep(2000);
    // gets a specific file in a bucket directly through uuid
    const file = await bucket.file(fileUuid).get();
    console.log(`Checking for published CID ${JSON.stringify(file)}`);
    if (file.CID) {
      fileCID = file.CID as string;
      console.log(`\nAgent Contract deployed at: ${gatewayUrl}/ipfs/${fileCID}`);
      console.log(`\nIf your agent requires secrets, ensure to do the following:\n1) Edit the setSecrets.ts file to add your secrets\n2) Set the variable AGENT_CID=${fileCID} in the .env file\n3) Run command: npm run set-secrets`);
    }
  }
} catch (error) {
  console.error('Error:', error)
}
