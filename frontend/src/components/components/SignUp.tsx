import React, { useState } from "react";
import { useWriteContract } from "wagmi";
import {abi} from "../../../contracts/abi";
const SignUp = () => {
    const { data: hash, writeContract, error} = useWriteContract();
  // State for form fields
  const [formData, setFormData] = useState({
    groupName: "",
    members: "",
    groupAmount: "",
    duration: "",
    agreeToTerms: false,
  });

  // Handle input change
  const handleChange = (e:any) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form Data Submitted: ", formData);
const { groupName, members, groupAmount, duration, } = formData;
writeContract({
      address: '0x13cf1161dFB825f7803379d3303e19f7fa9dEcbC',
      abi:abi,
      functionName: 'createGroup',
      args: [groupName, [members], groupAmount, duration],
    })
  } 

    // Perform further actions here (e.g., send data to the backend)


  return (
    <div className="flex justify-center items-center align-middle p-3 md:p-0">
      <form
        onSubmit={handleSubmit}
        className="md:w-[30%] md:mt-16 flex flex-col"
      >
        <h2 className="w-full text-center mb-10 text-3xl font-semibold">
          Create a new savings group
        </h2>
        <div className="mb-2">
          <label
            htmlFor="groupName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Group Name
          </label>
          <input
            type="text"
            id="groupName"
            value={formData.groupName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter a name for this Group"
            required
          />
        </div>
{error && error.message}
        <div className="mb-2">
          <label
            htmlFor="members"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Members
          </label>
          <input
            type="text"
            id="members"
            value={formData.members}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Address of members"
            required
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="groupAmount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Group Amount
          </label>
          <input
            type="text"
            id="groupAmount"
            value={formData.groupAmount}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Set the savings amount"
            required
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="duration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Duration
          </label>
          <input
            type="tel"
            id="duration"
            value={formData.duration}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Number of months"
            required
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="agreeToTerms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full overflow-hidden text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignUp;
