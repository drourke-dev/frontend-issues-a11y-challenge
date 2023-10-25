import { Input } from "../../core/input";
import { Button } from "../../core/button";
import { Select } from "../../core/select";
import { Heading } from "../../core/heading";

export const InquiryForm = () => {
  return (
    <section className="c-inquiry-form">
      <div className="c-inquiry-form__form">
        <Heading as="h2" className="c-heading--2">
          Inquiry Form
        </Heading>
        <form>
          <Select
            id="Inquiry Type"
            className="c-inquiry-form__form-control"
            label="Inquiry Type"
          >
            <option>—Please choose an option—</option>
            <option>Apartments</option>
            <option>Houses</option>
            <option>Villa</option>
          </Select>
          <Input
            className="c-inquiry-form__form-control"
            id="yourName"
            label="Your Name"
            type="text"
            placeholder="Your Name"
          />
          <Input
            className="c-inquiry-form__form-control"
            id="emailAddress"
            label="Email address"
            type="email"
            placeholder="example@gmail.com"
          />
          <Select
            id="Personnel role"
            className="c-inquiry-form__form-control"
            label="Personnel role"
          >
            <option>—Please choose an option—</option>
            <option>Manager</option>
            <option>Staff</option>
          </Select>
          <Input
            className="c-inquiry-form__form-control"
            id="maxPrice"
            label="Max Price"
            type="number"
            placeholder="€90"
          />
          <Input
            className="c-inquiry-form__form-control"
            id="minSize"
            label="Min Size (Square metre)"
            type="number"
            placeholder="20"
          />
          <Button type="submit" className="w-100">
            Submit
          </Button>
        </form>
      </div>
      <div className="c-inquiry-form__img">
        <Heading as="h2" className="c-heading--2">
          Archives
        </Heading>
        <div className="c-list c-list--unstyled mb-0">
          <li>
            <a href="/march-2023">March 2023</a>
          </li>
          <li>
            <a href="/february-2023">February 2023</a>
          </li>
          <li>
            <a href="/january-2023">January 2023</a>
          </li>
          <li>
            <a href="/december-2022">December 2022</a>
          </li>
          <li>
            <a href="/novemeber-2022">November 2022</a>
          </li>
          <li>
            <a href="/october-2022">October 2022</a>
          </li>
          <li>
            <a href="/september-2022">September 2022</a>
          </li>
          <li>
            <a href="/august-2022">August 2022</a>
          </li>
          <li>
            <a href="/july-2022">July 2022</a>
          </li>
          <li>
            <a href="/june-2022">June 2022</a>
          </li>
          <li>
            <a href="/may-2022">May 2022</a>
          </li>
          <li>
            <a href="/april-2022">April 2022</a>
          </li>
        </div>
      </div>
    </section>
  );
};
