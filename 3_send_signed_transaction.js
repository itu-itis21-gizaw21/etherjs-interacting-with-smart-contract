require('dotenv').config()
const { ethers } = require("ethers")


const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);

const account1 = process.env.PUBLIC_KEY;
const account2 = "0x814FaE9f487206471B6B0D713cD51a2D35980000";

privateKey = process.env.PRIVATE_KEY;


const wallet = new ethers.Wallet(privateKey,provider);


const main = async() => {

    const senderBalanceBefore = await provider.getBalance(account1);
    const recieverBalanceBefore = await provider.getBalance(account2);
    
    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`);
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}`);

   const tx = await wallet.sendTransaction({ 
        to: account2,
        value: ethers.utils.parseEther("0.01")
    })
    await tx.wait();
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1);
    const recieverBalanceAfter = await provider.getBalance(account2);
    
    console.log(`\nSender balance After: ${ethers.utils.formatEther(senderBalanceAfter)}`);
    console.log(`reciever balance After: ${ethers.utils.formatEther(recieverBalanceAfter)}`);

}
main()