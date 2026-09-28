import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { IDemoService } from "@/views/demo/model/types";

interface IProps {
    services: IDemoService[];
    onRemove: (id: string) => void;
    onClear: () => void;
}

export const ActiveServices: React.FC<IProps> = ({ services, onRemove, onClear }) => {
    return (
        <aside
            aria-label="Активные услуги"
            className="flex flex-col bg-carbon-black p-4 lg:p-4.5 border border-border-gray rounded-lg"
        >
            <div className="flex justify-between items-center pb-2 border-b border-b-dark-surface">
                <p className="font-inter font-bold text-[14px] text-pure-white uppercase tracking-[0.04em]">
                    Активные услуги ({services.length})
                </p>
                {services.length > 0 && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="px-1 h-9 font-inter text-[13px] text-muted-gray hover:text-pure-white cursor-pointer"
                    >
                        Очистить
                    </button>
                )}
            </div>

            {services.length === 0 ? (
                <p className="py-3.5 font-inter text-[13px] text-muted-gray">
                    Добавьте услуги из списка — они появятся на модели.
                </p>
            ) : (
                <ul>
                    {services.map((service) => (
                        <li key={service.id} className="flex items-center gap-3 border-b last:border-b-0 border-b-dark-surface min-h-13.5">
                            <span className="flex justify-center items-center border border-dark-red rounded-full size-7.5 text-logo-red shrink-0">
                                <CheckIcon sx={{ fontSize: 14 }} />
                            </span>
                            <div className="flex flex-col gap-0.5 grow">
                                <span className="font-inter font-semibold text-[14px] text-pure-white">{service.title}</span>
                                <span className="font-inter text-[12px] text-muted-gray">{service.subtitle}</span>
                            </div>
                            <button
                                type="button"
                                aria-label={`Убрать: ${service.title}`}
                                onClick={() => onRemove(service.id)}
                                className="flex justify-center items-center size-11 text-muted-gray hover:text-pure-white cursor-pointer shrink-0"
                            >
                                <CloseIcon sx={{ fontSize: 16 }} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
};
