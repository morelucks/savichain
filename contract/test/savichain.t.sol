// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/Savichain.sol";  // Test if this path works

contract SavichainTest is Test {
    Savichain public savichain;
    address public member1;
    address public member2;
    address public member3;

    function setUp() public {
        // Deploy the contract
        savichain = new Savichain();
        
        // Define test members
        member1 = address(0x123);
        member2 = address(0x456);
        member3 = address(0x789);
    }

}
