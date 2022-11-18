import React, { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faArrowsRotate,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import {Product} from '../type';

export default function SearchBar({all_results}: {all_results:Product[]}) {

  
  const [catDrop, setcatDrop] = useState(false);
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);
  const [displaySuggestedResults, setDisplaySuggestedResults] = useState(false);
  
  const searchItem = (input_value:string)=>{
    if (input_value.length > 2){
      let new_arr:Product[] = []
      all_results.map((product)=>{
        const name = product.name.toLowerCase();
        if (name.indexOf(input_value) > -1){
          new_arr.push(product)
        }
      });
      setDisplaySuggestedResults(true)
      setFilteredResults(new_arr)
    }
    else {
      setDisplaySuggestedResults(false)
      setFilteredResults([]);
    }
    
  }

  const displayAvailability = (prod_object:any)=>{
    switch (prod_object.available) {
      case 'IN_STORE':
        return 'Available';
        break;

      case 'UNAVAILABLE':
        return 'Soldout';
        break;

      case 'WEB_ONLY':
        return 'Web only';
        break;
      
      default:
        return ' web';
    }
  }

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
          <form className="relative">
            <div className="flex items-center justify-center border border-gray-300 lg:w-[350px]">
              <div className="flex h-12 w-full flex-shrink items-center space-x-8 hover:shadow-md">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  className="h-full flex-grow p-5 focus:outline-none"
                  onChange={(e)=>(searchItem(e.target.value))}
                  autoComplete="off"
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
            <div className={`p-3 bg-white shadow-lg absolute left-0 top-[50px] w-full ${displaySuggestedResults == true ? 'block' : 'hidden'}`}>
              {(filteredResults.length > 0) ? filteredResults.map((result, index)=>(
                <article className={`flex gap-2 p-2 ${(index == filteredResults.length -1 )? '': 'border-b border-gray-200'}`} key={result.id}>
                  <div className="grow hover:text-primary-dark text-gray-500">
                    <Link href={`${window.location.origin}/details/${result.id}`}>
                      {result.name}
                    </Link>
                  </div>
                  <div className="basis-16 text-xs bg-primary-light text-white p-1 text-center">{displayAvailability(result)}</div>
                </article>
              )) : 'No results found'}
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
