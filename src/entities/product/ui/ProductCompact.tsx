import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IProductCompact } from "@/entities/product/model/types"
import Image from "next/image"

interface IProps {
    product: IProductCompact
}

export const ProductCompact:React.FC<IProps> = ({product}) => {
  return (
        <div className="flex flex-col justify-between bg-linear-210 from-4% from-carbon-black to-70% to-back-secondary border-2 border-dark-surface rounded-lg w-65 md:w-75 h-91.25 md:h-105 shrink-0 overflow-hidden">
            <Image src={product.image} width={400} height={300} alt="product image" className="w-full h-37.5 md:h-45 object-cover" />
            <div className='flex flex-col items-start gap-2 px-6 pb-10 w-full'>
                <p className="font-header-sm text-pure-white">Полировка фар</p>
                <p className="pr-3 font-body-sm text-light-gray">Восстановление прозрачности и защита от помутнения</p>
                <div className="flex items-center gap-2">
                    <p className="font-button-xs text-pure-white">от {product.minPrice} ₽</p>
                    <ArrowForwardIcon fontSize="small" className="text-logo-red" />
                </div>
            </div>
        </div>
  )
}
