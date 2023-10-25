import { Container } from "../grid/container";
import { Hero } from "../../content/hero";
import { FeaturedPosts } from "../../content/featured-posts";
import { InquiryForm } from "../../content/inquiry-form";

export const SiteMain = () => {
  return (
    <main id="site-main" className="site-main">
      <Container>
        <Hero />
        <FeaturedPosts />
        <InquiryForm />
      </Container>
    </main>
  );
};
