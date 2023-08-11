require('dotenv').config()
const { ethers } = require("ethers")


const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
const account1 = process.env.PUBLIC_KEY;

const account2 = "0x814FaE9f487206471B6B0D713cD51a2D35980000"





const main = async() => {
   const balance = await provider.getBalance(process.env.PUBLIC_KEY);
   console.log(`${ethers.utils.formatEther(balance)} ETH\n`);
}
main()