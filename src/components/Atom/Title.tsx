import { PropsWithChildren } from "react";
import { useTheme } from "next-themes";

const AtomTitle = ({
  children,
  alignText = "left",
  inverted = false,
  ignoreDarkMode = false,
  subtitle = "",
}: PropsWithChildren<{
  alignText?: string;
  inverted?: boolean;
  ignoreDarkMode?: boolean;
  subtitle?: string;
}>) => {
  const { theme } = useTheme();
  const invertedBasedOnTheme = ignoreDarkMode ? inverted : theme === "dark" ? !inverted : inverted;
  const colorClass = invertedBasedOnTheme ? "from-pink-50 to-pink-300" : "from-pink-500 to-pink-900";
  const subtitleColorClass = invertedBasedOnTheme ? "text-pink-50" : "text-pink-600";
  const flexJustify = alignText === "left" ? "justify-start" : alignText === "right" ? "justify-end" : "justify-center";
  const alignTextClass = `text-${alignText}`;
  return (
    <div className={`${alignTextClass} mb-8 w-auto space-y-3 ${flexJustify}`} data-aos="fade-up" data-aos-delay="100">
      <h2 className={`text-2xl font-extrabold tracking-tight md:max-w-full md:text-3xl ${alignTextClass}`} data-aos="slide-up">
        <span className={`-mb-1 block bg-gradient-to-r pb-1 ${colorClass} relative bg-clip-text text-transparent`}>{children}</span>
      </h2>
      {subtitle && <h3 className={`${alignTextClass} tracking-normal md:text-lg ${subtitleColorClass}`}>{subtitle}</h3>}
    </div>
  );
};

export default AtomTitle;