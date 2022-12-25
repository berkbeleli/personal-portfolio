import { Footer } from "../../components/index.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";
import Stack from "./Stack.js";
import DownloadResume from "./DownloadResume.js";
import WorkExperience from "./WorkExperience.js";
import Education from "./Education.js";
import Languages from "./Languages.js";
import Certifications from "./Certifications.js";

const About = () => {
  document.title = "About | Berk Beleli";
  return (
    <article className="about-main">
         <AboutMe />
       <Stack />
      <DownloadResume />
      <WorkExperience />
      <Education />
      <Languages />
      <Certifications />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
