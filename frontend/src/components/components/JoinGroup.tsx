import { useState, useEffect } from "react";
import { useReadContract, useAccount } from "wagmi";
// import { ethers } from "ethers";
import { abi } from "../../../contracts/abi";
// import { config } from "../../config";

// Replace with your contract address
const CONTRACT_ADDRESS = "0xE6767fd7E490Bcf721a6201f23b6EeceEF91dcdE";

export default function GroupList() {
  const { address } = useAccount(); // Get the connected user's address
  // const provider = useProvider(); // Get the Ethereum provider

  const [groups, setGroups] = useState<any[]>([]); // State to store groups

  // Use wagmi's useContract to interact with the contract
  const { data: allGroups, isLoading, isError, failureReason } = useReadContract({
    address: CONTRACT_ADDRESS,
    functionName: "getAllGroups",
    abi: abi
  });

  console.log(allGroups, isError, failureReason);

  

  if (isLoading) return <p>Loading groups...</p>;
  if (isError) return <p>Error loading groups.</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[80%] flex flex-col items-center mt-10 h-screen">
        <h2 className="text-2xl my-4 font-normal text-black">
          Join Savings Group
        </h2>

        {/* List groups */}
        <div className="w-full">
          {allGroups?.length > 0 ? (
            <ul className="w-full">
              {allGroups?.map((group, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 my-2 bg-gray-100 rounded-lg shadow"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{[group.name]}</h3>
                    <p className="text-sm text-gray-600">
                      Members: {group.members}
                    </p>
                    <p className="text-sm text-gray-600">
                      Amount: {group.amount.toString()} UDT
                    </p>
                    <p className="text-sm text-gray-600">
                      withdrawalDuration: {group.withdrawalDuration.toString()} Month
                    </p>
                    <p className="text-sm text-gray-600">
                      startTime: {group.startTime.toString()/56}
                    </p>
                  </div>
                  <button
                    // onClick={() => handleJoinGroup(group.id)} // Pass group ID
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                  >
                    Join
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No groups available to join.</p>
          )}
        </div>
      </div>
    </div>
  );
}
