// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import {Script, console} from "forge-std/Script.sol";
import {Savichain} from "../src/Savichain.sol";

contract DeploySavichainScript is Script {
    function run() public {
        // Get deployment parameters from environment
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        string memory network = vm.envOr("NETWORK", string("base-sepolia"));
        
        console.log("Deploying Savichain to network:", network);
        console.log("Deployer address:", vm.addr(deployerPrivateKey));
        
        vm.startBroadcast(deployerPrivateKey);

        // Deploy Savichain
        console.log("Deploying Savichain...");
        Savichain savichain = new Savichain();
        console.log("Savichain deployed at:", address(savichain));

        vm.stopBroadcast();

        // Output deployment summary
        console.log("\n=== SAVICHAIN DEPLOYMENT SUMMARY ===");
        console.log("Network:", network);
        console.log("Savichain Contract:", address(savichain));
        console.log("Deployer:", vm.addr(deployerPrivateKey));
        console.log("Contract Name: Savichain - Decentralized Savings Platform");
        console.log("Features: Group Savings, Individual Savings, Time-locked Withdrawals");
        console.log("=====================================\n");
    }
}
