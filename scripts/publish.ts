import { Storage, LogLevel, FileStatus } from '@apillon/sdk';
import * as fs from 'fs';
import 'dotenv/config'

try {
  const storage = new Storage({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
    logLevel: LogLevel.VERBOSE,
  });

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
      console.log(`\nAI Agent Contract deployed at: https://agents.phala.network/ipfs/${fileCID}`);
      console.log(`\nMake sure to add your secrets to ensure your AI-Agent works properly.`);
    }
  }
} catch (error) {
  console.error('Error:', error)
}
