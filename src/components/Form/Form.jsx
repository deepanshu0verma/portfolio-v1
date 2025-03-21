import { Container, ContainerSucces } from "./styles";
import {  useState } from "react";
import validator from "validator";
import { submitToAirtable } from "../../api/api";


export function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const disposableDomains = [
    "yopmail.com",
    "tempmail.com",
    "mailinator.com",
    "10minutemail.com",
    "guerrillamail.com",
  ];

  function verifyEmail(email) {
    if (!validator.isEmail(email)) {
      setValidEmail(false);
      setEmailError("Please enter a valid email address");
      return;
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (disposableDomains.includes(domain)) {
      setValidEmail(false);
      setEmailError(
        "Please use a permanent email address (no temporary emails)"
      );
      return;
    }

    setValidEmail(true);
    setEmailError("");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validEmail || !message) return;

    setIsSubmitting(true);

    const formData = {
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const airtableSuccess = await submitToAirtable(formData);

    setIsSubmitting(false);

    if (airtableSuccess) {
      setIsSubmitted(true); // Update state based on the result
    }
  };

  if (isSubmitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to the top
        </button>
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message || emailError}
        >
          Submit
        </button>
      </form>
    </Container>
  );
}
