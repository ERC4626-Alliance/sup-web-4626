import { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren<any>) => {
  return (<section className={`${props.className || ""} container mx-auto px-5`}>{props.children}</section>);
};
export default Container;
