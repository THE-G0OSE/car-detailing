import { Navbar } from "./components/Navbar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-deep-black h-17.5 font-inter font-medium text-[12px] text-pure-white">
      {/* logo  */}
      <div></div>
      <Navbar />
      {/* other buttons */}
      <div></div>
    </header>
  );
};
