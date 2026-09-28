import { ProductCard } from "@/entities/product/ui/ProductCard";
import { IProduct, IProductCategory } from "@/entities/product/model/types";

interface IProps {
    products: IProduct[];
    categories: IProductCategory[];
    onProductDetailsClick: (product: IProduct) => void;
}

export const ProductGrid: React.FC<IProps> = ({ products, categories, onProductDetailsClick }) => {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center gap-2 bg-carbon-black py-10 md:py-12 border border-border-gray border-dashed rounded-lg text-center">
                <p className="font-inter font-bold text-[17px] md:text-[18px] text-pure-white">
                    Ничего не нашлось
                </p>
                <p className="font-inter text-[14px] text-muted-gray">
                    Попробуйте другой запрос или выберите «Все услуги».
                </p>
            </div>
        );
    }

    return (
        <div className="gap-3 md:gap-6 grid grid-cols-1 md:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    categoryLabel={categories.find((category) => category.id === product.categoryId)?.label ?? ""}
                    onDetailsClick={onProductDetailsClick}
                />
            ))}
        </div>
    );
};
