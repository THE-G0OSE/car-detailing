import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GppGoodIcon from "@mui/icons-material/GppGood";
import VerifiedIcon from "@mui/icons-material/Verified";

const BENEFITS = [
    {
        Icon: VerifiedIcon,
        title: "Только качественные материалы",
        description: "Работаем с проверенными брендами и сертифицированной продукцией.",
    },
    {
        Icon: EngineeringIcon,
        title: "Опытные мастера",
        description: "Наши специалисты — профессионалы с многолетним опытом.",
    },
    {
        Icon: AccessTimeIcon,
        title: "Соблюдение сроков",
        description: "Отдаём автомобиль точно в оговорённое время.",
    },
    {
        Icon: GppGoodIcon,
        title: "Гарантия на все услуги",
        description: "Мы уверены в качестве нашей работы и даём гарантию на все услуги.",
    },
];

export const BenefitsGrid = () => {
    return (
        <div className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-4 bg-elevated-surface p-6 md:p-9 border border-border-gray rounded-lg">
            {BENEFITS.map(({ Icon, title, description }) => (
                <div key={title} className="flex gap-3.5 md:gap-4">
                    <Icon className="text-logo-red shrink-0" sx={{ fontSize: 28 }} />
                    <div className="flex flex-col gap-1.5">
                        <p className="font-inter font-bold text-[15px] text-pure-white">{title}</p>
                        <p className="font-inter text-[13px] text-muted-gray leading-[1.45em] md:leading-[1.5em]">
                            {description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
