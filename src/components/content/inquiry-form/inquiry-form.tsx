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
          <Select className="c-inquiry-form__form-control" label="Inquiry Type">
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
            <a href="/">March 2023</a>
          </li>
          <li>
            <a href="/">February 2023</a>
          </li>
          <li>
            <a href="/">January 2023</a>
          </li>
          <li>
            <a href="/">December 2022</a>
          </li>
          <li>
            <a href="/">November 2022</a>
          </li>
          <li>
            <a href="/">October 2022</a>
          </li>
          <li>
            <a href="/">September 2022</a>
          </li>
          <li>
            <a href="/">August 2022</a>
          </li>
          <li>
            <a href="/">July 2022</a>
          </li>
          <li>
            <a href="/">June 2022</a>
          </li>
          <li>
            <a href="/">May 2022</a>
          </li>
          <li>
            <a href="/">April 2022</a>
          </li>
        </div>
      </div>
    </section>
  );
};
