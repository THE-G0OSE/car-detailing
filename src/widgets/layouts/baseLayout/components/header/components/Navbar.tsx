import { NavbarButton } from "@/widgets/layouts/baseLayout/components/header/components/NavbarButton";
import { links } from "@/widgets/layouts/baseLayout/constraints";

export const Navbar = () => {
  return (
    <nav className="flex gap-7">
      {links.map((link) => (
        <NavbarButton key={link.path + "-link"} {...link} />
      ))}
    </nav>
  );
};
