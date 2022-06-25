import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#161b22] py-4 flex justify-between items-center px-8">
      <div className="flex justify-between items-center space-x-8">
        <svg
          className="h-8 fill-white"
          fill="current"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          data-view-component="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <div className="relative flex justify-center items-center">
          <input
            type="text"
            className="placeholder:text-white px-4 bg-gray-700 border border-gray-400 rounded h-8"
            placeholder="Search or jump to..."
          />
          <span className="px-1 h-6 border border-gray-400 absolute text-gray-400 rounded right-2 top-1  align-middle">
            /
          </span>
        </div>
        <ul className="flex text-white space-x-4">
          <li>
            <a className="hover:text-gray-300" href="#">
              Pull Requests
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Issues
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Marketplace
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Explore
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center space-x-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="h-[0.5] w-[0.5] bg-blue-500 absolute rounded-full"></span>
        </div>
        <div>
          <svg
            className="h-5 w-5 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/20243540?s=40&v=4"
            className="rounded-full h-5 w-5"
            width={20}
            height={20}
          />
        </div>
      </div>
    </header>
  );
}
