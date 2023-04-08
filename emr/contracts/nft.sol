// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract EventPass is ERC721 {
    address public owner;
    mapping(address => bool) public admins;
  mapping(string => uint[]) tokens;
    uint tokenId=0;

    constructor() ERC721("EventPass", "EP") {
        owner = msg.sender;
        admins[msg.sender] = true;
    }

    function mint(address recipient) external {
        require(msg.sender == owner, "Only the contract owner can mint new tokens");
         tokenId++ ;
        _mint(recipient, tokenId);
    }

    function transferFrom(address from, address to, uint256 tokenId) public override {
        require(msg.sender == owner || _isApprovedOrOwner(msg.sender, tokenId), "Transfer not authorized");
        super.transferFrom(from, to, tokenId);
    }

    function burn(uint256 tokenId) public {
        require(admins[msg.sender] == true, "Only admins can burn tokens");
        require(_exists(tokenId), "Token does not exist");
        _burn(tokenId);
    }

    function addAdmin(address account) public {
        require(msg.sender == owner, "Only the contract owner can add admins");
        admins[account] = true;
    }

    function removeAdmin(address account) public {
        require(msg.sender == owner, "Only the contract owner can remove admins");
        admins[account] = false;
    }
}
