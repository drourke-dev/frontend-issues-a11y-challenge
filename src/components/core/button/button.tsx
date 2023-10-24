import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ButtonElementProps = ComponentPropsWithoutRef<"button">;

interface ButtonOwnProps {}

export type ButtonProps = PropsWithChildren<ButtonOwnProps> &
  Omit<ButtonElementProps, keyof ButtonOwnProps>;

export const Button = ({ children, className, ...restProps }: ButtonProps) => {
  return (
    <button
      className={`c-button ${className ? className : ""}`.trim()}
      {...restProps}
    >
      {children}
    </button>
  );
};
