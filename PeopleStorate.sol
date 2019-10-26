pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract PeopleStorate {
    
        struct People {
            string FirstName;
            string LastName;
        }
    
        People[] public PeopleData;
        function getPeoples() public constant returns (People[]){
           return PeopleData;
        }
        function addPeoples( string  _FirstName,string  _LastName) public returns (bool) {
        People memory m;
        m.FirstName = _FirstName;
        m.LastName = _LastName;
        PeopleData.push(m);
        return true;
    }
}