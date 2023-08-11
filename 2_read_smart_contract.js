require('dotenv').config()
const { ethers } = require("ethers")
const fs = require('fs');



const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);

const ERC20_ABI = JSON.parse(fs.readFileSync('abi.json', 'utf8'));

const address = process.env.DAI_CONTRACT_ADDRESS;

const contract = new ethers.Contract(address, ERC20_ABI, provider);
const main = async() => {   
    try{
        
        const symbol = await contract.symbol();
        /*const totalSupply = await contract.totalSupply();
        const balance = await contract.balanceOf(process.env.PUBLIC_KEY)
        */
        console.log(symbol);
    } catch(error){
        console.error("ERROR",error);
    }
}
main()