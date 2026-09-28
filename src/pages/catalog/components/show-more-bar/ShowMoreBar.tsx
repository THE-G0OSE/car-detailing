interface IProps {
    shown: number;
    total: number;
}

export const ShowMoreBar: React.FC<IProps> = ({ shown, total }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 md:justify-between">
            <span className="font-inter text-[13px] text-muted-gray">
                Показано {shown} из {total}
            </span>
            <button
                type="button"
                className="flex justify-center items-center bg-transparent px-7 border border-border-gray rounded-lg w-full md:w-auto h-13 font-inter font-semibold text-[15px] text-pure-white"
            >
                Показать ещё
            </button>
        </div>
    );
};
