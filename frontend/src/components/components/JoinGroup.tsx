const JoinGroup = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="w-[40%] flex flex-col items-center mt-10">
        <h2 className="text-2xl my-4 font-normal text-black">Join savings Group</h2>

        <div className="w-full flex flex-col items-center">
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
          />
          <button
            type="submit"
            className="w-[40%] mt-5 rounded-2xl p-2.5 h-full text-sm font-medium text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Join group
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinGroup
