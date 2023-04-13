// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract asfd is ERC721 {
address public owner;
mapping(address => bool) public admins;
mapping(address => uint[]) private _userTokens; 
mapping(uint => string ) private tokentoevent; // mapping user address to array of token ids
mapping(uint256 => uint) private _tokenIndex; // mapping token id to index in user's array

uint tokenId=0;

constructor() ERC721("EventPass", "EP") {
    owner = msg.sender;
    admins[msg.sender] = true;
}

function minto(string memory e) public {
  
    // require(msg.sender == owner, "Only the contract owner can mint new tokens");
    tokenId++;
    
    
    _mint(msg.sender, tokenId);
    _addTokenToUser(msg.sender, tokenId);
    tokentoevent[tokenId]=e;

}
 function buyPoints() public payable  {
   
      address payable own = payable(0xaBF9d65AE288ec97d1DB998A5EaD6582475fbA41);
      own.transfer(msg.value); 
     
   
  
  }

// function transferFrom(address from, address to, uint256 tokenId) public override {
//     require(msg.sender == owner || _isApprovedOrOwner(msg.sender, tokenId), "Transfer not authorized");
//     _transfer(from, to, tokenId);
//     _removeTokenFromUser(from, tokenId);
//     _addTokenToUser(to, tokenId);
// }

function burn(uint256 token,string memory e) public {
    require(admins[msg.sender] == true, "Only admins can burn tokens");
    require(_exists(token), "Token does not exist");
    require(stringsEquals(tokentoevent[token],e),"Token ");
    address ow = ownerOf(token);
    _burn(token);
    _removeTokenFromUser(ow, token);
}
function stringsEquals(string memory s1, string memory s2) private pure returns (bool) {
    bytes memory b1 = bytes(s1);
    bytes memory b2 = bytes(s2);
    uint256 l1 = b1.length;
    if (l1 != b2.length) return false;
    for (uint256 i=0; i<l1; i++) {
        if (b1[i] != b2[i]) return false;
    }
    return true;
}

function getUserTokens(address user) public view returns (uint[] memory) {
    return _userTokens[user];
}

function deleteToken(address user, uint256 token) public {
    require(admins[msg.sender] == true, "Only admins can delete tokens");
    require(_exists(token), "Token does not exist");
    require(ownerOf(token) == user, "User does not own the token");
    uint[] storage userTokens = _userTokens[user];
    uint tokenIndex = _tokenIndex[token];
    uint lastTokenIndex = userTokens.length - 1;
    uint lastToken = userTokens[lastTokenIndex];
    userTokens[tokenIndex] = lastToken;
    userTokens.pop();
    _tokenIndex[lastToken] = tokenIndex;
    delete _tokenIndex[token];
    _burn(token);
}

function addAdmin(address account) public {
    require(msg.sender == owner, "Only the contract owner can add admins");
    admins[account] = true;
}

function removeAdmin(address account) public {
    require(msg.sender == owner, "Only the contract owner can remove admins");
    admins[account] = false;
}

function _addTokenToUser(address user, uint256 token) private {
    _userTokens[user].push(token);
    _tokenIndex[token] = _userTokens[user].length - 1;
}

function _removeTokenFromUser(address user, uint256 token) private {
    uint[] storage userTokens = _userTokens[user];
    uint tokenIndex = _tokenIndex[token];
    uint lastTokenIndex = userTokens.length - 1;
    uint lastToken = userTokens[lastTokenIndex];
    userTokens[tokenIndex] = lastToken;
    userTokens.pop();
    _tokenIndex[lastToken] = tokenIndex;
    delete _tokenIndex[token];
}
}
