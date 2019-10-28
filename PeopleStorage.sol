pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract PeopleStorage {
    
        struct People {
            string FirstName;
            string LastName;
        }
    
        People[] public PeopleData;
        function getPeoples() public constant returns (People[]){
           return PeopleData;
        }
        function addPeoples(string  _firstName, string  _lastName) public returns (bool) {
        People memory m;
        m.FirstName = _firstName;
        m.LastName = _lastName;
        PeopleData.push(m);
        return true;
    }
}