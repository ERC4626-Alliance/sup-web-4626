import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren<any>) => {
  return <section className="container mx-auto px-5">{children}</section>;
};
export default Container;
