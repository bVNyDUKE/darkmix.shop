import NavBar from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next'

import SearchBar from "../components/SearchBar";
import ShopInner from "../components/Shop/ShopInner";

import ProductItem from '../components/Shop/ProductItem';
import ShopCategory from "../components/Shop/ShopCategory";

export type Product = {
  available: string;
  brand: string;
  categoryId: number;
  createdAt: string;
  discount: string | null;
  id:number;
  name:string;
  price:number;
  promoted:boolean;
  type: string;
  type_info: string;
  updatedAt: string;
  view: number
}

export type Category = {
  id:number;
  name: string;
}


export const getServerSideProps: GetServerSideProps<{ allProducts: Product[]; mostPopular : Product[]; category: Category[] }> = async () => {
  const res = await fetch(`http://localhost:8000/Products`)
  const allProducts: Product[] = await res.json()

  const sorted_result = allProducts.sort((a:any, b:any) => b.view - a.view);

  const maxProducts = 8;
  let mostPopular = sorted_result.slice(0, maxProducts);


  const resCat = await fetch(`http://localhost:8000/Categories`)
  const category: Category[] = await resCat.json()

  return {
    props: {
      allProducts,
      mostPopular,
      category
    },
  }
}



export default function Home({allProducts, mostPopular, category}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  //console.log(category)
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-2.5 ">
        <SearchBar/>

        <ShopInner />

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary-dark mb-8">
            Most Popular Products
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
            {mostPopular.map((product) => (
              <ProductItem key={product.id} props={product}/>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary-dark mb-8">
            Shop With Categories
          </h2>
          <div className="sm:grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {category.map((cat) => (
              <ShopCategory props={cat} key={cat.id}/>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
