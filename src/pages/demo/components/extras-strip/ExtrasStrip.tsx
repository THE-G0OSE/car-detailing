import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import Link from "next/link";

const EXTRAS = [
    { Icon: BuildOutlinedIcon, text: "Доп. оборудование" },
    { Icon: WaterDropOutlinedIcon, text: "Антидождь для стёкол" },
    { Icon: AutoAwesomeIcon, text: "Керамика для кузова" },
    { Icon: GppGoodOutlinedIcon, text: "Плёнка для фар" },
    { Icon: EventSeatOutlinedIcon, text: "Детейлинг салона" },
];

export const ExtrasStrip = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-7 bg-carbon-black px-4 lg:px-7 py-4 lg:py-5 border border-border-gray rounded-lg">
            <ul className="gap-x-3 gap-y-4 lg:gap-5 grid grid-cols-2 lg:grid-cols-5 grow">
                {EXTRAS.map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 lg:gap-3 font-inter text-[13px] text-light-gray leading-[1.3em]">
                        <Icon className="text-logo-red shrink-0" sx={{ fontSize: { xs: 22, lg: 26 } }} />
                        {text}
                    </li>
                ))}
            </ul>
            <Link href="/catalog" className="flex items-center gap-2 min-h-11 font-inter font-semibold text-[13px] text-logo-red shrink-0">
                Показать все услуги <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Link>
        </div>
    );
};
