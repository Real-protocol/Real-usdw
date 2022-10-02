const externalAddrs  = {
  // https://data.chain.link/eth-usd
  CHAINLINK_ETHUSD_PROXY: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e", 
  // https://docs.tellor.io/tellor/integration/reference-page
  TELLOR_MASTER:"0x031f7119a910186B77f4237915e7F694ADF60B51",
  // https://uniswap.org/docs/v2/smart-contracts/factory/
  UNISWAP_V2_FACTORY: "0xFcEc44Adb7aeB7a464B0aB0a8F6077AFE36aA4D9",
  UNISWAP_V2_ROUTER02: "0x808aA76Cfcab361276fd740A27439D03A47a0419",
  WETH_ERC20: "0xce7726e4175240F4289F953Ea6Ccf854e429f2C1",
}

const liquityAddrsTest = {
  GENERAL_SAFE:"0x8be7e24263c199ebfcfd6aebca83f8d7ed85a5dd",  // Hardhat dev address
  LQTY_SAFE:"0x20c81d658aae3a8580d990e441a9ef2c9809be74",  //  Hardhat dev address
  // LQTY_SAFE:"0x66aB6D9362d4F35596279692F0251Db635165871",
  DEPLOYER: "0x66aB6D9362d4F35596279692F0251Db635165871" // Mainnet test deployment address
}

const liquityAddrs = {
  GENERAL_SAFE:"0xaDBf946101F1c109adc27703C5f382C290Dfec52", // TODO
  LQTY_SAFE:"0x42DdCb0f5717191A0af97D2E118776Cf2EdDd0A4", // TODO
  DEPLOYER: "0x42DdCb0f5717191A0af97D2E118776Cf2EdDd0A4",
  feemanager: "0xd52C0377D4422d0DF35eA17FDfe9f3fa83b85660"
}

const beneficiaries = {
  TEST_INVESTOR_A: "0x9B4946e98Af75DF5425Df7811B549FDDCE4b301f",
  TEST_INVESTOR_B: "0x42DdCb0f5717191A0af97D2E118776Cf2EdDd0A4",
  TEST_INVESTOR_C: "0x9ea530178b9660d0fae34a41a02ec949e209142e",
  TEST_INVESTOR_D: "0xffbb4f4b113b05597298b9d8a7d79e6629e726e8",
  TEST_INVESTOR_E: "0x89ff871dbcd0a456fe92db98d190c38bc10d1cc1"
}

const OUTPUT_FILE = './mainnetDeployment/ethwDeploymentOutput.json'

const delay = ms => new Promise(res => setTimeout(res, ms));
const waitFunction = async () => {
  return delay(90000) // wait 90s
}

const GAS_PRICE = 1000000000 // 1 Gwei
const TX_CONFIRMATIONS = 1

const ETHERSCAN_BASE_URL = ''

module.exports = {
  externalAddrs,
  liquityAddrs,
  beneficiaries,
  OUTPUT_FILE,
  waitFunction,
  GAS_PRICE,
  TX_CONFIRMATIONS,
  ETHERSCAN_BASE_URL,
};
