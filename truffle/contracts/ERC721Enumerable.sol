// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import './ERC721.sol';
import './interfaces/IERC721Enumerable.sol';

contract ERC721Enumerable is ERC721, IERC721Enumerable {
  uint[] private _allTokens;

  // Mapping from tokenId to position in the _allTokens array
  mapping(uint => uint) private _allTokensIndex;

  // Mapping of owner to list of owned tokens
  mapping(address => uint[]) private _ownedTokens;

  // Mapping from tokenId index of owner tokens list
  mapping(uint => uint) private _ownedTokensIndex;

  // Mapping from tokenId to approved addresses
  mapping(uint => address) private _tokenApprovals;


  constructor() {
    _registerInterface(bytes4(keccak256('totalSupply(bytes4)')^
    keccak256('tokenByIndex(bytes4)')^keccak256('tokenOfOwnerByIndex(bytes4)')));
  }


  function totalSupply() public view override returns(uint) {
    return _allTokens.length;
  }

  // function tokenByIndex(uint _index) external view returns (uint) {
  //   return _allTokens[_index];
  // }

  // function tokenOfOwnerByIndex(address _owner, uint _index) external view returns (uint) {
  //   return _allTokens[_index];
  // }

  function _mint(address to, uint tokenId) internal override(ERC721) {
    super._mint(to, tokenId);

    _addTokensToAllTokenEnumeration(tokenId);
    _addTokensToOwnerEnumeration(to, tokenId);
  }

  function _addTokensToOwnerEnumeration(address to, uint tokenId) private {
    _ownedTokens[to].push(tokenId);
    _ownedTokensIndex[tokenId] = _ownedTokens[to].length; // -1?

  }

  function _addTokensToAllTokenEnumeration(uint tokenId) private {
    _allTokensIndex[tokenId] = _allTokens.length;
    _allTokens.push(tokenId);
  }

  function tokenByIndex(uint index) public view override returns(uint) {
    require(index < totalSupply(), 'index out of range');
    return _allTokens[index];
  }

  function tokenOfOwnerByIndex(address owner, uint index) public view override returns(uint) {
    require(index < balanceOf(owner), 'owner index out of range');
    return _ownedTokens[owner][index];  
  }

}