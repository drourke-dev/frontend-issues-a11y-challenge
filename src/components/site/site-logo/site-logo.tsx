import { Link } from "../../core/link";

export interface SiteLogoProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const SiteLogo = ({ children, href, className }: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={`site-logo ${className ? className : ""}`.trim()}
    >
      {children}
    </Link>
  );
};
