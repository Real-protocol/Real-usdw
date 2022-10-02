pragma solidity ^0.6.11;

interface IOracle {
  function updateReporter(address reporter, bool isReporter) external;
  function updateData(bytes32 key, uint payload) external;
  function getData(bytes32 key) 
    external 
    view 
    returns(bool result, uint date, uint payload);
}
