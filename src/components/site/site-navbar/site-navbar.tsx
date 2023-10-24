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
        <NavLink className="site-navbar__nav__link" href="/">
          Apartments
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          Houses
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          Office
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          Villa
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          For Sale
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          For Rent
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          Agency
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          Blog
        </NavLink>
        <NavLink className="site-navbar__nav__link" href="/">
          Contact
        </NavLink>
      </Nav>
    </div>
  );
};
