// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import './ERC165.sol';
import './interfaces/IERC721.sol';

contract ERC721 is ERC165, IERC721 {
  // Mapping from token id to owner
  mapping (uint => address) private _tokenOwner;

  // Mapping from owner to number of owned tokens
  mapping (address => uint) private _ownedTokensCount;

  // Mapping from token id to approved addresses
  mapping (uint => address) private _tokenApprovals;

  constructor() {
    _registerInterface(bytes4(keccak256('balanceOf(bytes4)')^
    keccak256('ownerOf(bytes4)')^keccak256('transferFrom(bytes4)')));
  }

  function balanceOf(address _owner) public override view returns (uint balance) {
    require(_owner != address(0), 'Owner cannot be the 0 address');
    return _ownedTokensCount[_owner];
  }

  function ownerOf(uint _tokenId) public override view returns (address owner) {
    return _tokenOwner[_tokenId];
  }

  function _exists(uint _tokenId) internal view returns (bool) {
    return _tokenOwner[_tokenId] != address(0);
  }

  function _mint(address to, uint tokenId) internal virtual {
    require(to != address(0), 'ERC721: mint to 0 address is invalid');
    require(!_exists(tokenId), 'ERC721: minting existing token');
    _tokenOwner[tokenId] = to;
    _ownedTokensCount[to]++;

    emit Transfer(address(0), to, tokenId);
  }

  function _transferFrom(address _from, address _to, uint _tokenId) internal {
    require(_to != address(0), 'ERC721 Transfer to the zero address');
    require(ownerOf(_tokenId) == _from, 'Trying to transfer a token the address does not own!');

    _ownedTokensCount[_from]--;
    _ownedTokensCount[_to]++;

    _tokenOwner[_tokenId] = _to;

    emit Transfer(_from, _to, _tokenId);
  } 

  function transferFrom(address _from, address _to, uint _tokenId) override public {
    require(isApprovedOrOwner(msg.sender, _tokenId), 'ERC721: Approval needed');
    require(ownerOf(_tokenId) == _from, 'Trying to transfer a token the address does not own!');
    _transferFrom(_from, _to, _tokenId);
  }

  function approve(address _to, uint _tokenId) public {
    require(ownerOf(_tokenId) != _to, 'Cannot approve a token you already own!');
    require(ownerOf(_tokenId) == msg.sender, 'Cannot approve a token you do not own!');

    _tokenApprovals[_tokenId] = _to;

    emit Approval(ownerOf(_tokenId), _to, _tokenId);
  }

  function isApprovedOrOwner(address spender, uint tokenId) internal view returns (bool) {
    require(_exists(tokenId), 'ERC721: non-existent token');
    address owner = ownerOf(tokenId);
    return owner == spender;
  }
}