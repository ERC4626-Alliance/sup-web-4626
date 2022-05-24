import Footer from "./footer";
import Meta from "./meta";
import { ReactNode } from "react";
import Header from "./header";

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
