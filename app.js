const PeopleContractInstance = require("./contracts/PeopleStorate")
async function main(){
    const People = await PeopleContractInstance.methods.getPeoples().call( async(err, result) => {  return await result })
    console.log(People)
}
main()