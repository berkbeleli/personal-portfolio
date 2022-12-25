import SendEmail from "../../components/SendEmail";
import { Footer } from "../../components";

const Contact = () => {
  document.title = "Contact | Berk Beleli";
  return (
    <article className="contact-main">
      <h2 className="title-font blue-text h2-tag">Contact Me</h2>
      <br></br>
      <p className="white-text p-tag">
        If you are interested to hire me I am always open to new opportunities
        and interesting projects! Feel free to contact me if you have any other
        requests or questions regarding web project development.
      </p>
      <SendEmail />
      <Footer />
    </article>
  );
};

export default Contact;
