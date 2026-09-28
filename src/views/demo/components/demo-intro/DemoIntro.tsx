import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

const FEATURES = [
    { Icon: ViewInArIcon, text: "Реалистичная 3D-модель автомобиля" },
    { Icon: ThreeDRotationIcon, text: "Одновременное отображение услуг" },
    { Icon: SettingsSuggestIcon, text: "Гибкие настройки и параметры" },
];

export const DemoIntro = () => {
    return (
        <div className="flex flex-col gap-3 md:gap-4 max-w-165">
            <p className="font-upper-header-lg text-logo-red uppercase">Демонстрация</p>
            <h1 className="font-header text-pure-white uppercase">
                Посмотрите, как выглядят наши услуги на вашем авто
            </h1>
            <p className="max-w-140 font-inter text-[15px] text-light-gray md:text-[16px] leading-[1.6em]">
                Интерактивный 3D-конфигуратор позволяет выбрать модель автомобиля, настроить параметры
                и увидеть, как будут выглядеть выбранные услуги в реальном времени.
            </p>
            <ul className="hidden md:flex gap-8 mt-2">
                {FEATURES.map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 max-w-40 font-inter text-[13px] text-light-gray leading-[1.35em]">
                        <Icon className="text-logo-red shrink-0" sx={{ fontSize: 28 }} />
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
