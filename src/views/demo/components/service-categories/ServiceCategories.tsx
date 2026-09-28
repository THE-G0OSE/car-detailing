"use client";

interface ICategoryWithCount {
    id: string;
    label: string;
    count: number;
}

interface IProps {
    categories: ICategoryWithCount[];
    activeId: string;
    onSelect: (id: string) => void;
    variant: "list" | "pills";
}

export const ServiceCategories: React.FC<IProps> = ({ categories, activeId, onSelect, variant }) => {
    if (variant === "pills") {
        return (
            <div role="group" aria-label="Категории услуг" className="flex gap-2 -mx-5 px-5 overflow-x-auto">
                {categories.map((category) => {
                    const active = category.id === activeId;
                    return (
                        <button
                            key={category.id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onSelect(category.id)}
                            className={`flex items-center gap-2 px-3.5 border rounded-full h-11 font-inter text-[14px] whitespace-nowrap cursor-pointer shrink-0 ${
                                active
                                    ? "bg-logo-red border-logo-red text-pure-white font-semibold"
                                    : "bg-carbon-black border-border-gray text-light-gray"
                            }`}
                        >
                            {category.label}
                            <span className={`text-[12px] ${active ? "opacity-85" : "text-muted-gray"}`}>{category.count}</span>
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 p-5">
            <p className="font-inter font-bold text-[14px] text-pure-white uppercase tracking-[0.04em]">2. Выбор услуг</p>
            <div role="group" aria-label="Категории услуг" className="flex flex-col gap-0.5">
                {categories.map((category) => {
                    const active = category.id === activeId;
                    return (
                        <button
                            key={category.id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onSelect(category.id)}
                            className={`flex justify-between items-center px-3 border rounded-md h-10.5 font-inter text-[14px] text-left cursor-pointer ${
                                active
                                    ? "bg-dark-red/25 border-logo-red text-pure-white font-semibold"
                                    : "border-transparent text-light-gray"
                            }`}
                        >
                            {category.label}
                            <span className={`text-[12px] ${active ? "text-logo-red" : "text-muted-gray"}`}>{category.count}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
