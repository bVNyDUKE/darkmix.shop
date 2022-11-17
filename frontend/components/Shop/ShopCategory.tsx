import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/categories/category1.webp";
import img2 from "../../public/categories/category2.webp";
export default function ShopCategory({props} : {props: any}){
    return(
        <div
            key={props.id}
            className="border border-[#dadada] hover:shadow-lg hover:translate-y-[-3px] ease-in duration-100"
        >
            <Link href={`#${props.id}`}>
                <Image
                src={(Number(props.id) % 2) ? img1 : img2}
                alt="Picture of the author"
                width={235}
                height={33}
                className="w-full h-60 object-cover"
                />

                <div className="p-2.5 text-center">
                <h4 className="font-semibold text-lg">{props.name}</h4>
                </div>
            </Link>
        </div>
    )
}