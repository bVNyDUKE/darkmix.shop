import ProductItem from '../../../components/Shop/ProductItem';
import {Product} from '../../../type';
export default function MostPopular({result} : {result: Product[]}){
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-semibold text-primary-dark mb-8">Most Popular Products</h2>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                {result.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}