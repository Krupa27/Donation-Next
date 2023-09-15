import { useState } from "react";
import Button from "./Button";

const ContactForm = ({
  type,
  formData,
  onChange,
  submitting,
  handleSubmit,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-[780px] mr-10"
        id="contact"
      >
        <div className="first-row flex gap-6 phone:gap-4 medium:flex-col">
          <div className="flex-1">
            <label htmlFor="">First Name</label>
            <input
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              type="text"
              name="firstName"
              pattern="^[A-Za-z0-9]{3,16}$"
              required
              value={formData.firstName}
              placeholder="First name"
            />
            <span>First name should be at least 3 characters</span>
          </div>
          <div className="flex-1">
            <label htmlFor="">Last Name</label>
            <input
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              type="text"
              name="lastName"
              pattern="^[A-Za-z0-9]{3,16}$"
              required
              value={formData.lastName}
              placeholder="Last name"
            />
            <span>Last name should be at least 3 characters</span>
          </div>
        </div>
        <div className="second-row flex gap-6 mt-5  medium:flex-col phone:gap-4 phone:mt-3">
          <div className="flex-1">
            <label htmlFor="">Email</label>
            <input
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="Your email"
            />
            <span>It should be a valid email address </span>
          </div>
          <div className="flex-1">
            <label htmlFor="">Phone Number</label>
            <input
              onChange={onChange}
              onBlur={handleFocus}
              focused={focused.toString()}
              type="text"
              name="phoneNumber"
              pattern="^\+?\d{11,13}$"
              required
              value={formData.phoneNumber}
              placeholder="0812..."
            />
            <span>Please input your phone number correctly</span>
          </div>
        </div>
        <div className="text-area my-5 ">
          <label htmlFor="message">Message</label>
          <textarea
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            name="message"
            required
            value={formData.message}
            minLength={16}
            rows="8"
            placeholder="Type your message here . . ."
          ></textarea>
        </div>
        <Button type="submit" primary>
          {submitting ? `${type}... ` : type}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
