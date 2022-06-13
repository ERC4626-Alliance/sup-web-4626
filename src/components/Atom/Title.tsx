import { PropsWithChildren } from "react";

const AtomTitle = ({ children, alignText = "left", inverted = false, subtitle = "" }: PropsWithChildren<{ alignText?: string; inverted?: boolean; subtitle?: string; }>) => {
  const colorClass = inverted ? "from-pink-50 to-pink-300" : "from-pink-500 to-pink-900";
  const subtitleColorClass = inverted ? "text-pink-50" : "text-pink-600";
  const flexJustify = alignText === "left" ? "justify-start" : (alignText === "right" ? "justify-end" : "justify-center");
  const alignTextClass = `text-${alignText}`;
  return <div className={`${alignTextClass} space-y-3 mb-8 w-auto ${flexJustify}`} data-aos="fade-up" data-aos-delay="100">
    <h2 className={`text-2xl md:text-3xl font-extrabold max-w-[80vw] md:max-w-full tracking-tight text-${alignText}`} data-aos="slide-up">
      <span className={`-mb-1 pb-1 block bg-gradient-to-r ${colorClass} bg-clip-text text-transparent relative`}>{children}</span>
    </h2>
    {subtitle && <h3 className={`${alignTextClass} md:text-lg tracking-normal ${subtitleColorClass}`}>{subtitle}</h3>}
  </div>;
};

export default AtomTitle;

