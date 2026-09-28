"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import { ActiveServices } from "@/views/demo/components/active-services/ActiveServices";
import { CarSetup } from "@/views/demo/components/car-setup/CarSetup";
import { DemoIntro } from "@/views/demo/components/demo-intro/DemoIntro";
import { ExtrasStrip } from "@/views/demo/components/extras-strip/ExtrasStrip";
import { ResultSection } from "@/views/demo/components/result-section/ResultSection";
import { ServiceCards } from "@/views/demo/components/service-cards/ServiceCards";
import { ServiceCategories } from "@/views/demo/components/service-categories/ServiceCategories";
import {
    BODY_COLORS,
    BODY_TYPES,
    CAR_MODELS,
    DEFAULT_ACTIVE_SERVICES,
    DEMO_SERVICES,
    DEMO_SERVICE_CATEGORIES,
} from "@/views/demo/model/mock";
import { SuspensionId } from "@/views/demo/model/types";

const DemoScene = dynamic(
    () => import("@/views/demo/components/demo-scene/DemoScene").then((mod) => mod.DemoScene),
    { ssr: false, loading: () => <div className="bg-deep-black size-full animate-pulse" /> }
);

const CATEGORIES_WITH_COUNT = DEMO_SERVICE_CATEGORIES.map((category) => ({
    ...category,
    count:
        category.id === "all"
            ? DEMO_SERVICES.length
            : DEMO_SERVICES.filter((service) => service.categoryId === category.id).length,
}));

export const DemoPage = () => {
    const [bodyType, setBodyType] = useState(BODY_TYPES[1].id);
    const [model, setModel] = useState(CAR_MODELS[0].id);
    const [colorId, setColorId] = useState(BODY_COLORS[0].id);
    const [suspension, setSuspension] = useState<SuspensionId>("std");
    const [categoryId, setCategoryId] = useState("all");
    const [activeIds, setActiveIds] = useState<string[]>(DEFAULT_ACTIVE_SERVICES);

    const toggleService = (id: string) =>
        setActiveIds((ids) => (ids.includes(id) ? ids.filter((activeId) => activeId !== id) : [...ids, id]));

    const activeServices = activeIds
        .map((id) => DEMO_SERVICES.find((service) => service.id === id))
        .filter((service) => service !== undefined);
    const visibleServices = DEMO_SERVICES.filter(
        (service) => categoryId === "all" || service.categoryId === categoryId
    );
    const colorHex = BODY_COLORS.find((color) => color.id === colorId)?.hex ?? BODY_COLORS[0].hex;

    return (
        <div className="bg-deep-black">
            <section className="flex lg:grid flex-col lg:grid-cols-[320px_minmax(0,1fr)_320px] gap-6 lg:gap-x-8 lg:gap-y-7 px-5 lg:px-12 pt-6 lg:pt-12">
                <div className="order-1 lg:order-0 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:self-center">
                    <DemoIntro />
                </div>

                <div className="relative order-2 lg:order-0 lg:col-span-2 lg:col-start-2 lg:row-start-2 -mx-5 lg:mx-0 lg:border border-border-gray lg:rounded-lg h-70 lg:h-110 overflow-hidden">
                    <DemoScene color={colorHex} suspension={suspension} tinted={activeIds.includes("tint")} />
                    <p className="bottom-3 left-1/2 absolute flex items-center gap-2 bg-deep-black/80 px-3 border border-border-gray rounded-full h-8 font-inter text-[12px] text-light-gray whitespace-nowrap -translate-x-1/2 pointer-events-none">
                        <ThreeSixtyIcon className="text-logo-red" sx={{ fontSize: 18 }} />
                        Потяните, чтобы повернуть
                    </p>
                </div>

                <div className="order-3 lg:order-0 lg:col-start-3 lg:row-start-1 lg:self-start">
                    <ActiveServices
                        services={activeServices}
                        onRemove={toggleService}
                        onClear={() => setActiveIds([])}
                    />
                </div>

                <div className="order-4 lg:order-0 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:self-start bg-carbon-black border border-border-gray rounded-lg divide-y divide-dark-surface">
                    <CarSetup
                        bodyType={bodyType}
                        onBodyTypeChange={setBodyType}
                        model={model}
                        onModelChange={setModel}
                        colorId={colorId}
                        onColorChange={setColorId}
                        suspension={suspension}
                        onSuspensionChange={setSuspension}
                    />
                    <div className="hidden lg:block">
                        <ServiceCategories
                            variant="list"
                            categories={CATEGORIES_WITH_COUNT}
                            activeId={categoryId}
                            onSelect={setCategoryId}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3.5 order-5 lg:order-0 lg:col-span-2 lg:col-start-2 lg:row-start-3 pt-2 lg:pt-0">
                    <p className="lg:hidden font-inter font-bold text-[14px] text-pure-white uppercase tracking-[0.04em]">
                        2. Выбор услуг
                    </p>
                    <div className="lg:hidden">
                        <ServiceCategories
                            variant="pills"
                            categories={CATEGORIES_WITH_COUNT}
                            activeId={categoryId}
                            onSelect={setCategoryId}
                        />
                    </div>
                    <ServiceCards services={visibleServices} activeIds={activeIds} onToggle={toggleService} />
                </div>
            </section>

            <div className="px-5 lg:px-12 pt-4 lg:pt-10">
                <ExtrasStrip />
            </div>

            <ResultSection />
        </div>
    );
};
