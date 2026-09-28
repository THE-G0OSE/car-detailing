import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ContactSection = () => {
  return (
    <div className="flex flex-col md:grid gap-8 md:gap-14 md:grid-cols-[1.15fr_1fr] bg-deep-black px-5 py-8 md:px-12 md:pt-8 md:pb-16">
      <div className="order-2 md:order-0 relative flex flex-col bg-dark-surface border border-border-gray rounded-lg overflow-hidden">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.752121&z=16&pt=37.617635,55.752121,pm2rdm"
          className="border-0 w-full h-50 md:h-117.5"
          title="Карта проезда"
          loading="lazy"
          allowFullScreen
        />
        <div className="md:top-6 md:left-6 md:absolute flex flex-col gap-3 bg-back-secondary p-4.5 md:p-5.5 border-0 md:border border-dark-surface rounded-lg md:w-72.5">
          <p className="flex items-center gap-2 font-inter font-bold text-[15px] text-pure-white">
            <LocationOnIcon className="text-logo-red" fontSize="small" />
            Наш центр
          </p>
          <p className="font-inter text-[14px] text-light-gray">
            г. Москва, ул. Автомобильная, 12
          </p>
          <p className="flex items-center gap-2 font-inter text-[14px] text-light-gray">
            <AccessTimeIcon className="text-logo-red" fontSize="small" />
            Ежедневно: 09:00 – 21:00
          </p>
          <a
            href="#"
            className="flex justify-center items-center bg-logo-red mt-1.5 rounded-lg h-11 font-inter font-semibold text-[14px] text-pure-white"
          >
            Как добраться
          </a>
        </div>
      </div>
      <form className="order-1 md:order-0 flex flex-col gap-3.5 md:gap-4.5">
        <p className="font-upper-header-lg text-logo-red">Обратная связь</p>
        <p className="font-header text-pure-white">
          Остались вопросы? <br /> Напишите нам
        </p>
        <p className="font-body-sm text-muted-gray">
          Мы обязательно ответим и поможем подобрать идеальное решение для
          вашего автомобиля.
        </p>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <label className="flex flex-col gap-2 font-inter text-[13px] text-muted-gray">
            Ваше имя
            <input
              type="text"
              placeholder="Иван"
              className="bg-carbon-black px-4 border border-border-gray rounded-lg h-13 font-inter text-[15px] text-pure-white placeholder:text-muted-gray"
            />
          </label>
          <label className="flex flex-col gap-2 font-inter text-[13px] text-muted-gray">
            Телефон
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="bg-carbon-black px-4 border border-border-gray rounded-lg h-13 font-inter text-[15px] text-pure-white placeholder:text-muted-gray"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 font-inter text-[13px] text-muted-gray">
          Сообщение
          <textarea
            placeholder="Опишите задачу или задайте вопрос"
            className="bg-carbon-black px-4 py-3.5 border border-border-gray rounded-lg h-30 font-inter text-[15px] text-pure-white placeholder:text-muted-gray resize-none"
          />
        </label>
        <button
          type="button"
          className="flex justify-center items-center gap-3 bg-logo-red rounded-lg h-14 font-inter font-semibold text-[16px] text-pure-white"
        >
          Отправить <ArrowForwardIcon fontSize="small" />
        </button>
      </form>
    </div>
  );
};
