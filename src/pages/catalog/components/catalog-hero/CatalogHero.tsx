import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CategoryIcon from "@mui/icons-material/Category";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Image from "next/image";

const STATS = [
    { Icon: CategoryIcon, value: "20+", label: "видов услуг" },
    { Icon: AccessTimeIcon, value: "5 лет", label: "опыта работы" },
    { Icon: GppGoodIcon, value: "100%", label: "гарантия качества" },
];

export const CatalogHero = () => {
    return (
        <section className="relative bg-back-secondary border-b border-border-gray overflow-hidden">
            <div className="relative h-50 md:absolute md:inset-y-0 md:right-0 md:w-225 md:h-full">
                <Image
                    src="/images/hero1.jpg"
                    alt="SHIELD — детейлинг-центр"
                    fill
                    sizes="(min-width: 768px) 900px, 100vw"
                    className="object-cover"
                />
                <div className="hidden md:block absolute inset-0 bg-linear-to-r from-back-secondary from-10% to-64% to-transparent" />
                <div className="md:hidden right-0 bottom-0 left-0 absolute bg-linear-to-t from-back-secondary h-20" />
            </div>
            <div className="relative flex flex-col gap-4 md:gap-5 px-5 md:px-12 py-8 md:py-16 max-w-full md:max-w-190">
                <p className="font-upper-header-lg text-logo-red">Каталог услуг</p>
                <p className="font-header-lg text-pure-white">
                    Полный спектр <br className="hidden md:block" /> услуг для вашего авто
                </p>
                <p className="font-body-lg md:max-w-125 text-light-gray">
                    Профессиональный детейлинг, защита и улучшение вашего автомобиля.
                    Выберите нужную услугу и узнайте подробности, цены и особенности.
                </p>
                <div className="gap-4 grid grid-cols-3 md:flex md:gap-7 mt-1 md:mt-2">
                    {STATS.map(({ Icon, value, label }) => (
                        <div key={label} className="flex items-center gap-2.5 md:gap-3 md:pr-7 md:border-r md:border-border-gray md:last:border-r-0">
                            <Icon className="hidden md:block text-logo-red" sx={{ fontSize: 26 }} />
                            <div className="flex flex-col gap-0.5">
                                <span className="font-manrope font-bold text-[18px] md:text-[20px] text-pure-white">
                                    {value}
                                </span>
                                <span className="font-inter text-[12px] text-muted-gray">
                                    {label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
