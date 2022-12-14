"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Faucet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_tapAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_tapPeriod",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "lastTapped",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "tapAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tapPeriod",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b50604051620010853803806200108583398101604081905262000034916200025b565b8351849084906200004d906003906020850190620000e8565b50805162000063906004906020840190620000e8565b505050620000806200007a6200009260201b60201c565b62000096565b60809190915260a05250620003119050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f690620002d5565b90600052602060002090601f0160209004810192826200011a576000855562000165565b82601f106200013557805160ff191683800117855562000165565b8280016001018555821562000165579182015b828111156200016557825182559160200191906001019062000148565b506200017392915062000177565b5090565b5b8082111562000173576000815560010162000178565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001b657600080fd5b81516001600160401b0380821115620001d357620001d36200018e565b604051601f8301601f19908116603f01168101908282118183101715620001fe57620001fe6200018e565b816040528381526020925086838588010111156200021b57600080fd5b600091505b838210156200023f578582018301518183018401529082019062000220565b83821115620002515760008385830101525b9695505050505050565b600080600080608085870312156200027257600080fd5b84516001600160401b03808211156200028a57600080fd5b6200029888838901620001a4565b95506020870151915080821115620002af57600080fd5b50620002be87828801620001a4565b604087015160609097015195989097509350505050565b600181811c90821680620002ea57607f821691505b6020821081036200030b57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051610d4062000345600039600081816102400152610a8a0152600081816101e801526105b00152610d406000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d714610285578063a9059cbb14610298578063dd62ed3e146102ab578063f2fde38b146102be578063fd221031146102d157600080fd5b806370a082311461020a578063715018a614610233578063844c827a1461023b5780638da5cb5b1461026257806395d89b411461027d57600080fd5b8063313ce567116100f4578063313ce5671461018c578063395093511461019b57806340c10f19146101ae5780634865701b146101c357806354252207146101e357600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016757806323b872dd14610179575b600080fd5b61012e6102d9565b60405161013b9190610b27565b60405180910390f35b610157610152366004610b98565b61036b565b604051901515815260200161013b565b6002545b60405190815260200161013b565b610157610187366004610bc2565b610383565b6040516012815260200161013b565b6101576101a9366004610b98565b6103a7565b6101c16101bc366004610b98565b6103c9565b005b61016b6101d1366004610bfe565b60066020526000908152604090205481565b61016b7f000000000000000000000000000000000000000000000000000000000000000081565b61016b610218366004610bfe565b6001600160a01b031660009081526020819052604090205490565b6101c161040a565b61016b7f000000000000000000000000000000000000000000000000000000000000000081565b6005546040516001600160a01b03909116815260200161013b565b61012e610440565b610157610293366004610b98565b61044f565b6101576102a6366004610b98565b6104ca565b61016b6102b9366004610c20565b6104d8565b6101c16102cc366004610bfe565b610503565b6101c161059e565b6060600380546102e890610c53565b80601f016020809104026020016040519081016040528092919081815260200182805461031490610c53565b80156103615780601f1061033657610100808354040283529160200191610361565b820191906000526020600020905b81548152906001019060200180831161034457829003601f168201915b5050505050905090565b6000336103798185856105e6565b5060019392505050565b60003361039185828561070a565b61039c858585610784565b506001949350505050565b6000336103798185856103ba83836104d8565b6103c49190610c8d565b6105e6565b6005546001600160a01b031633146103fc5760405162461bcd60e51b81526004016103f390610cb3565b60405180910390fd5b6104068282610952565b5050565b6005546001600160a01b031633146104345760405162461bcd60e51b81526004016103f390610cb3565b61043e6000610a31565b565b6060600480546102e890610c53565b6000338161045d82866104d8565b9050838110156104bd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103f3565b61039c82868684036105e6565b600033610379818585610784565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546001600160a01b0316331461052d5760405162461bcd60e51b81526004016103f390610cb3565b6001600160a01b0381166105925760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103f3565b61059b81610a31565b50565b60006105a8610a83565b90506105d4337f0000000000000000000000000000000000000000000000000000000000000000610952565b33600090815260066020526040902055565b6001600160a01b0383166106485760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103f3565b6001600160a01b0382166106a95760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103f3565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061071684846104d8565b9050600019811461077e57818110156107715760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103f3565b61077e84848484036105e6565b50505050565b6001600160a01b0383166107e85760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103f3565b6001600160a01b03821661084a5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103f3565b6001600160a01b038316600090815260208190526040902054818110156108c25760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103f3565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108f9908490610c8d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161094591815260200190565b60405180910390a361077e565b6001600160a01b0382166109a85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103f3565b80600260008282546109ba9190610c8d565b90915550506001600160a01b038216600090815260208190526040812080548392906109e7908490610c8d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610aaf7f000000000000000000000000000000000000000000000000000000000000000042610ce8565b336000908152600660205260409020549091508111610b245760405162461bcd60e51b815260206004820152602b60248201527f45524332304661756365743a206d7573742077616974206265666f726520746160448201526a383834b7339030b3b0b4b760a91b60648201526084016103f3565b90565b600060208083528351808285015260005b81811015610b5457858101830151858201604001528201610b38565b81811115610b66576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610b9357600080fd5b919050565b60008060408385031215610bab57600080fd5b610bb483610b7c565b946020939093013593505050565b600080600060608486031215610bd757600080fd5b610be084610b7c565b9250610bee60208501610b7c565b9150604084013590509250925092565b600060208284031215610c1057600080fd5b610c1982610b7c565b9392505050565b60008060408385031215610c3357600080fd5b610c3c83610b7c565b9150610c4a60208401610b7c565b90509250929050565b600181811c90821680610c6757607f821691505b602082108103610c8757634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610cae57634e487b7160e01b600052601160045260246000fd5b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082610d0557634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220faab3bc664a828b9dfe774690e0c37bc05a7a1b8a7d8f5cbd91ffa1e85689c8064736f6c634300080d0033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC20Faucet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_name, _symbol, _tapAmount, _tapPeriod, overrides) {
        return super.deploy(_name, _symbol, _tapAmount, _tapPeriod, overrides || {});
    }
    getDeployTransaction(_name, _symbol, _tapAmount, _tapPeriod, overrides) {
        return super.getDeployTransaction(_name, _symbol, _tapAmount, _tapPeriod, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC20Faucet__factory = ERC20Faucet__factory;
ERC20Faucet__factory.bytecode = _bytecode;
ERC20Faucet__factory.abi = _abi;
