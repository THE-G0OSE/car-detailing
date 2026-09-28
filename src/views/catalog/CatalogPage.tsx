"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/entities/product/model/mock";
import { IProduct } from "@/entities/product/model/types";
import { ProductModal } from "@/entities/product/ui/ProductModal";
import { CatalogHero } from "@/views/catalog/components/catalog-hero/CatalogHero";
import { CategoryFilter } from "@/views/catalog/components/category-filter/CategoryFilter";
import { SearchSort } from "@/views/catalog/components/search-sort/SearchSort";
import { ProductGrid } from "@/views/catalog/components/product-grid/ProductGrid";
import { ConsultCard } from "@/views/catalog/components/consult-card/ConsultCard";
import { BenefitsGrid } from "@/views/catalog/components/benefits-grid/BenefitsGrid";
import { ShowMoreBar } from "@/views/catalog/components/show-more-bar/ShowMoreBar";

type SortOption = "popular" | "cheap" | "expensive";

export const CatalogPage = () => {
    const [categoryId, setCategoryId] = useState("all");
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState<SortOption>("popular");
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    const filteredProducts = useMemo(() => {
        const needle = query.trim().toLowerCase();
        const items = PRODUCTS.filter(
            (product) => categoryId === "all" || product.categoryId === categoryId
        ).filter(
            (product) =>
                !needle ||
                product.title.toLowerCase().includes(needle) ||
                product.description.toLowerCase().includes(needle)
        );

        if (sort === "cheap") return [...items].sort((a, b) => a.minPrice - b.minPrice);
        if (sort === "expensive") return [...items].sort((a, b) => b.minPrice - a.minPrice);
        return items;
    }, [categoryId, query, sort]);

    const currentCategory = PRODUCT_CATEGORIES.find((category) => category.id === categoryId);

    return (
        <div className="bg-deep-black">
            <CatalogHero />
            <section className="flex flex-col gap-10 md:gap-14 px-5 md:px-12 py-8 md:py-16">
                <div className="flex flex-col md:grid md:grid-cols-[280px_minmax(0,1fr)] gap-6 md:gap-8 md:items-start">
                    <div className="order-1 md:order-0 md:col-start-2 md:row-start-1 flex flex-col md:flex-row md:justify-between gap-5 md:items-end">
                        <div className="flex flex-col gap-2.5">
                            <nav aria-label="Хлебные крошки" className="flex items-center gap-2 font-inter text-[13px] text-muted-gray">
                                <Link href="/" className="text-light-gray">Главная</Link>
                                <span>/</span>
                                <span>Каталог</span>
                            </nav>
                            <p className="font-header text-pure-white">Каталог услуг</p>
                        </div>
                        <SearchSort
                            query={query}
                            onQueryChange={setQuery}
                            sort={sort}
                            onSortChange={(value) => setSort(value as SortOption)}
                        />
                    </div>

                    <div className="order-2 md:order-0 md:col-start-1 md:row-start-1 md:row-span-2 flex flex-col gap-6">
                        <CategoryFilter
                            categories={PRODUCT_CATEGORIES}
                            activeId={categoryId}
                            onSelect={setCategoryId}
                        />
                        <div className="hidden md:block">
                            <ConsultCard />
                        </div>
                    </div>

                    <div className="order-3 md:order-0 md:col-start-2 md:row-start-2 flex flex-col gap-6">
                        <ProductGrid
                            products={filteredProducts}
                            categories={PRODUCT_CATEGORIES}
                            onProductDetailsClick={setSelectedProduct}
                        />
                        <ShowMoreBar
                            shown={filteredProducts.length}
                            total={currentCategory?.count ?? PRODUCTS.length}
                        />
                    </div>

                    <div className="order-4 md:hidden">
                        <ConsultCard />
                    </div>
                </div>

                <BenefitsGrid />
            </section>

            <ProductModal
                product={selectedProduct}
                categories={PRODUCT_CATEGORIES}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};
