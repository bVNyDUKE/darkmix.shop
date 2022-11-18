import {Category} from '../../../type';
import ShopCategory from "./ShopCategoryList";

export default function ShopCategories({categories} : {categories: Category[]}){
    return (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary-dark mb-8">
            Shop With Categories
          </h2>
          <div className="sm:grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <ShopCategory props={cat} key={cat.id}/>
            ))}
          </div>
        </div>
    )
}