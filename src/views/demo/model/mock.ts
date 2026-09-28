import { IBodyColor, IDemoService, IOption, SuspensionId } from "@/views/demo/model/types";

export const BODY_TYPES: IOption[] = [
    { id: "sedan", label: "Седан" },
    { id: "crossover", label: "Кроссовер" },
    { id: "wagon", label: "Универсал" },
    { id: "hatch", label: "Хэтчбек" },
];

export const CAR_MODELS: IOption[] = [
    { id: "bmw-x6", label: "BMW X6 (G06)" },
    { id: "mercedes-gle", label: "Mercedes-Benz GLE Coupé" },
    { id: "porsche-cayenne", label: "Porsche Cayenne Coupé" },
    { id: "audi-q8", label: "Audi Q8" },
];

export const BODY_COLORS: IBodyColor[] = [
    { id: "black", label: "Чёрный металлик", hex: "#0b0b0d" },
    { id: "graphite", label: "Графит", hex: "#5a5d63" },
    { id: "silver", label: "Серебристый", hex: "#c9ccd1" },
    { id: "red", label: "Красный", hex: "#c8102e" },
    { id: "blue", label: "Синий", hex: "#1d3f91" },
    { id: "navy", label: "Тёмно-синий", hex: "#0f2a5c" },
    { id: "white", label: "Белый", hex: "#f0f0f2" },
];

export const SUSPENSION_LEVELS: IOption<SuspensionId>[] = [
    { id: "low", label: "Низкая" },
    { id: "std", label: "Стандарт" },
    { id: "high", label: "Высокая" },
];

export const DEMO_SERVICE_CATEGORIES: IOption[] = [
    { id: "all", label: "Все услуги" },
    { id: "body", label: "Защита кузова" },
    { id: "glass", label: "Защита стёкол" },
    { id: "tint", label: "Тонировка" },
    { id: "polish", label: "Полировка" },
    { id: "clean", label: "Химчистка" },
];

export const DEMO_SERVICES: IDemoService[] = [
    {
        id: "ppf",
        categoryId: "body",
        categoryLabel: "Защита кузова",
        title: "Бронирование кузова",
        subtitle: "PPF-плёнка",
        description: "Полиуретановая плёнка защищает лакокрасочное покрытие от сколов, царапин и воздействия окружающей среды.",
        image: "/images/hero1.jpg",
    },
    {
        id: "ceramic",
        categoryId: "body",
        categoryLabel: "Защита кузова",
        title: "Керамическое покрытие",
        subtitle: "3 слоя",
        description: "Глубокий блеск, защита от химии, грязи и ультрафиолета. Кузов проще мыть.",
        image: "/images/hero1.jpg",
    },
    {
        id: "anti-rain",
        categoryId: "glass",
        categoryLabel: "Защита стёкол",
        title: "Антидождь",
        subtitle: "Гидрофобное покрытие",
        description: "Капли скатываются с лобового стекла уже на ходу — обзор в дождь заметно лучше.",
        image: "/images/hero1.jpg",
    },
    {
        id: "tint",
        categoryId: "tint",
        categoryLabel: "Тонировка",
        title: "Тонировка стёкол",
        subtitle: "Задняя полусфера",
        description: "Комфорт, приватность и защита от ультрафиолета. Различные степени затемнения.",
        image: "/images/hero1.jpg",
    },
    {
        id: "polish",
        categoryId: "polish",
        categoryLabel: "Полировка",
        title: "Полировка кузова",
        subtitle: "Восстановительная",
        description: "Восстанавливает блеск, удаляет мелкие царапины и дефекты лакокрасочного покрытия.",
        image: "/images/hero1.jpg",
    },
    {
        id: "interior",
        categoryId: "clean",
        categoryLabel: "Химчистка",
        title: "Химчистка салона",
        subtitle: "Комплексная",
        description: "Глубокая очистка всех элементов салона: сиденья, потолок, ковры, пластик и кожа.",
        image: "/images/about-us.jpg",
    },
];

export const DEFAULT_ACTIVE_SERVICES = ["ppf", "tint", "ceramic", "interior"];
