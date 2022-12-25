import Linkedin from "../../assets/images/socials/linkedin.svg";
import Github from "../../assets/images/socials/github.svg";
import Codepen from "../../assets/images/socials/codepen.svg";
const NavigationSocials = () => {
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

export default NavigationSocials;
