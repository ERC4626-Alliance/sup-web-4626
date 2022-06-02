import { PropsWithChildren } from "react";

const AtomTitle = ({ children, alignText = "left" }: PropsWithChildren<{ alignText?: string }>) => {
  return <>
    <h2 className={`text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl inline-flex mb-8 text-${alignText}`} data-aos="fade-down" data-aos-delay="500">
      <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">{children}</span>
    </h2>
  </>;
};

export default AtomTitle;

