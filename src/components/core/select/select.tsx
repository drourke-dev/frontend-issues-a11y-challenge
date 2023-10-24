import { ComponentPropsWithoutRef } from "react";

type SelectElementProps = ComponentPropsWithoutRef<"select">;

interface SelectOwnProps {
  label: string;
}

export type SelectProps = SelectOwnProps &
  Omit<SelectElementProps, keyof SelectOwnProps>;

export const Select = ({ className, label, children }: SelectProps) => {
  return (
    <div className={`c-select ${className ? className : ""}`.trim()}>
      <label className="c-Select__label">{label}</label>
      <select className="c-select__select">{children}</select>
    </div>
  );
};
