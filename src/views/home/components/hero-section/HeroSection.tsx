import { HeroCarousel } from "@/views/home/components/hero-section/components/HeroCarousel"
import { HeroText } from "@/views/home/components/hero-section/components/HeroText"

export const HeroSection = () => {

    return (
        <div className="relative flex flex-col bg-deep-black w-full md:h-167">
            <div className="relative h-62.5 md:absolute md:inset-0 md:h-full">
                <HeroCarousel/>
            </div>
            <HeroText />
        </div>
    )
}