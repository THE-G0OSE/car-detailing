export interface IProductCompact {
    image: string
    title: string
    body: string
    minPrice: number
}

export interface IProductCategory {
    id: string
    label: string
    count: number
}

export interface IProduct {
    id: string
    categoryId: string
    title: string
    description: string
    longDescription: string
    includes: string[]
    image: string
    duration: string
    warranty: string
    minPrice: number
}