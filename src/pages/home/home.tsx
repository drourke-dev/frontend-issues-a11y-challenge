import { SiteHeader } from "../../components/site/site-header";
import { SiteMain } from "../../components/site/site-main";
import { SiteFooter } from "../../components/site/site-footer";
import { Link } from "../../components/core/link";

export const HomePage = () => {
  return (
    <>
      <Link id="skip" href="#site-main" className="c-nav-link__skip">
        Skip navigation
      </Link>
      <SiteHeader />
      <SiteMain />
      <SiteFooter />
    </>
  );
};
