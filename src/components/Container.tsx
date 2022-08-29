import { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren<{ className?: string }>) => {
  const className = props.className || "";
  return (
    <section className={`${className} container mx-auto px-5 overflow-x-hidden`} {...props}>
      {props.children}
    </section>
  );
};
export default Container;
