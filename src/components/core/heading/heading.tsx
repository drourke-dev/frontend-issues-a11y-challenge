import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type HeadingElementProps = ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

interface HeadingOwnProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export type HeadingProps = PropsWithChildren<HeadingOwnProps> &
  Omit<HeadingElementProps, keyof HeadingOwnProps>;

export const Heading = ({ children, as = "h1", className }: HeadingProps) => {
  const Component = as;

  return <Component className={className}>{children}</Component>;
};
