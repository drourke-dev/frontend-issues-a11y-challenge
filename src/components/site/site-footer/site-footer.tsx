import { Nav } from "../../core/nav";
import { NavLink } from "../../core/nav-link";
import { Container } from "../grid/container";

export const SiteFooter = () => {
  return (
    <div className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer-navigation">
            <h4 className="site-footer-navigation__title">Popular Search</h4>
            <Nav className="site-footer-navigation__nav">
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/apartments-for-sale"
              >
                Apartments for Sale
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/apartments-for-rent"
              >
                Apartments for Rent
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/offices-for-sale"
              >
                Offices for Sale
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/offices-for-rent"
              >
                Offices for Rent
              </NavLink>
            </Nav>
          </div>
          <div className="site-footer-navigation">
            <h4 className="site-footer-navigation__title">Quick Links</h4>
            <Nav className="site-footer-navigation__nav">
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/terms-of-use"
              >
                Terms of Use
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/privacy-policy"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/pricing-plans"
              >
                Pricing Plans
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/our-services"
              >
                Our Services
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/careers"
              >
                Careers
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/faqs"
              >
                FAQs
              </NavLink>
            </Nav>
          </div>
          <div className="site-footer-navigation">
            <h4 className="site-footer-navigation__title">Discovery</h4>
            <Nav className="site-footer-navigation__nav">
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/chicago"
              >
                Chicago
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/los-angeles"
              >
                Los Angeles
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/new-jersey"
              >
                New Jersey
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/new-york"
              >
                New York
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/california"
              >
                California
              </NavLink>
            </Nav>
          </div>
          <div className="site-footer-navigation">
            <h4 className="site-footer-navigation__title">Follow Us</h4>
            <Nav className="site-footer-navigation__nav">
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/twitter"
              >
                Twitter
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/facebook"
              >
                Facebook
              </NavLink>
              <NavLink
                className="site-footer-navigation__nav__link"
                href="/instagram"
              >
                Instagram
              </NavLink>
            </Nav>
          </div>
        </div>
      </Container>
    </div>
  );
};
