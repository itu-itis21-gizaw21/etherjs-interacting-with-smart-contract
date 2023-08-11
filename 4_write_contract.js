const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);

const account1 = process.env.PUBLIC_KEY;
const account2 = "0x814FaE9f487206471B6B0D713cD51a2D35980000";

privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey,provider);

const ERC20_ABI = JSON.parse(fs.readFileSync('abi.json', 'utf8'));

const address = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async() => {
    const balance = await contract.balanceOf(account1);

    console.log(`\nReading from ${address}\n`);
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet);

    const tx = await contractWithWallet.transfer(account2, balance);
    await tx.wait();
    console.log(tx);
    console.log(`\nReading from ${address}\n`);
    console.log(`Balance of sender: ${balance}\n`)

    const balanceOfSender = await contract.balanceOf(account1);
    const balanceOfReciever = await contract.balanceOf(account2);
    console.log(ethers.utils.formatEther(balanceOfSender));
    console.log(ethers.utils.formatEther(balanceOfReciever));
}
main()