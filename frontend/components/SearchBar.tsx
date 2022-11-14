import React, { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faArrowsRotate,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [catDrop, setcatDrop] = useState(false);
  return (
    <>
      {/* Category, Compare i Search placeholder */}

      <div className="mt-8 md:mt-16 flex md:justify-between justify-center">
        {/* Left */}
        <div className="flex gap-3 items-center">
          {/* Category select */}
          <div className="relative">
            <button
              onClick={() => setcatDrop(!catDrop)}
              className="border border-primary-dark px-5 py-2.5 text-primary-dark text-md flex items-center gap-1 bg-white"
              id="menu-btn"
            >
              <FontAwesomeIcon icon={faSortDown} className="mt-[-8px]" />
              <span>All Category</span>
            </button>

            <div
              className={`flex-col rounded mt-1 p-2 text-sm w-36 absolute top-12 left-0 bg-white ${
                catDrop == true ? "flex" : "hidden"
              }`}
              id="dropdown"
            >
              <a
                href="#"
                className="px-2 py-1 hover:bg-primary-light hover:text-white rounded"
              >
                Category 1
              </a>
              <a
                href="#"
                className="px-2 py-1 hover:bg-primary-light hover:text-white rounded"
              >
                Category 2
              </a>
              <a
                href="#"
                className="px-2 py-1 hover:bg-primary-light hover:text-white rounded"
              >
                Category 3
              </a>
            </div>
          </div>

          {/* Compare btn */}
          <Link href="#">
            <div className="flex items-center gap-1 p-2.5">
              <FontAwesomeIcon icon={faArrowsRotate} />
              <span>Compare</span>
            </div>
          </Link>
        </div>

        {/* Right */}
        <div className="hidden md:block">
          <form>
            <div className="flex items-center justify-center border border-gray-300 lg:w-[350px]">
              <div className="flex h-12 w-full flex-shrink items-center space-x-8 hover:shadow-md">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  className="h-full flex-grow p-5 focus:outline-none"
                />
              </div>
              <div className="flex h-12 w-28 flex-grow border-l ">
                <button
                  className="flex h-full w-full flex-grow items-center justify-center border-r hover:shadow-md text-search-color bg-white"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
