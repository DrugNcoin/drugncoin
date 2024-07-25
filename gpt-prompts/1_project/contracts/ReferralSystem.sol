// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DrugNcoin.sol";

contract ReferralSystem {
    DrugNcoin public token;
    mapping(address => uint256) public referralCount;
    mapping(address => uint256) public referralRewards;

    constructor(address tokenAddress) {
        token = DrugNcoin(tokenAddress);
    }

    function addReferral(address referrer) external {
        referralCount[referrer]++;
        uint256 reward = calculateReward(referralCount[referrer]);
        referralRewards[referrer] += reward;
        token.distributeTokens(referrer, reward);
    }

    function calculateReward(uint256 count) internal pure returns (uint256) {
        if (count <= 5) {
            return 5 * 10**18;
        } else if (count <= 10) {
            return 7 * 10**18;
        } else if (count % 50 == 0) {
            return 100 * 10**18;
        } else {
            return 10 * 10**18;
        }
    }
}