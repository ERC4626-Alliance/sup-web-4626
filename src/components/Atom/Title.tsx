import { PropsWithChildren } from "react";

const AtomTitle = ({ children, alignText = "left", inverted = false }: PropsWithChildren<{ alignText?: string; inverted?: boolean; }>) => {
  const colorClass = inverted ? "from-pink-50 to-pink-300" : "from-pink-500 to-pink-900";
  return <>
    <h2 className={`text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl inline-flex mb-8 text-${alignText}`} data-aos="fade-up" data-aos-delay="100">
      <span className={`-mb-1 pb-1 block bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>{children}</span>
    </h2>
  </>;
};

export default AtomTitle;

