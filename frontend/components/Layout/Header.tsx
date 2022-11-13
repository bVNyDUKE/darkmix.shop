import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faMagnifyingGlass,
  faArrowsRotate,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";
import img from "../../public/logo.svg";

export default function NavBar() {
  return (
    <header className="bg-primary-light p-2.5">
      <div className="container mx-auto">
        {/* Nav part 1 [likedin, git and welcome text] */}
        <div className="px-1 border-b border-white flex justify-between items-center">
          <div className="text-white text-3xl mr-2 mb-2.5 flex gap-2">
            <a href="#" target="_blank" className="hover:text-slate-200">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" target="_blank" className="hover:text-slate-200">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </div>
          {/* Welcome text above */}
          <div className="text-md text-white">
            Welcome to DarkMix eCommerce website!
          </div>
          <div>&nbsp;</div>
        </div>

        {/* Nav part 2 [logo, search and shop icons]*/}
        <div className="flex mt-2.5 justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <Image
              src={img}
              alt="Picture of the author"
              width={235}
              height={33}
            />
          </Link>

          {/* SHOP ICONS */}
          <div className="flex gap-2 items-center text-2xl text-white">
            <Link href="/compare">
              <FontAwesomeIcon icon={faArrowsRotate} />
            </Link>
            <Link href="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <div className="relative">
              <Link href="/cart">
                <FontAwesomeIcon icon={faCartShopping} />

                <div className="bg-red-600 text-white text-xs w-4 h-4 absolute top-[-2px] right-[-5px] text-center rounded-full">
                  1
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
