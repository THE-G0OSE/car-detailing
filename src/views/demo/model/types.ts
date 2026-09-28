export type SuspensionId = "low" | "std" | "high";

export interface IOption<T extends string = string> {
    id: T;
    label: string;
}

export interface IBodyColor {
    id: string;
    label: string;
    hex: string;
}

export interface IDemoService {
    id: string;
    categoryId: string;
    categoryLabel: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}
