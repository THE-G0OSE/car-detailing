import { links } from "@/widgets/layouts/baseLayout/constraints"
import Link from "next/link"

export const FooterNavbar = () => {
    return (
        <div className="flex gap-7 font-inter font-medium text-[11px] text-pure-white">
            {links.map((link) => (
                <Link key={link.path + "-link-footer"} href={link.path} >{link.title}</Link>
            ))} 
        </div>
    )

}