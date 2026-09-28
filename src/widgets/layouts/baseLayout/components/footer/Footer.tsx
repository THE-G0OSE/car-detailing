import { FooterNavbar } from "@/widgets/layouts/baseLayout/components/footer/components/FooterNavbar"

export const Footer = () => {

    return (
        <footer className="flex flex-col bg-linear-170 from-70% from-back-secondary to-carbon-black h-42">
            <div className="flex justify-between py-10 border-elevated-surface border-b">
                {/* logo */}
                <div></div>
                <FooterNavbar/>
                {/* socials */}
                <div></div>
            </div>
        </footer>
    )
}