// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

library SafeMath {
  function add(uint a, uint b) internal pure returns (uint c) {
    c = a + b;
    require(c >= a, 'SafeMath: addition overflow');
  }

  function sub(uint a, uint b) internal pure returns (uint c) {
    require(b <= a, 'SafeMath: subtraction overflow');
    c = a - b;
  }

  function mul(uint a, uint b) internal pure returns (uint c) {
    c = a * b;
    require(a == 0 || c / a == b, 'SafeMath: multiplication overflow');
  }

  function div(uint a, uint b) internal pure returns (uint c) {
    require(b > 0, 'SafeMath: division by zero');
    c = a / b;
  }

  function mod(uint a, uint b) internal pure returns (uint c) {
    require(b > 0, 'SafeMath: modulo by zero');
    c = a % b;
  }

}