

// next serverside props
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next'

// import components
import NavBar from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import SearchBar from "../components/SearchBar";
import ShopInner from "../components/Shop/ShopInner";

import MostPopular from "../components/Shop/MostPopular/MostPopular";
import ShopCategories from '../components/Shop/ShopCategory/ShopCategories';

// import types
import { Product, Category } from '../type';


export const getServerSideProps: GetServerSideProps<{ allProducts: Product[]; mostPopular : Product[]; category: Category[] }> = async () => {
  const res = await fetch(`http://localhost:8000/Products`)
  const allProducts: Product[] = await res.json()

  const maxProducts = 8;
  let mostPopular = allProducts.slice(0, maxProducts);


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
  return (
    <div className="bg-gray-100">
      { /* Header*/ }
      <NavBar />

      { /* Sections inside container*/ }
      <div className="container mx-auto px-2.5 ">
        <SearchBar all_results={allProducts}/>
        <ShopInner />
        <MostPopular result={mostPopular}/>
        <ShopCategories categories={category}/>
      </div>

      { /* Header*/ }
      <Footer />
    </div>
  );
}
