"use client";

import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { BODY_COLORS, BODY_TYPES, CAR_MODELS, SUSPENSION_LEVELS } from "@/pages/demo/model/mock";
import { SuspensionId } from "@/pages/demo/model/types";

interface IProps {
    bodyType: string;
    onBodyTypeChange: (id: string) => void;
    model: string;
    onModelChange: (id: string) => void;
    colorId: string;
    onColorChange: (id: string) => void;
    suspension: SuspensionId;
    onSuspensionChange: (id: SuspensionId) => void;
}

export const CarSetup: React.FC<IProps> = ({
    bodyType,
    onBodyTypeChange,
    model,
    onModelChange,
    colorId,
    onColorChange,
    suspension,
    onSuspensionChange,
}) => {
    const colorLabel = BODY_COLORS.find((color) => color.id === colorId)?.label;

    return (
        <div className="flex flex-col gap-4 p-4.5 lg:p-5">
            <p className="font-inter font-bold text-[14px] text-pure-white uppercase tracking-[0.04em]">
                1. Выбор автомобиля
            </p>

            <div className="flex flex-col gap-2">
                <p className="font-inter text-[12px] text-light-gray">Кузов</p>
                <div className="gap-1.5 grid grid-cols-4">
                    {BODY_TYPES.map((body) => {
                        const active = body.id === bodyType;
                        return (
                            <button
                                key={body.id}
                                type="button"
                                aria-pressed={active}
                                onClick={() => onBodyTypeChange(body.id)}
                                className={`flex flex-col justify-center items-center gap-1.5 border rounded-md h-16 font-inter text-[11px] cursor-pointer ${
                                    active
                                        ? "bg-dark-red/25 border-logo-red text-pure-white"
                                        : "border-dark-surface text-light-gray"
                                }`}
                            >
                                <DirectionsCarOutlinedIcon sx={{ fontSize: 20 }} />
                                {body.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p id="car-model-label" className="font-inter text-[12px] text-light-gray">Модель</p>
                <TextField
                    select
                    value={model}
                    onChange={(e) => onModelChange(e.target.value)}
                    slotProps={{ select: { labelId: "car-model-label" } }}
                >
                    {CAR_MODELS.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>

            <div className="flex flex-col gap-2.5">
                <p className="font-inter text-[12px] text-light-gray">
                    Цвет кузова — <span className="text-pure-white">{colorLabel}</span>
                </p>
                <div role="radiogroup" aria-label="Цвет кузова" className="flex flex-wrap gap-1">
                    {BODY_COLORS.map((color) => {
                        const active = color.id === colorId;
                        return (
                            <button
                                key={color.id}
                                type="button"
                                role="radio"
                                aria-checked={active}
                                aria-label={color.label}
                                onClick={() => onColorChange(color.id)}
                                className={`p-1.5 border-2 rounded-full size-10 lg:size-9 lg:p-1 cursor-pointer ${
                                    active ? "border-logo-red" : "border-transparent"
                                }`}
                            >
                                <span
                                    className="block border border-border-gray rounded-full size-full"
                                    style={{ backgroundColor: color.hex }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-2.5">
                <p className="font-inter text-[12px] text-light-gray">Высота подвески</p>
                <div
                    role="radiogroup"
                    aria-label="Высота подвески"
                    className="gap-1 grid grid-cols-3 bg-carbon-black p-1 border border-dark-surface rounded-md"
                >
                    {SUSPENSION_LEVELS.map((level) => {
                        const active = level.id === suspension;
                        return (
                            <button
                                key={level.id}
                                type="button"
                                role="radio"
                                aria-checked={active}
                                onClick={() => onSuspensionChange(level.id)}
                                className={`rounded h-10 lg:h-9 font-inter text-[13px] lg:text-[12px] cursor-pointer ${
                                    active ? "bg-logo-red text-pure-white font-semibold" : "text-light-gray"
                                }`}
                            >
                                {level.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
