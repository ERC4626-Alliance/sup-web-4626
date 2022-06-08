import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import { ReactNode } from "react";
import Header from "@/components/Header";

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta/>
      <Header/>
      <div className="min-h-screen bg-white max-w-[100vw] overflow-x-hidden md:overflow-auto md:max-w-none">
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
