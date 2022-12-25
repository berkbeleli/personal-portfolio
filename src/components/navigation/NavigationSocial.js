import Linkedin from "../../assets/images/socials/linkedin.svg";
import Github from "../../assets/images/socials/github.svg";

const NavigationSocial = () => {
  return (
    <section className="social-media">
       <a
        href="https://www.linkedin.com/in/berkbeleli/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/berkbeleli"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
    </section>
  );
};

export default NavigationSocial;
