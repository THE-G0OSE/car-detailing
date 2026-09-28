import { ProductCompact } from '@/entities/product/ui/ProductCompact';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";

const product = {
    image: "/images/hero1.jpg",
    title: "Полировка фар",
    body: "Восстановление прозрачности и защита от помутнения",
    minPrice: 2900
}

export const ProductsSection = () => {
  return <div className="flex flex-col gap-5 md:gap-6 bg-back-secondary py-8 md:p-10">
     <div className="flex justify-between items-center px-5 md:px-0 w-full">
        <div className="flex flex-col gap-2">
            <p className="font-upper-header text-logo-red">популярные услуги</p>
            <p className="font-header text-pure-white">ЛУЧШЕЕ ДЛЯ ВАШЕГО АВТО</p>
        </div>
        <Link href="/catalog" className="hidden md:flex items-center gap-3 pt-8">
            <span className="font-inter text-[16px] text-light-gray leading-[2em] tracking-[0.01em]">Все услуги</span>
            <ArrowForwardIcon className="text-logo-red" fontSize="small" />
        </Link>
     </div>
     <div className="flex md:flex-wrap justify-start md:justify-center gap-4 md:gap-4.5 px-5 md:px-0 w-full overflow-x-auto md:overflow-visible">
        {Array.from({length: 5}).map((_, i) => (
        <ProductCompact key={i + "-product-card"} product={product} />
        ))}
     </div>
     <Link href="/catalog" className="flex md:hidden justify-center items-center gap-3 mx-5 border border-border-gray rounded-lg h-13 text-pure-white">
        <span className="font-inter text-[15px]">Все услуги</span>
        <ArrowForwardIcon className="text-logo-red" fontSize="small" />
     </Link>
  </div>;
};
