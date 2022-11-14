import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Breadcrumbs from "../../components/Layout/Breadcrumbs";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHeart,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ItemDetails() {
  const product_info = {
    id: "1",
    title: "Shop Tittle Example with a little bit longer name for product1",
    regular_price: 300,
    discount: true,
    discount_price: 250,
    hover: false,
    soldOut: false,
  };
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

  const calculateDiscount = (regular: number, discounted: number) => {
    return ((1 - discounted / regular) * 100).toFixed(0);
  };

  const [counter, setCounter] = useState(1);

  function updateNumItems(number: number, action: string) {
    const newValue = action == "increase" ? number + 1 : number - 1;

    console.log(newValue);

    newValue > 0 ? setCounter(newValue) : setCounter(0);
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 md:mt-16">
        <Breadcrumbs links={["Details"]} />

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/6 xl:w-3/6">
            <ImageGallery items={images} showPlayButton={false} />
          </div>
          <div className="lg:w-4/6 xl:w-3/6 p-4 md:p-9 mt-6">
            {/* Title and discount box */}
            <div className="flex items-center gap-4">
              <h2 className="text-primary-dark font-semibold text-3xl grow">
                POC-515 Some text for item
              </h2>

              {/* Discount Box */}
              <div
                className={` w-[90px] h-[30px] bg-primary-light flex flex-col justify-center items-center ${
                  product_info.discount == true || product_info.soldOut == true
                    ? "block"
                    : "hidden"
                }`}
              >
                <span className="text-white font-semibold">
                  {product_info.soldOut == true
                    ? `Soldout`
                    : `${calculateDiscount(
                        product_info.regular_price,
                        product_info.discount_price
                      )}%`}
                </span>
              </div>
            </div>
            {/* Price */}
            <div className="my-6 flex gap-6 items-center">
              <span
                className={`${
                  product_info.discount == true ? "inline-block" : "hidden"
                } line-through text-3xl text-slate-300`}
              >
                ${product_info.regular_price}
              </span>
              <span className="text-3xl text-green-primary font-semibold">
                $
                {product_info.discount == true
                  ? product_info.discount_price
                  : product_info.regular_price}
              </span>
            </div>

            {/* Description */}
            <div className="text-secondary-dark">
              Duis non tempus magna. Donec tincidunt quam mollis leo auctor, non
              ornare metus lobortis. Duis tincidunt maximus dolor, vitae auctor
              augue facilisis ut. Nullam ultrices sit amet augue vitae
              consectetur. Pellentesque ultricies odio tellus, vitae auctor dui
              ornare vitae. Integer tincidunt lacus a ipsum convallis, eu
              laoreet elit interdum. In in pretium odio, non consequat arcu. In
              et tempor risus, eget pharetra sapien. Nunc in nulla in massa
              finibus egestas.
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
                aditClass="h-[40px] text-base flex-grow flex items-center gap-3 bg-primary-dark w-full"
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
        </div>
      </div>
      <Footer />
    </>
  );
}
