import { Link, LinkProps } from "../link";

interface NavLinkOwnProps {
  isActive?: boolean;
}

export type NavLinkProps = NavLinkOwnProps &
  Omit<LinkProps, keyof NavLinkOwnProps>;

export const NavLink = ({
  children,
  href,
  className,
  isActive,
  ...restProps
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`c-nav-link ${className ? className : ""} ${
        isActive ? "is-active" : ""
      }`.trim()}
      {...restProps}
    >
      {children}
    </Link>
  );
};
