let ethers = require('ethers');
let contractjson = require('../../contracts/artifacts/contracts/BorrowerOperations.sol/BorrowerOperations.json');
//let contractjson = require('../../contracts/artifacts/contracts/TroveManager.sol/TroveManager.json');

let abi = contractjson.abi;
//let troveabi = trovejson.abi;

//let CoinGeckoClient = new CoinGecko();
let contractaddress = "0x2190F4dd3896915ce774378139d6511aFb798e56";//change to borrower operations
//let pairAddress = "0xb5fd3D2E1Bf97a322977D52C98CF66F92e0369f2";
//price feed = 0xe1F00Da70Fab4A01cF0c6A72Bd9eF25b980a100c;
//let trove = ""; //add trove address

let NODE_URL = "https://ethw-mainnet.nodereal.io/v1/c54b2a76ab9f49eea468ac8d217754d8";

let provider = new ethers.providers.JsonRpcProvider(NODE_URL);

let contract = new ethers.Contract(contractaddress, abi, provider);

//let trovecontract = new ethers.Contract(trove, troveabi, provider);

let signer = new ethers.Wallet("", provider);

let contractwithsigner = contract.connect(signer);

//let trovesigner = trovecontract.connect(signer);

let token1 = "0x520A36eE3aa0b506288915f91Fb4BBB23d09a7D7";
let token2 ="0x68Da3b9C2da04D5FE9344104aD24486Dac6E90cA";
let weth = "0x49e351269625B7fCf6e97fd22D5e387fd07EAD32";
let borrowerOperationsAddress = "0x2190F4dd3896915ce774378139d6511aFb798e56";
let activePoolAddress = "0x259ED2C59D350E608E1018162e641186c410c31B";
let defaultPoolAddress = "0x460597a0f710E225dE68164169AC7EfC4C609f6f";
let stabilityPoolAddress ="0x78E03893818fcE52Bf7BBf3bb2854077AB10BA98";
let gasPoolAddress ="0x4175f81c5DE65E16A777769cFC85ADe675778fBb";
let collSurplusPoolAddress = "0xCB65a433666435BB438C4Cc6a085069236dDF16a"
let priceFeedAddress ="0x3Ea7b9C21d90d2eBE46CA49B735e897e8cB7B93e";
let lusdTokenAddress ="0x520A36eE3aa0b506288915f91Fb4BBB23d09a7D7";
let sortedTrovesAddress ="0x3e58846B755E9d29C872C26147351d128dBc747c";
let lqtyTokenAddress="0x39618C912e22fAD4A9bd47037Cd1f88b69b029cc";
let lqtyStakingAddress="0x49e351269625B7fCf6e97fd22D5e387fd07EAD32";
let feemanager="0xd52C0377D4422d0DF35eA17FDfe9f3fa83b85660";
let trovemanager="0x25d27cbdfaFb1B7314AC5e409a1F24112e376829";


async function createpair(){
    tx = await contractwithsigner.setAddresses(
        trovemanager,
        activePoolAddress,
        defaultPoolAddress,
        stabilityPoolAddress,
        gasPoolAddress,
        collSurplusPoolAddress,
        priceFeedAddress,
        sortedTrovesAddress,
        lusdTokenAddress,
        lqtyStakingAddress,
        feemanager
    ) 
    await tx.wait();
    console.log(tx);
    /*fx = await trovesigner.fetchPrice(); 
    await tx.wait();
    console.log(tx);*/
    //console.log(ethers.utils.formatEther( tx[1] )

    //_getCurrentTellorResponse

    //const we = ethers.utils.hexZeroPad(ethers.utils.hexlify(15000000000), 32)
    //console.log(we)
    //tx = await contractwithsigner.PAIR_HASH();
    //console.log(tx);

    //fx = await contractwithsigner.setFeeTo(signer.address);
    //await fx.wait();
    //console.log("the fx", fx);

    //pairAddress = await contractwithsigner.getPair(token1, token2);
    //await pairAddress.wait;
    //console.log(pairAddress);

    //const token0Address = await paircontractwithsigner.token0();
    //console.log(token0Address);

    //let amount = "1000000000000";

    //await token1.transferFrom(pairAddress, amount);
    //await token2.transferFrom(pairAddress, amount);
    //await pair.mint(signer.address);
}

createpair();
