import NavBar from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import SearchBar from "../components/SearchBar";
import ShopInner from "../components/Shop/ShopInner";
import MostPopularProd from "../components/Shop/MostPopularProd";
import ShopCategories from "../components/Shop/ShopCategories";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-2.5 ">
        <SearchBar />

        <ShopInner />

        <div className="mt-16">
          <MostPopularProd />
        </div>

        <div className="mt-16">
          <ShopCategories />
        </div>
      </div>

      <Footer />
    </div>
  );
}
