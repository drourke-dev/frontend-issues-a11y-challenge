import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type NavElementProps = ComponentPropsWithoutRef<"nav">;

interface NavOwnProps {}

export type NavProps = PropsWithChildren<NavOwnProps> &
  Omit<NavElementProps, keyof NavOwnProps>;

export const Nav = ({ children, className }: NavProps) => {
  return (
    <div className={`c-nav ${className ? className : ""}`.trim()}>
      {children}
    </div>
  );
};
