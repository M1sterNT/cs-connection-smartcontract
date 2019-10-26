const PeopleStorateAbi = 
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_FirstName",
				"type": "string"
			},
			{
				"name": "_LastName",
				"type": "string"
			}
		],
		"name": "addPeoples",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPeoples",
		"outputs": [
			{
				"components": [
					{
						"name": "FirstName",
						"type": "string"
					},
					{
						"name": "LastName",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PeopleData",
		"outputs": [
			{
				"name": "FirstName",
				"type": "string"
			},
			{
				"name": "LastName",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports  = PeopleStorateAbi;