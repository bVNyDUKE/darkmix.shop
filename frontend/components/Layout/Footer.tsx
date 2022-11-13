import logo from "../../public/logo-dark.svg";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="bg-primary-dark py-8 mt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="text-white text-3xl mr-2 mb-2.5 flex gap-2 md:w-4/12">
              <a href="#" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:text-slate-400"
                />
              </a>
              <a href="#" target="_blank">
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className="hover:text-slate-400"
                />
              </a>
            </div>

            <div className="text-white text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="hidden md:inline-block">darkmix.shop</span>
            </div>

            <div className="md:w-4/12">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={214}
                  height={33}
                  className="md:float-right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
