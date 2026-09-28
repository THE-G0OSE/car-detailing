import { AboutUsSection } from "@/pages/home/components/about-us-section/AboutUsSection"
import { ContactSection } from "@/pages/home/components/contact-section/ContactSection"
import { HeroSection } from "@/pages/home/components/hero-section/HeroSection"
import { ProductsSection } from "@/pages/home/components/products-section/ProductsSection"

export const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <ProductsSection/>
            <AboutUsSection/>
            <ContactSection/>
        </div>
    )
}