"use client";

import { IProductCategory } from "@/entities/product/model/types";

interface IProps {
    categories: IProductCategory[];
    activeId: string;
    onSelect: (id: string) => void;
}

export const CategoryFilter: React.FC<IProps> = ({ categories, activeId, onSelect }) => {
    return (
        <>
            <div className="flex md:hidden gap-2 -mx-5 px-5 overflow-x-auto">
                {categories.map((category) => {
                    const active = category.id === activeId;
                    return (
                        <button
                            key={category.id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onSelect(category.id)}
                            className={`flex shrink-0 items-center gap-2 px-4 h-11 rounded-full font-inter text-[14px] whitespace-nowrap ${
                                active
                                    ? "bg-logo-red border border-logo-red text-pure-white font-semibold"
                                    : "bg-carbon-black border border-border-gray text-light-gray"
                            }`}
                        >
                            {category.label}
                            <span className={active ? "text-[12px] opacity-85" : "text-[12px] text-muted-gray"}>
                                {category.count}
                            </span>
                        </button>
                    );
                })}
            </div>
            <nav
                aria-label="Категории услуг"
                className="hidden md:flex flex-col bg-carbon-black border border-border-gray rounded-lg overflow-hidden"
            >
                {categories.map((category) => {
                    const active = category.id === activeId;
                    return (
                        <button
                            key={category.id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onSelect(category.id)}
                            className={`flex justify-between items-center px-4.5 border-l-2 border-b border-b-dark-surface last:border-b-0 h-13 font-inter text-[14px] text-left ${
                                active
                                    ? "border-l-logo-red bg-dark-surface text-pure-white font-semibold"
                                    : "border-l-transparent text-light-gray font-medium"
                            }`}
                        >
                            {category.label}
                            <span className={`text-[13px] ${active ? "text-logo-red" : "text-muted-gray"}`}>
                                {category.count}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </>
    );
};
