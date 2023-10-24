import { Nav } from "../../core/nav";
import { NavLink } from "../../core/nav-link";
import { Container } from "../grid/container";

export const SiteFooter = () => {
  return (
    <div className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer-navigation">
            <h2 className="site-footer-navigation__title">Popular Search</h2>
            <Nav className="site-footer-navigation__nav">
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Apartment for Sale
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Apartment for Rent
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Offices for Sale
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Offices for Rent
              </NavLink>
            </Nav>
          </div>
          <div className="site-footer-navigation">
            <h2 className="site-footer-navigation__title">Quick Links</h2>
            <Nav className="site-footer-navigation__nav">
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Terms of Use
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Privacy Policy
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Pricing Plans
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Our Services
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Contact
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Careers
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                FAQs
              </NavLink>
            </Nav>
          </div>
          <div className="site-footer-navigation">
            <h2 className="site-footer-navigation__title">Discovery</h2>
            <Nav className="site-footer-navigation__nav">
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Chicago
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Los Angeles
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                New Jersey
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                New York
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                California
              </NavLink>
            </Nav>
          </div>
          <div className="site-footer-navigation">
            <h2 className="site-footer-navigation__title">Follow Us</h2>
            <Nav className="site-footer-navigation__nav">
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Twitter
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Facebook
              </NavLink>
              <NavLink className="site-footer-navigation__nav__link" href="/">
                Instagram
              </NavLink>
            </Nav>
          </div>
        </div>
      </Container>
    </div>
  );
};
