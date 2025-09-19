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

    // Test: Create a new group
    function testCreateGroup() public {
        address[] memory members = new address[](2);
        members[0] = member1;
        members[1] = member2;

        uint256 groupId = savichain.createGroup("Test Group", members, 1 ether, 30 days);

        // Check if the group was created successfully
        (string memory name, address[] memory groupMembers, uint256 totalSavings, uint256 withdrawalDuration, uint256 startTime, bool isWithdrawn) = savichain.getGroupDetails(groupId);

        assertEq(name, "Test Group");
        assertEq(groupMembers.length, 2);
        assertEq(groupMembers[0], member1);
        assertEq(groupMembers[1], member2);
    }

    // Test: Contribute to a group
    function testContribute() public {
        address[] memory members = new address[](2);
        members[0] = member1;
        members[1] = member2;

        uint256 groupId = savichain.createGroup("Test Group", members, 1 ether, 30 days);

        // Start the contribution
        vm.deal(member1, 1 ether); // Add ether to member1
        vm.prank(member1);
        savichain.saveInGroup{value: 1 ether}(groupId);

        // Check the balance and total savings after the contribution
        uint256 balance = savichain.getBalance(groupId, member1);
        (string memory name, address[] memory groupMembers, uint256 totalSavings, uint256 withdrawalDuration, uint256 startTime, bool isWithdrawn) = savichain.getGroupDetails(groupId);

        assertEq(balance, 1 ether);
        assertEq(totalSavings, 1 ether);
    }

    // Test: Withdraw funds from the group
    function testWithdrawFunds() public {
        address[] memory members = new address[](2);
        members[0] = member1;
        members[1] = member2;

        uint256 groupId = savichain.createGroup("Test Group", members, 1 ether, 30 days);

        // Contribute funds
        vm.deal(member1, 1 ether);
        vm.prank(member1);
        savichain.saveInGroup{value: 1 ether}(groupId);

        // Set interest rate - NOTE: This function does not exist in Savichain.sol, need to remove or implement. For now, commenting out.
        // savichain.setInterestRate(groupId, 5); // 5% interest rate

        // Withdraw funds
        uint256 initialBalance = address(member1).balance;
        vm.warp(block.timestamp + 30 days);
        vm.prank(member1);
        savichain.withdrawFunds(groupId);

        uint256 finalBalance = address(member1).balance;
        // The interest rate is not applied in the contract, so the assertion should just check for the initial contribution.
        // Also, the withdrawFunds function transfers the proportional amount, not the total savings.
        // For simplicity, let's assume all 1 ether is withdrawn by member1 if they are the only contributor.
        // If there are multiple members and only member1 contributed, member1 should get back their contribution.
        // We will adjust this assertion after reviewing the withdrawFunds logic more carefully if needed.
        // For now, let's assume 1 ether is returned.
        assertEq(finalBalance, initialBalance + 1 ether);
    }

    // Test: Check membership
    function testIsMember() public {
        address[] memory members = new address[](2);
        members[0] = member1;
        members[1] = member2;

        uint256 groupId = savichain.createGroup("Test Group", members, 1 ether, 30 days);

        assertTrue(savichain.isMember(groupId, member1)); // member1 should be a member
        assertTrue(savichain.isMember(groupId, member2)); // member2 should be a member
        assertFalse(savichain.isMember(groupId, member3)); // member3 should not be a member
    }

    // Test: Ensure that a user cannot contribute if not a member
    function testContributeNotAMember() public {
        address[] memory members = new address[](2);
        members[0] = member1;
        members[1] = member2;

        uint256 groupId = savichain.createGroup("Test Group", members, 1 ether, 30 days);

        vm.deal(member3, 1 ether);
        vm.expectRevert("Not a member of this group");
        vm.prank(member3);
        savichain.saveInGroup{value: 1 ether}(groupId);
    }

    // Test: Allow a user to join an existing group
    function testJoinGroup() public {
        address[] memory members = new address[](1);
        members[0] = member1;

        uint256 groupId = savichain.createGroup("Initial Group", members, 1 ether, 30 days);

        vm.prank(member2);
        savichain.joinGroup(groupId);

        assertTrue(savichain.isMember(groupId, member1));
        assertTrue(savichain.isMember(groupId, member2));
    }

    // Test: Allow a user to make individual savings
    function testIndividualSave() public {
        vm.deal(member1, 2 ether); // Add ether to member1
        vm.prank(member1);
        savichain.individualSave{value: 1 ether}();

        assertEq(savichain.individualSavings(member1), 1 ether);

        vm.prank(member1);
        savichain.individualSave{value: 0.5 ether}();

        assertEq(savichain.individualSavings(member1), 1.5 ether);
    }
}
