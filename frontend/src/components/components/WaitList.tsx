import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";

const WaitList = () => {
  return (
    <div className="flex flex-col  items-center h-screen">
      <div className="md:w-[40%] flex flex-col items-center mt-10">
        <h2 className="text-2xl my-4 font-normal text-black">Your Funds are safe</h2>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 outline-none text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Group Name"
            required
          />
         <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 mt-5  w-full z-20 outline-none text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Amount"
            required
          />
        
        </div>
      </div>
      <div className="md:w-[40%]">
       
      </div>

      <Button className="mt-10 bg-blue-800 hover:bg-blue-600 rounded-2xl text-white w-[40%]">
         Save
      </Button>
    </div>
  );
};

export default WaitList;