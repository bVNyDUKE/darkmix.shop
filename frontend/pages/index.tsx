import NavBar from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next'

import SearchBar from "../components/SearchBar";
import ShopInner from "../components/Shop/ShopInner";
import MostPopularProd from "../components/Shop/MostPopularProd";
import ShopCategories from "../components/Shop/ShopCategories";


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


export const getServerSideProps: GetServerSideProps<{ allProducts: Product[]; mostPopular : Product[] }> = async () => {
  const res = await fetch(`http://localhost:8000/Products`)
  const allProducts: Product[] = await res.json()

  const sorted_result = allProducts.sort((a:any, b:any) => b.view - a.view);

  const maxProducts = 8;
  let mostPopular = sorted_result.slice(0, maxProducts);

  return {
    props: {
      allProducts,
      mostPopular
    },
  }
}



export default function Home({allProducts, mostPopular}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-2.5 ">
        <SearchBar />

        <ShopInner />

        <div className="mt-16">
          <MostPopularProd products={mostPopular}/>
        </div>

        <div className="mt-16">
          <ShopCategories />
        </div>
      </div>

      <Footer />
    </div>
  );
}
