import { PropsWithChildren } from "react";
import { classNames } from "../helpers/formatters";

export default function Container(props: PropsWithChildren<{ className?: string; noPb?: boolean; noHidden?: boolean }>) {
  const { noPb, className: extraClassName, children, noHidden } = props;
  return <section className={classNames("container mx-auto px-5", !noPb && "pb-2", !noHidden && "overflow-hidden", extraClassName)}>{children}</section>;
}