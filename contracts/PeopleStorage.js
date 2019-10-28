require('dotenv').config()
const Web3 = require('web3');
const abi = require("./abi/PeopleStorageAbi")
let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(process.env.RPC_URL));
var PeopleContractInstance =  new web3.eth.Contract(abi,process.env.ContractAddress_PeopleStorage);
module.exports  = PeopleContractInstance;