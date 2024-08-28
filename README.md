<div align="center">
  <a href="https://github.com/Phala-Network/ai-agent-template-apillon">
    <h1>AI Agent Contract Template with Apillon</h1>
    <img height="320" src="./public/AI-Agent-Contract.jpg" />
    <br />
  </a>
  <a href="https://platform.openai.com/docs/api-reference">
    <img height="32" src="public/powered-by-openai-badge-filled-on-light.svg" />
    <br />
  </a>
  <p align="center">
    Host your AI Agent Contract on Phala's decentralized serverless cloud.
    <br />
    <a href="https://github.com/Phala-Network/ai-agent-template-apillon"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wapo-testnet.phala.network/ipfs/bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie?key=89e1e116909c1a6d&chatQuery=When%20did%20humans%20land%20on%20the%20moon">View Demo</a>
    ·
    <a href="https://github.com/Phala-Network/ai-agent-template-apillon/issues">Report Bug</a>
    ·
    <a href="https://discord.gg/phala-network">Discord</a>
  </p>

  <h3>Architecure Overview</h3>
  <img height="320" src="./public/ai-agent-architecture.jpg" />
</div>

## 🤖 What Is This?!

<div align="center">
  <img height="240" src="https://www.jlwranglerforums.com/forum/attachments/zoolander-gif.325299/">
</div>

The Apillon AI Agent template is a **MINIMAL** template to build an AI Agent that can be hosted on Phala Network's decentralized hosting protocol. Unlike Vercel or other FaaS, it allows you to publish your AI Agent compiled code to IPFS and hosts it on a fully decentralized FaaS cloud with the following benefits:

- 💨 Ship Fast: Build and ship with familiar toolchain in minutes
- ⛑️ Secure: Execution guarded by rock solid TEE / Intel SGX
- 🔒 Private: Host API keys and user privacy at ease
- 💎 Unstoppable: Powered by IPFS and Phala's 35k+ decentralized TEE workers

[//]: # (<img width="320" src="https://media1.tenor.com/m/NBtFH5F9QTgAAAAd/what-is-my-purpose-butter.gif" />)

## Getting Started
### Prepare
Install dependencies
```shell
npm install
```

### Testing Locally
Create `.env` file and add your OpenAI API Key
```shell
cp .env.example .env
```

In `.env` file replace `YOUR_OPENAI_KEY` with your API Key
```text
OPENAI_API_KEY="YOUR_OPENAI_KEY"
```

Build your Agent
```shell
npm run build
```

Test your Agent locally
```shell
npm run test
```

Expected Test Results
```shell
INPUT: {"method":"GET","path":"/ipfs/CID","queries":{"chatQuery":["When did humans land on the moon?"],"openAiModel":["gpt-4o"]},"secret":{"openaiApiKey":"OPENAI_API_KEY"},"headers":{}}
GET RESULT: {
  status: 200,
  body: `{"message":"Humans first landed on the moon on July 20, 1969. This historic event was accomplished during NASA's Apollo 11 mission. Astronauts Neil Armstrong and Edwin \\"Buzz\\" Aldrin became the first humans to set foot on the lunar surface, while Michael Collins remained in lunar orbit aboard the command module. Armstrong's famous words as he descended onto the moon's surface were, \\"That's one small step for man, one giant leap for mankind.\\""}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
INPUT: {"method":"POST","path":"/ipfs/CID","queries":{"chatQuery":["When did humans land on the moon?"],"openAiModel":["gpt-4o"]},"secret":{"openaiApiKey":"OPENAI_API_KEY"},"headers":{},"body":"{}"}
POST RESULT: {
  status: 200,
  body: '{"message":"Not Implemented"}',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}
**NOTE**:
This is a local test and your published code could have a different result when executing in the TEE on Phala Network.

Please reach out to the team here if your run into issues: https://discord.gg/phala-network
```

### Publish Your AI Agent
Upload your compiled AI Agent code to IPFS.
```shell
npm run publish-agent
```

#### New to Apillon?
We use <a href="https://wiki.apillon.io/build/5-apillon-sdk.html#requirements">Apillon Storage</a> to host IPFS contents. If you are new to Apillon, signup for an account here https://app.apillon.io/dashboard and create your first bucket. 

You will need to set the following environment variables:
```text
APILLON_API_KEY="Your Apillon API Key"
APILLON_API_SECRET="Your Apillon API Secret Key"
APILLON_S3_BUCKET_UUID="Your S3 Bucket Created in Apillon Dashboard"
```

Upon a successful upload, the command should show the URL to access your AI Agent.
```
✓ Compiled successfully.
  76.85 KB  dist/index.js
Preparing to upload 1 files...
Total files to upload: 1
File uploaded: index.js
2024-08-28T15:38:34.252Z:  File upload complete.
Closing upload session...
2024-08-28T15:38:35.431Z:  Upload session ended.
null
Checking for published CID {"API_PREFIX":"/storage/buckets/ee410fe7-bdb0-4308-9ee3-b74cec5f6dab/files/2da35681-20ce-4f3f-8992-9a4049231f46","createTime":"2024-08-28T15:38:35.000Z","updateTime":"2024-08-28T15:38:35.000Z","uuid":"2da35681-20ce-4f3f-8992-9a4049231f46","bucketUuid":"ee410fe7-bdb0-4308-9ee3-b74cec5f6dab","directoryUuid":null,"name":"index.js","CID":null,"status":2,"type":2,"link":null,"path":null}
Checking for published CID {"API_PREFIX":"/storage/buckets/ee410fe7-bdb0-4308-9ee3-b74cec5f6dab/files/2da35681-20ce-4f3f-8992-9a4049231f46","createTime":"2024-08-28T15:38:35.000Z","updateTime":"2024-08-28T15:38:35.000Z","uuid":"2da35681-20ce-4f3f-8992-9a4049231f46","bucketUuid":"ee410fe7-bdb0-4308-9ee3-b74cec5f6dab","directoryUuid":null,"name":"index.js","CID":null,"status":2,"type":2,"link":null,"path":null}
Checking for published CID {"API_PREFIX":"/storage/buckets/ee410fe7-bdb0-4308-9ee3-b74cec5f6dab/files/2da35681-20ce-4f3f-8992-9a4049231f46","createTime":"2024-08-28T15:38:35.000Z","updateTime":"2024-08-28T15:38:35.000Z","uuid":"2da35681-20ce-4f3f-8992-9a4049231f46","bucketUuid":"ee410fe7-bdb0-4308-9ee3-b74cec5f6dab","directoryUuid":null,"name":"index.js","CID":null,"status":2,"type":2,"link":null,"path":null}
Checking for published CID {"API_PREFIX":"/storage/buckets/ee410fe7-bdb0-4308-9ee3-b74cec5f6dab/files/2da35681-20ce-4f3f-8992-9a4049231f46","createTime":"2024-08-28T15:38:35.000Z","updateTime":"2024-08-28T15:38:35.000Z","uuid":"2da35681-20ce-4f3f-8992-9a4049231f46","bucketUuid":"ee410fe7-bdb0-4308-9ee3-b74cec5f6dab","directoryUuid":null,"name":"index.js","CID":null,"status":2,"type":2,"link":null,"path":null}
Checking for published CID {"API_PREFIX":"/storage/buckets/ee410fe7-bdb0-4308-9ee3-b74cec5f6dab/files/2da35681-20ce-4f3f-8992-9a4049231f46","createTime":"2024-08-28T15:38:35.000Z","updateTime":"2024-08-28T15:38:35.000Z","uuid":"2da35681-20ce-4f3f-8992-9a4049231f46","bucketUuid":"ee410fe7-bdb0-4308-9ee3-b74cec5f6dab","directoryUuid":null,"name":"index.js","CID":null,"status":2,"type":2,"link":null,"path":null}
Checking for published CID {"API_PREFIX":"/storage/buckets/ee410fe7-bdb0-4308-9ee3-b74cec5f6dab/files/2da35681-20ce-4f3f-8992-9a4049231f46","createTime":"2024-08-28T15:38:35.000Z","updateTime":"2024-08-28T15:38:35.000Z","uuid":"2da35681-20ce-4f3f-8992-9a4049231f46","bucketUuid":"ee410fe7-bdb0-4308-9ee3-b74cec5f6dab","directoryUuid":null,"name":"index.js","CID":null,"status":2,"type":2,"link":null,"path":null}
Checking for published CID {"API_PREFIX":"/storage/buckets/ee410fe7-bdb0-4308-9ee3-b74cec5f6dab/files/2da35681-20ce-4f3f-8992-9a4049231f46","createTime":"2024-08-28T15:38:35.000Z","updateTime":"2024-08-28T15:39:04.000Z","uuid":"2da35681-20ce-4f3f-8992-9a4049231f46","bucketUuid":"ee410fe7-bdb0-4308-9ee3-b74cec5f6dab","directoryUuid":null,"name":"index.js","CID":"bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie","status":3,"type":2,"link":"https://bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie.ipfs.web3approved.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiJiYWZrcmVpYTN1NXZxNTZwd2V6am9xbzR2NGxueXJ2dmJ4d2puZHNyNGN3czNxbTZ5dTdyd2o2amFpZSIsInByb2plY3RfdXVpZCI6ImFlMDEyOWFkLWZjYTItNGRmMC04ZTY0LTU2NDg0MjdmNzMxMyIsImlhdCI6MTcyNDg1OTU0NSwic3ViIjoiSVBGUy10b2tlbiJ9.tHczjZ1qZmp8gb88srDXUG4c8OHNX5V00IRgu528-i0","path":null}

Agent Contract deployed at: https://wapo-testnet.phala.network/ipfs/bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie

If your agent requires secrets, ensure to do the following:
1) Edit the setSecrets.ts file to add your secrets
2) Set the variable AGENT_CID=bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie in the .env file
3) Run command: npm run set-secrets
```

### Access the Published AI Agent

Once published, your AI Agent is available at the URL: `https://agents.phala.network/ipfs/<your-cid>`. You can get it from the "Publish to IPFS" step.

You can test it with `curl`.

```bash
curl https://agents.phala.network/ipfs/<your-cid>
```

### Add Secrets

By default, all the compiled JS code is visible for anyone to view if they look at IPFS CID. This makes private info like API keys, signer keys, etc. vulnerable to be stolen. To protect devs from leaking keys, we have added a field called `secret` in the `Request` object. It allows you to store secrets in a vault for your AI Agent to access.

To add your secrets,
1) edit the [setSecrets.ts](./scripts/setSecrets.ts) file and update the `secrets` variable at the top of the file
```typescript
// Update your key value JSON object here for your secrets
const secrets = JSON.stringify({
  // Add your secrets here
  // key: value
  openaiApiKey: process.env.OPENAI_API_KEY
})
```
2) Update the [.env](./.env.example) file with your published agent IPFS CID
```text
AGENT_CID=bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie
```
3) Run command to set the secrets
```shell
npm run set-secrets
```
Expected output:
```shell
Storing secrets...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   218    0    68  100   150    125    276 --:--:-- --:--:-- --:--:--   402
{"token":"0ac3d790b17a446b","key":"89e1e116909c1a6d","succeed":true}

Secrets set successfully. Go to the URL below to interact with your agent:
https://wapo-testnet.phala.network/ipfs/bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie?key=89e1e116909c1a6d
```

The API returns a `token` and a `key`. The `key` is the id of your secret. It can be used to specify which secret you are going to pass to your frame. The `token` can be used by the developer to access the raw secret. You should never leak the `token`.

To verify the secret, run the following command where `key` and `token` are replaced with the values from adding your `secret` to the vault.
```shell
curl https://wapo-testnet.phala.network/vaults/<key>/<token>
```

Expected output:
```shell
{"data":{"openaiApiKey":"<OPENAI_API_KEY>"},"succeed":true}
```

### Access Queries
To help create custom logic, we have an array variable named `queries` that can be accessed in the `Request` class. To access the `queries` array variable `chatQuery` value at index `0`, the syntax will look as follows:
```typescript
const query = req.queries.chatQuery[0] as string;
```
The example at https://wapo-testnet.phala.network/ipfs/bafkreia3u5vq56pwezjoqo4v4lnyrvvbxwjndsr4cws3qm6yu7rwj6jaie?key=89e1e116909c1a6d&chatQuery=When%20did%20humans%20land%20on%20the%20moon will have a value of `When did humans land on the moon`. `queries` can have any field name, so `chatQuery` is just an example of a field name and not a mandatory name, but remember to update your `index.ts` file logic to use your expected field name.


## FAQ

<details>
<summary><b>What packages can I use in the AI Agent server?</b></summary>
<ul>
  <li>Most of the npm packages are supported: viem, onchainkit, ….</li>
  <li>Some packages with some advanced features are not supported:</li>
  <ul>
    <li>Memory usage over 100MB</li>
    <li>Web Assembly</li>
    <li>Browser only features: local storage, service workers, etc</li>
  </ul>
</ul>
</details>

<details>
<summary><b>What’s the spec of the Javascript runtime?</b></summary>
<ul>
  <li>The code runs inside a tailored <a href="https://bellard.org/quickjs/">QuickJS engine</a></li>
  <li>Available features: ES2023, async, fetch, setTimeout, setInterval, bigint</li>
  <li> <a href="https://docs.phala.network/tech-specs/ai-agent-contract#wapojs/">Tech spec doc</a></li>
</ul>
</details>

<details>
<summary><b>Why is the serverless platform secure?</b></summary>
<ul>
  <li>Your AI Agent code on is fully secure, private, and permissionless. Nobody can manipulate your program, steal any data from it, or censor it.</li>
  <li>Security: The code is executed in the decentralized TEE network running on Phala Network. It runs code inside a secure blackbox (called enclave) created by the CPU. It generates cryptographic proofs verifiable on Phala blockchain. It proves that the hosted code is exactly the one you deployed.</li>
  <li>Privacy: You can safely put secrets like API keys or user privacy on Phala Network. The code runs inside TEE hardware blackboxs. The memory of the program is fully encrypted by the TEE. It blocks any unauthorized access to your data.</li>
  <li>Learn more at <a href="https://phala.network">Phala Network Homepage</a></li>
</details>

<details>
<summary><b>What's TEE / Intel SGX?</b></summary>
<ul>
  <li><a href="https://collective.flashbots.net/t/tee-sgx-wiki/2019">TEE/SGX wiki</a></li>
  <li><a href="https://collective.flashbots.net/t/debunking-tee-fud-a-brief-defense-of-the-use-of-tees-in-crypto/2931">Debunking TEE FUD: A Brief Defense of The Use of TEEs in Crypto</a></li>
</details>
