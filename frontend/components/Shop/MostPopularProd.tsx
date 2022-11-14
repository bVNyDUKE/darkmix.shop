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

import { useState } from "react";
import { log } from "console";

export default function MostPopularProd() {
  const [resultObj, setInitResultObj] = useState([
    {
      id: "1",
      title: "Shop Tittle Example with a little bit longer name for product1",
      regular_price: 300,
      discount: true,
      discount_price: 250,
      hover: false,
      soldOut: false,
    },
    {
      id: "2",
      title: "Shop Tittle Example with a little bit longer name for product2",
      regular_price: 240,
      discount: false,
      discount_price: 0,
      hover: false,
      soldOut: false,
    },

    {
      id: "3",
      title: "Shop Tittle Example with a little bit longer name for product3",
      regular_price: 240,
      discount: false,
      discount_price: 0,
      hover: false,
      soldOut: false,
    },

    {
      id: "4",
      title: "Shop Tittle Example with a little bit longer name for product4",
      regular_price: 240,
      discount: false,
      discount_price: 0,
      hover: false,
      soldOut: true,
    },
    {
      id: "5",
      title: "Shop Tittle Example with a little bit longer name for product5",
      regular_price: 450,
      discount: true,
      discount_price: 300,
      hover: false,
    },
    {
      id: "6",
      title: "Shop Tittle Example with a little bit longer name for product6",
      regular_price: 240,
      discount: false,
      discount_price: 0,
      hover: false,
      soldOut: false,
    },
  ]);

  const handleHoverIcons = (index: number) => {
    let newArr = [...resultObj];
    newArr[index].hover = !resultObj[index].hover;

    setInitResultObj(newArr);
  };

  const calculateDiscount = (regular: number, discounted: number) => {
    return ((1 - discounted / regular) * 100).toFixed(0);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-primary-dark mb-8">
        Most Popular Products
      </h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {resultObj.map((item, i) => (
          <div
            key={item.id}
            className="border border-[#dadada] hover:shadow-lg hover:translate-y-[-3px] ease-in duration-100 bg-white"
            onMouseEnter={() => {
              handleHoverIcons(i);
            }}
            onMouseLeave={() => {
              handleHoverIcons(i);
            }}
          >
            {/* Image with buttons */}
            <div className="relative">
              <Link href="#">
                <Image
                  src={img}
                  alt="Picture of the author"
                  width={235}
                  height={33}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <div
                className={`absolute w-[50px] h-[40px] top-5 left-5 bg-secondary-dark flex flex-col justify-center items-center ${
                  item.hover == true ? "block" : "hidden"
                }`}
              >
                <Link href="#">
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    className="text-white text-2xl"
                  />
                </Link>
              </div>

              <div
                className={`absolute w-[50px] h-[40px] top-5 left-20 bg-secondary-dark flex flex-col justify-center items-center ${
                  item.hover == true ? "block" : "hidden"
                }`}
              >
                <Link href="#">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white text-2xl"
                  />
                </Link>
              </div>

              <div
                className={`absolute w-[90px] h-[30px] top-5 right-5 bg-primary-light flex flex-col justify-center items-center ${
                  item.discount == true || item.soldOut == true
                    ? "block"
                    : "hidden"
                }`}
              >
                <span className="text-white font-semibold">
                  {item.soldOut == true
                    ? `Soldout`
                    : `${calculateDiscount(
                        item.regular_price,
                        item.discount_price
                      )}%`}
                </span>
              </div>
            </div>
            {/* Header and Price */}
            <div className="p-5">
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <div className="my-2.5 flex gap-3 items-center">
                <span
                  className={`${
                    item.discount == true ? "inline-block" : "hidden"
                  } line-through text-2xl text-slate-300`}
                >
                  ${item.regular_price}
                </span>
                <span className="text-2xl text-green-primary font-semibold">
                  $
                  {item.discount == true
                    ? item.discount_price
                    : item.regular_price}
                </span>
              </div>
              <div
                className={`flex items-center gap-5 ${
                  item.hover == true ? "opacity-100" : "opacity-40"
                }`}
              >
                <Button
                  label={`Add to Cart`}
                  aditClass={`h-[40px] text-base flex-grow flex items-center gap-3 bg-primary-dark ${
                    item.soldOut == true ? "hidden" : "inline-block"
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
                  href={`/details/${item.id}`}
                  aditClass={`h-[40px] text-base bg-secondary-dark ${
                    item.soldOut == true ? "grow text-center" : ""
                  }`}
                  icon=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
