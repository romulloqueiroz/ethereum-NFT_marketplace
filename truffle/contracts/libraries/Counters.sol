// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import './SafeMath.sol';

library Counters {
  using SafeMath for uint;

  struct Counter {
    uint _value;
  }

  function current(Counter storage counter) internal view returns (uint) {
    return counter._value;
  }

  function increment(Counter storage counter) internal {
    counter._value++;
  }

  function decrement(Counter storage counter) internal {
    counter._value--;
  }


} 