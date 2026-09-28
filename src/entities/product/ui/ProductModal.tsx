"use client";

import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import type { SxProps, Theme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { IProduct, IProductCategory } from "@/entities/product/model/types";

interface IProps {
    product: IProduct | null;
    categories: IProductCategory[];
    onClose: () => void;
}

const closeButtonSx: SxProps<Theme> = {
    width: 44,
    height: 44,
    flexShrink: 0,
    color: "var(--color-light-gray)",
    border: "1px solid var(--color-border-gray)",
};

export const ProductModal: React.FC<IProps> = ({ product, categories, onClose }) => {
    // Keeps the last product rendered while the dialog fades out after `product` becomes null.
    const [displayed, setDisplayed] = useState(product);
    const [booked, setBooked] = useState(false);

    if (product && product !== displayed) {
        setDisplayed(product);
        setBooked(false);
    }

    const categoryLabel = categories.find((category) => category.id === displayed?.categoryId)?.label;

    return (
        <Dialog
            open={product !== null}
            onClose={onClose}
            scroll="body"
            maxWidth={false}
            aria-labelledby="product-modal-title"
            slotProps={{
                backdrop: { sx: { backgroundColor: "rgba(5, 6, 8, 0.82)" } },
                paper: {
                    sx: {
                        width: { xs: "calc(100% - 24px)", md: 920 },
                        maxWidth: "none",
                        m: { xs: "12px", md: 4 },
                        backgroundColor: "var(--color-carbon-black)",
                        backgroundImage: "none",
                        border: "1px solid var(--color-border-gray)",
                        borderRadius: "14px",
                        boxShadow: "0 40px 100px rgba(0, 0, 0, 0.7)",
                        overflow: "hidden",
                    },
                },
            }}
        >
            {displayed && (
                <div className="flex md:grid flex-col md:grid-cols-[380px_minmax(0,1fr)]">
                    <div className="relative h-47.5 md:h-auto md:min-h-145">
                        <Image
                            src={displayed.image}
                            alt={displayed.title}
                            fill
                            sizes="(min-width: 768px) 380px, 100vw"
                            className="object-cover"
                        />
                        <div className="md:hidden right-0 bottom-0 left-0 absolute bg-linear-to-t from-carbon-black h-17.5" />
                        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-transparent from-70% to-carbon-black" />
                        <span className="top-3.5 md:top-5 left-3.5 md:left-5 absolute flex items-center bg-deep-black/85 px-3 border border-dark-red rounded-full h-7 md:h-7.5 font-inter font-semibold text-[12px] text-logo-red">
                            {categoryLabel}
                        </span>
                        <IconButton
                            aria-label="Закрыть"
                            onClick={onClose}
                            className="md:hidden"
                            sx={{
                                ...closeButtonSx,
                                position: "absolute",
                                top: 10,
                                right: 10,
                                color: "var(--color-pure-white)",
                                backgroundColor: "rgba(10, 11, 14, 0.85)",
                            }}
                        >
                            <CloseIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                    </div>

                    <div className="flex flex-col gap-3.5 md:gap-4.5 px-5 md:px-9 pt-1 md:pt-8 pb-5 md:pb-9">
                        <div className="flex justify-between items-start gap-4">
                            <h2
                                id="product-modal-title"
                                className="font-manrope font-bold text-[22px] text-pure-white md:text-[30px] uppercase leading-[1.12em]"
                            >
                                {displayed.title}
                            </h2>
                            <IconButton
                                aria-label="Закрыть"
                                onClick={onClose}
                                className="hidden md:inline-flex"
                                sx={closeButtonSx}
                            >
                                <CloseIcon sx={{ fontSize: 18 }} />
                            </IconButton>
                        </div>

                        <p className="font-inter text-[14px] text-light-gray md:text-[15px] leading-[1.6em]">
                            {displayed.longDescription}
                        </p>

                        <div className="flex flex-col gap-2.5">
                            <p className="font-inter font-bold text-[12px] text-logo-red md:text-[13px] uppercase tracking-[0.08em]">
                                Что входит
                            </p>
                            <ul className="gap-2 md:gap-x-5 md:gap-y-2.5 grid grid-cols-1 md:grid-cols-2">
                                {displayed.includes.map((item) => (
                                    <li key={item} className="flex gap-2.5 font-inter text-[14px] text-pure-white leading-[1.4em]">
                                        <CheckIcon className="mt-0.5 text-logo-red shrink-0" sx={{ fontSize: 16 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="gap-2 md:gap-2.5 grid grid-cols-3 md:mt-1">
                            {[
                                { label: "Время работы", value: displayed.duration },
                                { label: "Гарантия", value: displayed.warranty },
                                { label: "Стоимость", value: `от ${displayed.minPrice.toLocaleString("ru-RU")} ₽`, accent: true },
                            ].map(({ label, value, accent }) => (
                                <div
                                    key={label}
                                    className="flex flex-col gap-1 bg-deep-black p-2.5 md:p-3.5 border border-border-gray rounded-lg"
                                >
                                    <span className="font-inter text-[11px] text-muted-gray md:text-[12px]">{label}</span>
                                    <span className={`font-manrope font-bold text-[14px] md:text-[16px] ${accent ? "text-logo-red" : "text-pure-white"}`}>
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-1 md:mt-auto md:pt-1.5">
                            {booked ? (
                                <div
                                    role="status"
                                    className="flex items-center gap-3 bg-[#13261a] px-4 md:px-4.5 py-3.5 border border-[#2f6b44] rounded-lg min-h-13.5 font-inter text-[#d5f5df] text-[14px] leading-[1.4em]"
                                >
                                    <CheckIcon className="text-[#5fd08a] shrink-0" sx={{ fontSize: 20 }} />
                                    Спасибо! Мы свяжемся с вами, чтобы подтвердить запись.
                                </div>
                            ) : (
                                <div className="gap-2 md:gap-3 grid grid-cols-1 md:grid-cols-2">
                                    <button
                                        type="button"
                                        onClick={() => setBooked(true)}
                                        className="flex justify-center items-center gap-2.5 bg-logo-red rounded-lg h-13.5 font-inter font-semibold text-[16px] text-pure-white md:text-[15px] cursor-pointer"
                                    >
                                        Записаться <ArrowForwardIcon fontSize="small" />
                                    </button>
                                    <Link
                                        href="/demo"
                                        className="flex justify-center items-center border border-border-gray rounded-lg h-13 md:h-13.5 font-inter font-semibold text-[15px] text-pure-white"
                                    >
                                        Примерить на своём авто
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Dialog>
    );
};
