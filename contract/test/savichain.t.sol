// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "forge-std/Test.sol";
// import "../src/Savichain.sol";  // Test if this path works

// contract SavichainTest is Test {
//     Savichain public savichain;
//     address public member1;
//     address public member2;
//     address public member3;

//     function setUp() public {
//         // Deploy the contract
//         savichain = new Savichain();
        
//         // Define test members
//         member1 = address(0x123);
//         member2 = address(0x456);
//         member3 = address(0x789);
//     }

//     // Test: Create a new group
//     function testCreateGroup() public {
//         address;
//         members[0] = member1;
//         members[1] = member2;

//         uint256 groupId = savichain.createGroup("Test Group", members);

//         // Check if the group was created successfully
//         (string memory name, address[] memory groupMembers, uint256 totalSavings, uint256 interestRate) = savichain.getGroupDetails(groupId);

//         assertEq(name, "Test Group");
//         assertEq(groupMembers.length, 2);
//         assertEq(groupMembers[0], member1);
//         assertEq(groupMembers[1], member2);
//     }

//     // Test: Contribute to a group
//     function testContribute() public {
//         address;
//         members[0] = member1;
//         members[1] = member2;

//         uint256 groupId = savichain.createGroup("Test Group", members);

//         // Start the contribution
//         vm.deal(member1, 1 ether); // Add ether to member1
//         vm.prank(member1);
//         savichain.contribute{value: 1 ether}(groupId);

//         // Check the balance and total savings after the contribution
//         uint256 balance = savichain.getBalance(groupId, member1);
//         (string memory name, address[] memory groupMembers, uint256 totalSavings, uint256 interestRate) = savichain.getGroupDetails(groupId);

//         assertEq(balance, 1 ether);
//         assertEq(totalSavings, 1 ether);
//     }

//     // Test: Withdraw funds from the group
//     function testWithdrawFunds() public {
//         address;
//         members[0] = member1;
//         members[1] = member2;

//         uint256 groupId = savichain.createGroup("Test Group", members);

//         // Contribute funds
//         vm.deal(member1, 1 ether);
//         vm.prank(member1);
//         savichain.contribute{value: 1 ether}(groupId);

//         // Set interest rate
//         savichain.setInterestRate(groupId, 5); // 5% interest rate

//         // Withdraw funds
//         uint256 initialBalance = address(member1).balance;
//         vm.prank(member1);
//         savichain.withdrawFunds(groupId);

//         uint256 finalBalance = address(member1).balance;
//         assertEq(finalBalance, initialBalance + 1.05 ether);
//     }

//     // Test: Check membership
//     function testIsMember() public {
//         address;
//         members[0] = member1;
//         members[1] = member2;

//         uint256 groupId = savichain.createGroup("Test Group", members);

//         assertTrue(savichain.isMember(groupId, member1)); // member1 should be a member
//         assertTrue(savichain.isMember(groupId, member2)); // member2 should be a member
//         assertFalse(savichain.isMember(groupId, member3)); // member3 should not be a member
//     }

//     // Test: Ensure that a user cannot contribute if not a member
//     function testContributeNotAMember() public {
//         address;
//         members[0] = member1;
//         members[1] = member2;

//         uint256 groupId = savichain.createGroup("Test Group", members);

//         vm.deal(member3, 1 ether);
//         vm.expectRevert("Not a member of this group");
//         vm.prank(member3);
//         savichain.contribute{value: 1 ether}(groupId);
//     }
// }
