import { AboutUsSection } from "@/views/home/components/about-us-section/AboutUsSection"
import { ContactSection } from "@/views/home/components/contact-section/ContactSection"
import { HeroSection } from "@/views/home/components/hero-section/HeroSection"
import { ProductsSection } from "@/views/home/components/products-section/ProductsSection"

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