import Image from "next/image";
import img from "../../public/product.jpg";
import Link from "next/link";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";


import {formatPrice} from "../Shop/index";
import {formatRegularPrice} from "../Shop/index";

export default function ProductItem({props} : {props: any}){
    return (
        <div
            className="border border-[#dadada] hover:shadow-lg hover:translate-y-[-3px] ease-in duration-100 bg-white group"
        >
          {/* Image with buttons */}
          <div className="relative">
            <Link href={`./details/${props.id}`}>
              <Image
                src={img}
                alt="Picture of the author"
                width={235}
                height={33}
                className="w-full h-60 object-cover"
              />
            </Link>
            <div
              className={`absolute w-[50px] h-[40px] top-5 left-5 bg-secondary-dark  flex-col justify-center items-center group-hover:flex hidden`}
            >
              <FontAwesomeIcon
                icon={faArrowsRotate}
                className="text-white text-2xl"
              />
            </div>

            <div
              className={`absolute w-[50px] h-[40px] top-5 left-20 bg-secondary-dark flex-col justify-center items-center group-hover:flex hidden`}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white text-2xl"
              />
            </div>

            <div
              className={`absolute w-[90px] h-[30px] top-5 right-5 bg-primary-light flex flex-col justify-center items-center ${
                props.discount !== null
                  ? "block"
                  : "hidden"
              }`}
            >
              <span className="text-white font-semibold">
                {props.discount}
              </span>
            </div>



            <div
              className={`absolute w-[90px] h-[30px] top-5 right-5 bg-primary-light flex flex-col justify-center items-center ${
                props.available == "UNAVAILABLE"
                  ? "block"
                  : "hidden"
              }`}
            >
              <span className="text-white font-semibold">Soldout</span>
            </div>




          </div>
          {/* Header and Price */}
          <div className="p-5">
            <h4 className="font-semibold text-lg">{props.name}</h4>
            <div className="my-2.5 flex gap-3 items-center">
              <span
                className={`${
                  props.discount != null ? "inline-block" : "hidden"
                } line-through text-2xl text-slate-300`}
              >
                ${formatRegularPrice(props.discount, props.price)}
              </span>
              <span className="text-2xl text-green-primary font-semibold">
                $
                {formatPrice(props.price)}
              </span>
            </div>
            <div
              className={`flex items-center gap-5 group-hover:opacity-100 opacity-50`}
            >
              <Button
                label={`Add to Cart`}
                aditClass={`h-[40px] text-base flex-grow flex items-center gap-3 bg-primary-dark ${
                  props.available == "UNAVAILABLE" ? "hidden" : "inline-block"
                }`}
                icon={
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-white text-xl "
                  />
                }
              />

              <Button
                label={`Details`}
                href={`/details/${props.id}`}
                aditClass={`h-[40px] text-base bg-secondary-dark ${
                  props.available == "UNAVAILABLE" ? "grow text-center" : ""
                }`}
                icon=""
              />
            </div>
          </div>
        </div>
    )
}