// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Savichain {
    struct Group {
        string name;
        address[] members;
        uint256 amount;
        mapping(address => uint256) balances;
        uint256 totalSavings;
        uint256 withdrawalDuration; // Duration in seconds
        uint256 startTime; // Timestamp when the group was created
        bool isWithdrawn; // To prevent double withdrawals
    }
        struct GroupDetails {
                uint256 id;
                string name;
                address[] members;
                uint256 amount;
                uint256 totalSavings;
                uint256 withdrawalDuration;
                uint256 startTime;
                bool isWithdrawn;
            }
    uint256 public groupIdCounter;
    mapping(uint256 => Group) public groups;
    mapping(address => uint256) public individualSavings;
    uint256[] public groupIds; // Array to store all group IDs for enumeration


    event GroupCreated(uint256 indexed groupId, string name, address[] members);
    event MemberJoined(uint256 indexed groupId, address indexed member);
    event ContributionMade(uint256 indexed groupId, address indexed member, uint256 amount);
    event FundsWithdrawn(uint256 indexed groupId, address indexed member, uint256 amount);
    event GroupWithdrawalCompleted(uint256 indexed groupId);
    event SavingsDeposited(address indexed user, uint256 amount);

    modifier onlyMember(uint256 groupId) {
        require(isMember(groupId, msg.sender), "Not a member of this group");
        _;
    }

    modifier onlyAfterDuration(uint256 groupId) {
        require(block.timestamp >= groups[groupId].startTime + groups[groupId].withdrawalDuration, "Withdrawal not yet allowed");
        _;
    }

    // Create a new savings group
    function createGroup(
        string memory name,
        address[] memory members,
        uint _amount,
        uint256 withdrawalDuration 
    ) public returns (uint256) {
        require(members.length > 0, "Group must have at least one member");

        groupIdCounter++;
        Group storage newGroup = groups[groupIdCounter];
        newGroup.name = name;
        newGroup.amount=_amount;
        newGroup.withdrawalDuration = withdrawalDuration;
        newGroup.startTime = block.timestamp;

        // Add members
        for (uint256 i = 0; i < members.length; i++) {
            newGroup.members.push(members[i]);
        }

        emit GroupCreated(groupIdCounter, name, members);
        return groupIdCounter;
    }

    // Allow users to join an existing group
    function joinGroup(uint256 groupId) public {
        Group storage group = groups[groupId];
        require(!isMember(groupId, msg.sender), "Already a member of this group");

        group.members.push(msg.sender);

        emit MemberJoined(groupId, msg.sender);
    }

    // Contribute to a savings group
    function saveInGroup(uint256 groupId) public payable onlyMember(groupId) {
        require(msg.value > 0, "Contribution must be greater than zero");

        Group storage group = groups[groupId];
        group.balances[msg.sender] += msg.value;
        group.totalSavings += msg.value;

        emit ContributionMade(groupId, msg.sender, msg.value);
    }

    // Withdraw funds proportionally after the duration has elapsed
    function withdrawFunds(uint256 groupId) public onlyAfterDuration(groupId)  payable {
        Group storage group = groups[groupId];
        require(!group.isWithdrawn, "Funds already withdrawn");
        require(group.totalSavings > 0, "No savings to withdraw");

        // Distribute funds proportionally
        uint256 totalSavings = group.totalSavings;
        group.isWithdrawn = true;

        for (uint256 i = 0; i < group.members.length; i++) {
            address member = group.members[i];
            uint256 memberBalance = group.balances[member];
            if (memberBalance > 0) {
                uint256 payout = (memberBalance * totalSavings) / group.totalSavings;
                group.balances[member] = 0; // Reset balance
                payable(member).transfer(payout);

                emit FundsWithdrawn(groupId, member, payout);
            }
        }

        // Reset total savings
        group.totalSavings = 0;

        emit GroupWithdrawalCompleted(groupId);
    }

    // Individual savings
    function individualSave() public payable {
        require(msg.value > 0, "Deposit must be greater than zero");
        individualSavings[msg.sender] += msg.value;
        emit SavingsDeposited(msg.sender, msg.value); }

    // Check if an address is a member of a group
    function isMember(uint256 groupId, address member) public view returns (bool) {
        Group storage group = groups[groupId];
        for (uint256 i = 0; i < group.members.length; i++) {
            if (group.members[i] == member) {
                return true;
            }
        }
        return false;
    }

    // Get group details
    function getGroupDetails(uint256 groupId)
        public
        view
        returns (
            string memory name,
            address[] memory members,
            uint256 totalSavings,
            uint256 withdrawalDuration,
            uint256 startTime,
            bool isWithdrawn
        )
    {
        Group storage group = groups[groupId];
        return (
            group.name,
            group.members,
            group.totalSavings,
            group.withdrawalDuration,
            group.startTime,
            group.isWithdrawn
        );
    }
 // Function to fetch all group details
    function getAllGroups() public view returns (GroupDetails[] memory) {
        GroupDetails[] memory allGroups = new GroupDetails[](groupIdCounter);

        for (uint256 i = 1; i <= groupIdCounter; i++) {
            Group storage group = groups[i];
            allGroups[i - 1] = GroupDetails({
                id: i,
                name: group.name,
                members: group.members,
                amount: group.amount,
                totalSavings: group.totalSavings,
                withdrawalDuration: group.withdrawalDuration,
                startTime: group.startTime,
                isWithdrawn: group.isWithdrawn
            });
        }

        return allGroups;
    }
    // Get balance of a member in a group
    function getBalance(uint256 groupId, address member) public view returns (uint256) {
        return groups[groupId].balances[member];
    }
}
