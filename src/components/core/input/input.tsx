import { ComponentPropsWithoutRef } from "react";

type InputElementProps = ComponentPropsWithoutRef<"input">;

interface InputOwnProps {
  label: string;
}

export type InputProps = InputOwnProps &
  Omit<InputElementProps, keyof InputOwnProps>;

export const Input = ({ className, label, type }: InputProps) => {
  return (
    <div className={`c-input ${className ? className : ""}`.trim()}>
      <label className="c-input__label">{label}</label>
      <input type={type} className="c-input__input" />
    </div>
  );
};
