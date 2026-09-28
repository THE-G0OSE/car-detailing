import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import Image from "next/image";
import { IProduct } from "@/entities/product/model/types";

interface IProps {
    product: IProduct;
    categoryLabel: string;
    onDetailsClick: (product: IProduct) => void;
}

export const ProductCard: React.FC<IProps> = ({ product, categoryLabel, onDetailsClick }) => {
    return (
        <article className="flex md:flex-col bg-carbon-black border border-border-gray rounded-lg overflow-hidden">
            <div className="relative w-28 md:w-full h-auto md:h-42.5 shrink-0">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 112px"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-1.5 md:gap-2.5 p-3.5 md:p-5 min-w-0 grow">
                <p className="font-inter font-semibold text-[11px] md:text-[12px] text-logo-red">
                    {categoryLabel}
                </p>
                <p className="font-manrope font-bold text-[16px] md:text-[18px] text-pure-white leading-[1.25em]">
                    {product.title}
                </p>
                <p className="font-inter text-[13px] md:text-[14px] text-muted-gray leading-[1.45em] md:leading-[1.5em] line-clamp-3 md:line-clamp-2">
                    {product.description}
                </p>
                <div className="flex gap-3.5 md:justify-between mt-0.5 pt-1.5 md:pt-0 font-inter text-[12px] text-muted-gray">
                    <span className="flex items-center gap-1.5">
                        <AccessTimeIcon className="text-logo-red" sx={{ fontSize: 14 }} />
                        {product.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <VerifiedIcon className="text-logo-red" sx={{ fontSize: 14 }} />
                        {product.warranty}
                    </span>
                </div>
                <div className="flex justify-between items-center mt-auto pt-2 md:pt-3">
                    <span className="font-manrope font-bold text-[17px] md:text-[20px] text-pure-white">
                        от {product.minPrice.toLocaleString("ru-RU")} ₽
                    </span>
                    <button
                        type="button"
                        onClick={() => onDetailsClick(product)}
                        aria-haspopup="dialog"
                        aria-label={`Подробнее: ${product.title}`}
                        className="flex justify-center items-center gap-2.5 border border-dark-red rounded-lg w-11 md:w-auto h-11 md:px-4 font-inter font-semibold text-[14px] text-pure-white cursor-pointer"
                    >
                        <span className="hidden md:inline">Подробнее</span>
                        <ArrowForwardIcon className="text-logo-red" sx={{ fontSize: 16 }} />
                    </button>
                </div>
            </div>
        </article>
    );
};
