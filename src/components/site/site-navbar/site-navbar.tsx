import { Nav } from "../../core/nav";
import { NavLink } from "../../core/nav-link";

export interface SiteNavbarProps {
  className?: string;
}

export const SiteNavbar = ({ className }: SiteNavbarProps) => {
  return (
    <div className={`site-navbar ${className ? className : ""}`.trim()}>
      <Nav className="site-navbar__nav">
        <span
          className="c-link c-nav-link site-navbar__nav__link is-active"
          aria-current="page"
        >
          Welcome
        </span>
        <NavLink className="site-navbar__nav__link" href="/apartments">
          Apartments
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/houses">
          Houses
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/office">
          Office
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/villa">
          Villa
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/for-sale">
          For Sale
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/for-rent">
          For Rent
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/agency">
          Agency
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/blog">
          Blog
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/contact">
          Contact
        </NavLink>
      </Nav>
    </div>
  );
};
