import { useState } from "react";
import { GetServerSideProps } from "next";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Breadcrumbs from "../../components/Layout/Breadcrumbs";
import Button from "../../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHeart,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

import {Product} from '../../type';

import {formatPrice} from "../../components/Shop/mainFunctions";
import {formatRegularPrice} from "../../components/Shop/mainFunctions";


export const getServerSideProps: GetServerSideProps<{ detailProduct: Product[]}> = async (ctx) => {
  const id = ctx.params?.id as string;
  const res = await fetch(`http://localhost:8000/Products/${id}`)
  const detailProduct: Product[] = await res.json()

  return {
    props: {
      detailProduct
    },
  }
}

export default function ItemDetails({detailProduct} : {detailProduct: Product}) {

  const images = [
    {
      original:
        "https://omtec.de/media/image/29/b4/11/poc-500-amd-ryzen-ultra-compact-embedded-computer_600x600.jpg",
      thumbnail:
        "https://omtec.de/media/image/29/b4/11/poc-500-amd-ryzen-ultra-compact-embedded-computer_600x600.jpg",
    },

    {
      original:
        "https://omtec.de/media/image/8e/07/c6/poc-500-amd-ryzen-ultra-compact-computer-frontpanel_1493097352_600x600.jpg",
      thumbnail:
        "https://omtec.de/media/image/8e/07/c6/poc-500-amd-ryzen-ultra-compact-computer-frontpanel_1493097352_600x600.jpg",
    },
    {
      original:
        "https://omtec.de/media/image/6f/c0/c0/poc-545-amd-ryzen-ultra-compact-computer-heatsink-fan_600x600.jpg",
      thumbnail:
        "https://omtec.de/media/image/6f/c0/c0/poc-545-amd-ryzen-ultra-compact-computer-heatsink-fan_600x600.jpg",
    },
  ];

  const [counter, setCounter] = useState(1);

  function updateNumItems(number: number, action: string) {
    const newValue = action == "increase" ? number + 1 : number - 1;
    newValue > 0 ? setCounter(newValue) : setCounter(0);
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 md:mt-16">
        <Breadcrumbs links={["Details"]} />

        {detailProduct == null ? <div className="text-3xl text center">Product not found</div> : <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/6 xl:w-3/6">
            <ImageGallery items={images} showPlayButton={false} />
          </div>
          <div className="lg:w-4/6 xl:w-3/6 p-4 md:p-9 mt-6">
            {/* Title and discount box */}
            <div className="flex items-center gap-4">
              <h2 className="text-primary-dark font-semibold text-3xl grow">
                {detailProduct.name}
              </h2>

              {/* Discount Box */}
              <div
                className={`w-[90px] h-[30px] bg-primary-light flex flex-col justify-center items-center ${
                  detailProduct.discount !== null
                    ? "block"
                    : "hidden"
                }`}
              >
                <span className="text-white font-semibold">
                  {detailProduct.discount}
                </span>
              </div>

              <div
                className={`w-[90px] h-[30px] bg-primary-light flex flex-col justify-center items-center ${detailProduct.available == "UNAVAILABLE" ? 'block' : 'hidden'}`}
              >
                <span className={`text-white font-semibold `}>
                    Soldout
                </span>
              </div>
            </div>
            {/* Price */}
            <div className="my-6 flex gap-6 items-center">
              <span
                className={`${
                  detailProduct.discount !== null  ? "inline-block" : "hidden"
                } line-through text-3xl text-slate-300`}
              >
                {formatRegularPrice(detailProduct.discount, detailProduct.price)}
              </span>
              <span className="text-3xl text-green-primary font-semibold">
                ${formatPrice(detailProduct.price)}
              </span>
            </div>

            {/* Description */}
            <div className="text-secondary-dark">
              {detailProduct.description}
            </div>

            <div className="my-10 flex gap-4">
              <button
                className="px-3 py-1 text-search-color font-bold text-2xl"
                onClick={() => {
                  updateNumItems(counter, "decrease");
                }}
              >
                -
              </button>

              <input
                type="number"
                className="outline-none border border-gray-300 px-2 w-16 text-center"
                value={counter}
                onChange={(e) => {
                  setCounter(Number(e.target.value));
                }}
              />

              <button
                onClick={() => {
                  updateNumItems(counter, "increase");
                }}
                className="px-3 py-1 text-search-color font-bold text-2xl"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-5 mt-6`}
            >
              <Button
                label={`Add to Cart`}
                aditClass={`h-[40px] text-base flex-grow items-center gap-3 bg-primary-dark w-full ${detailProduct.available == "UNAVAILABLE" ? 'hidden' : 'flex'}`}
                icon={
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-white text-xl"
                  />
                }
              />

              <Button
                label={`Wishlist`}
                aditClass="h-[40px] text-base flex items-center gap-3  w-full text-secondary-dark hover:border"
                icon={
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-secondary-dark text-xl"
                  />
                }
              />

              <Button
                label={`Compare`}
                aditClass="h-[40px] text-base flex items-center gap-3  w-full text-secondary-dark hover:border"
                icon={
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    className="text-secondary-dark text-xl"
                  />
                }
              />
            </div>
          </div>
        </div>}
        
      </div>
      <Footer />
    </>
  );
}
