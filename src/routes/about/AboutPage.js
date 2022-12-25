import { Footer } from "../../components/index.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";

const About = () => {
  document.title = "About | Catherine Mitagvaria";
  return (
    <article className="about-main">
      <AboutMe />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
