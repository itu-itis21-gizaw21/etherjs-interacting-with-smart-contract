const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);

const account1 = process.env.PUBLIC_KEY;

const privateKey = process.env.PRIVATE_KEY;

const ERC20_ABI = JSON.parse(fs.readFileSync('abi.json', 'utf8'));

//const address = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
const address = process.env.DAI_CONTRACT_ADDRESS;
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async() => {
    const block = await provider.getBlockNumber();
    console.log(block);
    const blockInfo = await provider.getBlock(block);
    //console.log(blockInfo);

    const { transactions } = await provider.getBlockWithTransactions(block)
    console.log(transactions[0])

}
main()