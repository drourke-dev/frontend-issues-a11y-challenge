/* eslint-disable jsx-a11y/alt-text */
import { Heading } from "../../core/heading";
import { Card } from "../card/";
import ImgHouse from "../../../assets/images/img-house.jpg";
import ImgApartment from "../../../assets/images/img-apartment.jpg";

export const FeaturedPosts = () => {
  return (
    <section className="c-featured-posts">
      <Heading as="h3" className="c-heading--2">
        Featured Posts
      </Heading>

      <div className="c-featured-posts__grid">
        <Card>
          <div className="c-card__text">
            <strong className="c-card__text__category">Houses</strong>
            <Heading as="h3" className="c-card__text__title c-heading--3">
              Buy a property
            </Heading>
            <span className="c-card__text__date">Nov 12</span>
            <p className="c-card__text__description">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </p>
            <a href="/find-a-home" className="c-card__text__link">
              Find a home
            </a>
          </div>
          <div className="c-card__img">
            <img src={ImgHouse} width="200" />
          </div>
        </Card>
        <Card>
          <div className="c-card__text">
            <strong className="c-card__text__category">Apartments</strong>
            <Heading as="h3" className="c-card__text__title c-heading--3">
              Sell a property
            </Heading>
            <span className="c-card__text__date">Nov 11</span>
            <p className="c-card__text__description">
              Nullam sollicitudin blandit eros eu pretium. Nullam maximus
              ultricies auctor.
            </p>
            <a href="/place-an-ad" className="c-card__text__link">
              Place an ad
            </a>
          </div>
          <div className="c-card__img">
            <img src={ImgApartment} width="200" />
          </div>
        </Card>
      </div>
    </section>
  );
};
