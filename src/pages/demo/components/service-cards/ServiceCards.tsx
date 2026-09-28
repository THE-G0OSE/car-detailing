import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import Link from "next/link";
import { IDemoService } from "@/pages/demo/model/types";

interface IProps {
    services: IDemoService[];
    activeIds: string[];
    onToggle: (id: string) => void;
}

export const ServiceCards: React.FC<IProps> = ({ services, activeIds, onToggle }) => {
    if (services.length === 0) {
        return (
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-3 bg-carbon-black p-6 lg:p-8 border border-border-gray border-dashed rounded-lg">
                <p className="font-inter text-[15px] text-light-gray">Услуги этой категории доступны в полном каталоге.</p>
                <Link href="/catalog" className="flex items-center gap-2 min-h-11 font-inter font-semibold text-[14px] text-logo-red">
                    Открыть каталог <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Link>
            </div>
        );
    }

    return (
        <div className="flex lg:grid lg:grid-cols-4 gap-3 lg:gap-4 -mx-5 lg:mx-0 px-5 lg:px-0 overflow-x-auto lg:overflow-visible snap-mandatory snap-x">
            {services.map((service) => {
                const active = activeIds.includes(service.id);
                return (
                    <article
                        key={service.id}
                        className="flex flex-col bg-carbon-black border border-border-gray rounded-lg w-62.5 lg:w-auto overflow-hidden snap-start shrink-0"
                    >
                        <div className="relative h-35 lg:h-37.5">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(min-width: 1024px) 25vw, 250px"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-2 p-4 grow">
                            <p className="font-inter font-bold text-[11px] text-logo-red uppercase tracking-[0.06em]">
                                {service.categoryLabel}
                            </p>
                            <p className="font-manrope font-bold text-[16px] text-pure-white">{service.title}</p>
                            <p className="font-inter text-[13px] text-muted-gray leading-[1.5em]">{service.description}</p>
                            <button
                                type="button"
                                aria-pressed={active}
                                onClick={() => onToggle(service.id)}
                                className={`flex justify-center items-center gap-2 mt-auto border rounded-md w-full h-11 font-inter font-semibold text-[14px] text-pure-white cursor-pointer ${
                                    active ? "bg-dark-red/25 border-logo-red" : "border-border-gray"
                                }`}
                            >
                                {active ? <CheckIcon sx={{ fontSize: 16 }} /> : <AddIcon sx={{ fontSize: 16 }} />}
                                {active ? "На модели" : "Примерить"}
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};
