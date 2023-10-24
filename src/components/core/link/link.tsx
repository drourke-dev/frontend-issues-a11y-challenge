import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type AnchorElementProps = ComponentPropsWithoutRef<"a">;

interface LinkOwnProps {
  href: string;
}

export type LinkProps = PropsWithChildren<LinkOwnProps> &
  Omit<AnchorElementProps, keyof LinkOwnProps>;

export const Link = ({
  children,
  href,
  className,
  ...restProps
}: LinkProps) => {
  return (
    <a
      href={href}
      className={`c-link ${className ? className : ""}`.trim()}
      {...restProps}
    >
      {children}
    </a>
  );
};
