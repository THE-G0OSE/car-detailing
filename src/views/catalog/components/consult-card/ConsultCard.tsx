import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";

export const ConsultCard = () => {
    return (
        <div className="relative flex flex-col justify-end gap-3 bg-carbon-black p-6 border border-border-gray rounded-lg min-h-72.5 overflow-hidden">
            <div className="top-0 right-0 left-0 absolute h-37.5">
                <Image src="/images/about-us.jpg" alt="" fill sizes="280px" className="object-cover" />
            </div>
            <div className="top-17.5 right-0 left-0 absolute bg-linear-to-t from-carbon-black h-20" />
            <p className="z-10 relative font-manrope font-bold text-[19px] text-pure-white leading-[1.25em]">
                Остались вопросы по услугам?
            </p>
            <p className="z-10 relative font-inter text-[14px] text-muted-gray leading-[1.5em]">
                Наши специалисты помогут выбрать лучшее решение для вашего авто.
            </p>
            <Link
                href="/#contacts"
                className="z-10 relative flex justify-between items-center gap-3 bg-logo-red mt-1.5 px-4.5 rounded-lg h-12 font-inter font-semibold text-[14px] text-pure-white"
            >
                Получить консультацию <ArrowForwardIcon fontSize="small" />
            </Link>
        </div>
    );
};
