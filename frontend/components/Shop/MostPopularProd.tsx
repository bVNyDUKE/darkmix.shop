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
import type { Product } from "../../pages";

export default function MostPopularProd({products} : {products: Product[]}) {

  function formatPrice(price:number){
    return (price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  function formatRegularPrice (discount: any, price:number){
    const numDiscount = (discount !== null ? Number(discount.substring(0, discount.length - 1)) : 0)
    const decimal = (numDiscount / 100) + 1;

    return formatPrice(price * decimal);
  }


  

  /* Product hover functionality START */
  let arr = [];
  for(let i = 0; i < products.length; i++){
    arr.push({hover:false});
  }
  const [resultObj, setInitResultObj] = useState(arr);

  const handleHoverIcons = (index: number) => {
    let newArr = [...resultObj];
    newArr[index].hover = !resultObj[index].hover;
    setInitResultObj(newArr);
  };
  /* Product hover functionality END */
  

  return (
    <>
      <h2 className="text-2xl font-semibold text-primary-dark mb-8">
        Most Popular Products
      </h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {products.map((item:any, i:number) => (
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
              <Link href={`./details/${item.id}`}>
                <Image
                  src={img}
                  alt="Picture of the author"
                  width={235}
                  height={33}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <div
                className={`absolute w-[50px] h-[40px] top-5 left-5 bg-secondary-dark flex flex-col justify-center items-center ${(resultObj[i].hover == true ? 'block' : 'hidden')}`}
              >
                <Link href={`./details/${item.id}`}>
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    className="text-white text-2xl"
                  />
                </Link>
              </div>

              <div
                className={`absolute w-[50px] h-[40px] top-5 left-20 bg-secondary-dark flex flex-col justify-center items-center ${(resultObj[i].hover == true ? 'block' : 'hidden')}`}
              >
                
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white text-2xl"
                  />
                
              </div>

              <div
                className={`absolute w-[90px] h-[30px] top-5 right-5 bg-primary-light flex flex-col justify-center items-center ${
                  item.discount !== null
                    ? "block"
                    : "hidden"
                }`}
              >
                <span className="text-white font-semibold">
                  {item.discount}
                </span>
              </div>



              <div
                className={`absolute w-[90px] h-[30px] top-5 right-5 bg-primary-light flex flex-col justify-center items-center ${
                  item.available == "UNAVAILABLE"
                    ? "block"
                    : "hidden"
                }`}
              >
                <span className="text-white font-semibold">Soldout</span>
              </div>




            </div>
            {/* Header and Price */}
            <div className="p-5">
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <div className="my-2.5 flex gap-3 items-center">
                <span
                  className={`${
                    item.discount != null ? "inline-block" : "hidden"
                  } line-through text-2xl text-slate-300`}
                >
                  ${formatRegularPrice(item.discount, item.price)}
                </span>
                <span className="text-2xl text-green-primary font-semibold">
                  $
                  {formatPrice(item.price)}
                </span>
              </div>
              <div
                className={`flex items-center gap-5 ${(resultObj[i].hover == true ? 'opacity-100' : 'opacity-50')}`}
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
