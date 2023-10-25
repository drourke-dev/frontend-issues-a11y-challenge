import { ComponentPropsWithoutRef } from "react";

type SelectElementProps = ComponentPropsWithoutRef<"select">;

interface SelectOwnProps {
  label: string;
  id: string;
}

export type SelectProps = SelectOwnProps &
  Omit<SelectElementProps, keyof SelectOwnProps>;

export const Select = ({ id, className, label, children }: SelectProps) => {
  return (
    <div className={`c-select ${className ? className : ""}`.trim()}>
      <label htmlFor={id} className="c-Select__label">
        {label}
      </label>
      <select id={id} className="c-select__select">
        {children}
      </select>
    </div>
  );
};
