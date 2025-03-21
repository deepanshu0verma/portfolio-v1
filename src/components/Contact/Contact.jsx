import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  const contactMethods = [
    {
      href: `mailto:${process.env.REACT_APP_EMAIL}`,
      icon: emailIcon,
      alt: "Email",
      text: "Start a Conversation",
    },
    {
      href: `tel:${process.env.REACT_APP_PHONE}`,
      icon: phoneIcon,
      alt: "Phone No",
      text: "Reach Out Now",
    },
  ];

  const handleClick = (href) => {
    window.location.href = href;
  };

  return (
    <Container id="contact">
      <header>
        <h2>Let’s Connect!</h2>
        <p>Excited to kick off your next big project?</p>
        <p>Reach out today for a free, no-pressure consultation!</p>
      </header>

      <div className="contacts">
        {contactMethods.map((method, index) => (
          <button
            key={index}
            className="contact-item"
            onClick={() => handleClick(method.href)}
          >
            <img src={method.icon} alt={method.alt} />
            <span>{method.text}</span>
          </button>
        ))}
      </div>

      <Form />
    </Container>
  );
}
