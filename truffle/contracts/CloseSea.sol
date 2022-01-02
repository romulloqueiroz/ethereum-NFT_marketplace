// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import './ERC721Connector.sol';

contract CloseSea is ERC721Connector {
  string[] public nftArr;

  mapping(string => bool) _nftExists;

  function mint(string memory _nft) public {
    require(!_nftExists[_nft], 'NFT already exists.');

    nftArr.push(_nft);
    uint _id = nftArr.length - 1;

    _mint(msg.sender, _id);

    _nftExists[_nft] = true;
  }

  constructor() ERC721Connector('CloseSea', 'CLS') {}
}