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
            placeholder="Enter wallet address"
            required
          />
          <input
            type="search"
            id="search-dropdown"
            className="block my-3 p-2.5 w-full z-20 outline-none text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Group ID"
            required
          /><input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 outline-none text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Amount"
            required
          />
          {/* <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button> */}
        </div>
      </div>
      <div className="md:w-[40%]">
        {/* <div className="flex flex-row items-center mt-4 w-full" >
            <h2 className="bg-blue-700 p-2 rounded-2xl mr-4 text-white">1</h2>
            <div className="flex flex-row items-center md:justify-between border rounded-xl p-2 w-full">
                <Avatar className="md:mx-2">
                    <AvatarImage src="https://github.com/shadcn.png"/>
                </Avatar>
                <p className="text-xs">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
                <IoIosCheckmarkCircleOutline className="text-green-200 font-semibold text-2xl ml-3"/>
            </div>
        </div> */}
        {/* <div className="flex flex-row items-center mt-4 w-full" >
            <h2 className="bg-blue-700 p-2 rounded-2xl mr-4 text-white">2</h2>
            <div className="flex flex-row items-center justify-between border rounded-xl p-2 w-full">
                <Avatar className="mx-2">
                    <AvatarImage src="https://github.com/shadcn.png"/>
                </Avatar>
                <p>0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
                <IoIosCheckmarkCircleOutline className="text-green-200 font-semibold text-2xl ml-3"/>
            </div>
        </div> */}

      </div>

      <Button className="mt-10 bg-blue-800 hover:bg-blue-600 rounded-2xl text-white w-[40%]">
         Save
      </Button>
    </div>
  );
};

export default WaitList;