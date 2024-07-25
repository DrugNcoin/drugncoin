// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DrugNcoin is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 100000000000 * 10**18;
    uint256 public constant TEAM_RESERVE = 10000000000 * 10**18;

    constructor() ERC20("DrugNcoin", "DNC") {
        _mint(msg.sender, TEAM_RESERVE);
        _mint(address(this), TOTAL_SUPPLY - TEAM_RESERVE);
    }

    function distributeTokens(address to, uint256 amount) external onlyOwner {
        _transfer(address(this), to, amount);
    }
}