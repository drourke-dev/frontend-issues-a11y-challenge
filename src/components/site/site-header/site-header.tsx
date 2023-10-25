import { Container } from "../grid/container";
import { Link } from "../../core/link";
import { SiteLogo } from "../site-logo";
import { Button } from "../../core/button";
import { SiteNavbar } from "../site-navbar";

export const SiteHeader = () => {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__topbar">
          <Link href="/subscribe" className="site-header__topbar__link">
            Subscribe
          </Link>
          <SiteLogo className="site-header__topbar__site-logo" href="#">
            homez
          </SiteLogo>
          <div className="site-header__topbar__cta">
            <a className="c-link--secondary mx-16" href="/search">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>
            <Button role="buttons">Add Property</Button>
          </div>
        </div>
        <SiteNavbar className="site-header__bottombar" />
      </Container>
    </header>
  );
};
