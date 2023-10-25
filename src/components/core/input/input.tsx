import { ComponentPropsWithoutRef } from "react";

type InputElementProps = ComponentPropsWithoutRef<"input">;

interface InputOwnProps {
  label: string;
  id: string;
}

export type InputProps = InputOwnProps &
  Omit<InputElementProps, keyof InputOwnProps>;

export const Input = ({
  id,
  className,
  label,
  type,
  placeholder,
}: InputProps) => {
  return (
    <div className={`c-input ${className ? className : ""}`.trim()}>
      <label htmlFor={id} className="c-input__label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="c-input__input"
        placeholder={placeholder}
      />
    </div>
  );
};
