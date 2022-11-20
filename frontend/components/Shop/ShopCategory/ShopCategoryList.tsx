import Link from "next/link";
import Image from "next/image";
import img1 from "../../../public/categories/category1.webp";
import img2 from "../../../public/categories/category2.webp";

import {Category} from '../../../type';

export default function ShopCategory({cat} : {cat:Category}){
    return(
        <div
            key={cat.id}
            className="border border-[#dadada] hover:shadow-lg hover:translate-y-[-3px] ease-in duration-100"
        >
            <Link href={`#${cat.id}`}>
                <Image
                src={(Number(cat.id) % 2) ? img1 : img2}
                alt="Picture of the author"
                width={235}
                height={33}
                className="w-full h-60 object-cover"
                />

                <div className="p-2.5 text-center">
                <h4 className="font-semibold text-lg">{cat.name}</h4>
                </div>
            </Link>
        </div>
    )
}