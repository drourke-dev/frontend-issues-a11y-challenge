import { Heading } from "../../core/heading";

export const Hero = () => {
  return (
    <div className="c-hero">
      <div>
        <Heading className="c-heading--1">
          The best way to find your dream home
        </Heading>
        <p className="c-paragraph--lead">
          We have more than 745,000 apartments, let us find a home that is
          perfect for you.​ We are here to help you transform your dream into
          reality.
        </p>
        <p className="c-paragraph--lead mb-0">
          <a href="/the-best-way-to-find-your-dream-home">
            Continue reading...
          </a>
        </p>
      </div>
    </div>
  );
};
