import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 px-5 md:px-0 py-5 md:py-0 w-full md:top-17 md:left-12 md:absolute md:w-130">
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="font-upper-header-lg text-logo-red">
          ПОЛНЫЙ КОМПЛЕКС УСЛУГ
        </p>
        <p className="font-header-lg text-pure-white">
          ДЕТЕЙЛИНГ АВТОМОБИЛЕЙ
        </p>
      </div>

      <p className="font-body-lg text-light-gray">
        Профессиональный уход, защита и улучшенние вашего автомобиля. Мы
        сохраняем его внешний вид, ценность и характер
      </p>

      <div className="flex flex-col md:flex-row gap-2 md:gap-7 md:mt-2">
        <Link
          href="/catalog"
          className="flex justify-center items-center gap-3 md:gap-8 bg-logo-red px-7 py-3 rounded-lg text-pure-white"
        >
          <span className="font-button-lg">Выбрать услугу</span>
          <ArrowForwardIcon />
        </Link>
        <a
          href="#about"
          className="flex md:inline-flex justify-center items-center border md:border-0 border-border-gray px-7 py-3 md:py-0 rounded-lg text-pure-white"
        >
          <span className="font-button-lg">О нас</span>
        </a>
      </div>
    </div>
  );
};
