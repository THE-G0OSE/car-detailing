import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <div className="relative flex flex-col md:block bg-linear-130 from-dark-surface to-25% to-deep-black gap-6 px-5 py-10 md:p-12 md:h-135">
      <div className="order-2 md:order-0 top-0 right-0 md:absolute rounded-xl md:rounded-none h-52.5 md:w-215.25 md:h-full overflow-hidden">
        <Image
          src="/images/about-us.jpg"
          alt="about us"
          height={540}
          width={861}
          className="w-full h-full object-cover"
        />
        <div className="top-0 absolute shadow-about-us w-full h-full hidden md:block" />
      </div>
      <div className="order-1 md:order-0 md:absolute flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-9">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-upper-header-lg text-logo-red">О НАС</p>
            <p className="font-header text-pure-white">
              ЗАБОТА <br /> О ВАШЕМ АВТО <br /> В ДЕТАЛЯХ
            </p>
          </div>
          <p className="w-full md:w-80 font-body-sm text-muted-gray">
            Мы — команда профессионалов, которые уже более 5 лет занимаются
            детейлингом автомобилей. Современное оборудование, проверенные
            материалы и опыт мастеров позволяют нам достигать идеального
            результата в каждом проекте
          </p>
          <div className="gap-4 md:gap-6 grid grid-cols-3 md:flex py-4.5 md:py-0 border-y md:border-y-0 border-border-gray h-auto md:h-18">
            <div className="flex flex-col justify-betweeen h-full">
              <p className="font-manrope font-bold text-[24px] md:text-[36px] text-pure-white">
                5+
              </p>
              <p className="font-inter text-[12px] md:text-[17px] text-light-gray">
                лет опыта
              </p>
            </div>
            <div className="hidden md:block bg-logo-red w-0.5 h-full" />
            <div className="flex flex-col justify-betweeen h-full">
              <p className="font-manrope font-bold text-[24px] md:text-[36px] text-pure-white">
                10 000+
              </p>
              <p className="font-inter text-[12px] md:text-[17px] text-light-gray">
                довольных клиентов
              </p>
            </div>
            <div className="hidden md:block bg-logo-red w-0.5 h-full" />
            <div className="flex flex-col justify-betweeen h-full">
              <p className="font-manrope font-bold text-[24px] md:text-[36px] text-pure-white">
                100%
              </p>
              <p className="font-inter text-[12px] md:text-[17px] text-light-gray">
                гарантия на услуги
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-linear-160 from-28% from-carbon-black to-back-secondary p-5 md:p-7 border-2 border-dark-surface rounded-lg">
          <div className="flex gap-4 md:gap-6">
            <BubbleChartIcon className="text-logo-red" sx={{ fontSize: 45 }} />
            <div className="flex flex-col gap-2 w-full md:w-56">
              <p className="font-header-sm text-pure-white">
                Профессиональное оборудование
              </p>
              <p className="font-body-sm text-muted-gray">
                Только современный инструмент и сертифицированные материалы
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6">
            <BubbleChartIcon className="text-logo-red" sx={{ fontSize: 45 }} />
            <div className="flex flex-col gap-2 w-full md:w-56">
              <p className="font-header-sm text-pure-white">Опытные мастера</p>
              <p className="font-body-sm text-muted-gray">
                Наши специалисты проходят регулярное обучение и повышение
                квалификации
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6">
            <BubbleChartIcon className="text-logo-red" sx={{ fontSize: 45 }} />
            <div className="flex flex-col gap-2 w-full md:w-56">
              <p className="font-header-sm text-pure-white">
                Гарантия качества
              </p>
              <p className="font-body-sm text-muted-gray">
                Мы уверены в своей работе и даём гарантию на все виды услуг
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
