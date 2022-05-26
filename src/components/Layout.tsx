import Footer from "./Footer";
import Meta from "./Meta";
import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta/>
      <Header/>
      <div className="min-h-screen bg-white">
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
