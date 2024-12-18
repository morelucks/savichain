import Logo from "../../assets/Logomark.png";
import { Link } from "react-router-dom";
Link;

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900  shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to={"/"}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={Logo}
                alt="logo"
                className="bg-white rounded-full h-8"
              />
              <span className="hidden text-white md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SaviChain
              </span>
            </Link>

            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link
                to={"/"}
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500"
              >
                Dashboard
              </Link>

              <Link
                to={"/createAccount"}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Create New Group
              </Link>
              <Link
                to={"/joingroup"}
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-white md:p-0"
              >
                Join Group
              </Link>
              <Link
                to={"/createWaitlist"}
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:text-white md:p-0"
              >
                Save
              </Link>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Invest
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              OnBoardX™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
