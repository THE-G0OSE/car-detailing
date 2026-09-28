import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <body className={"flex flex-col"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};
