import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/categories/category1.webp";
import img2 from "../../public/categories/category2.webp";

const catObj = [
  {
    id: "1",
    title: "Category 1",
  },
  {
    id: "2",
    title: "Category 2",
  },
  {
    id: "3",
    title: "Category 3",
  },
  {
    id: "4",
    title: "Category 4",
  },
  {
    id: "5",
    title: "Category 5",
  },
];

export default function ShopCategories() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-primary-dark mb-8">
        Shop With Categories
      </h2>
      <div className="sm:grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {catObj.map((cat, i) => (
          <div
            key={i}
            className="border border-[#dadada] hover:shadow-lg hover:translate-y-[-3px] ease-in duration-100"
          >
            <Link href="#">
              <Image
                src={i % 2 == 0 ? img1 : img2}
                alt="Picture of the author"
                width={235}
                height={33}
                className="w-full h-60 object-cover"
              />

              <div className="p-2.5 text-center">
                <h4 className="font-semibold text-lg">{cat.title}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
