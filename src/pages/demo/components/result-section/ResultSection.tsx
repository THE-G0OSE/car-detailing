import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";

const RESULTS = [
    { image: "/images/hero1.jpg", alt: "Автомобиль после полировки", caption: "Блеск, который не тускнеет" },
    { image: "/images/hero1.jpg", alt: "Защищённый кузов", caption: "Защита, которая работает" },
    { image: "/images/about-us.jpg", alt: "Детейлинг салона", caption: "Комфорт в каждой детали" },
];

export const ResultSection = () => {
    return (
        <section className="flex lg:grid flex-col lg:grid-cols-[420px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] gap-6 lg:gap-x-16 lg:gap-y-7 px-5 lg:px-12 py-14 lg:pt-22 lg:pb-24">
            <div className="flex flex-col gap-3 lg:gap-4.5 lg:col-start-1 lg:row-start-1 lg:pt-5">
                <p className="font-upper-header-lg text-logo-red uppercase">Результат</p>
                <h2 className="font-header text-pure-white uppercase">
                    Ваш автомобиль <br /> в лучшем виде
                </h2>
                <p className="font-inter text-[15px] text-light-gray md:text-[16px] leading-[1.6em]">
                    Мы используем только премиальные материалы и современное оборудование, чтобы ваш
                    автомобиль выглядел как новый и оставался защищённым в любых условиях.
                </p>
            </div>

            <div className="flex lg:grid lg:grid-cols-3 gap-3 lg:gap-5 -mx-5 lg:mx-0 px-5 lg:px-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-x-auto lg:overflow-visible snap-mandatory snap-x">
                {RESULTS.map(({ image, alt, caption }) => (
                    <figure
                        key={caption}
                        className="relative border border-border-gray rounded-lg w-62.5 lg:w-auto h-65 lg:h-80 overflow-hidden snap-start shrink-0"
                    >
                        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 30vw, 250px" className="object-cover" />
                        <figcaption className="right-0 bottom-0 left-0 absolute flex flex-col gap-2.5 lg:gap-3 bg-linear-to-t from-40% from-back-secondary/95 px-4.5 lg:px-5.5 pt-10 lg:pt-12 pb-4.5 lg:pb-5.5 font-manrope font-semibold text-[17px] text-pure-white lg:text-[18px] leading-[1.3em]">
                            {caption}
                            <span className="bg-logo-red w-6 h-0.75" />
                        </figcaption>
                    </figure>
                ))}
            </div>

            <Link
                href="/catalog"
                className="flex justify-center items-center gap-3 lg:self-start bg-logo-red lg:px-7 rounded-lg lg:w-fit h-13.5 lg:h-14 font-inter font-semibold text-[16px] text-pure-white lg:col-start-1 lg:row-start-2"
            >
                Выбрать услуги <ArrowForwardIcon fontSize="small" />
            </Link>
        </section>
    );
};
