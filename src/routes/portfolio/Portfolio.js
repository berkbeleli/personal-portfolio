import Footer from "../../components/footer/Footer";
import ScrollButton from "../../components/ScrollButton";
import PortfolioDescription from "./PortfolioDescription";
import Projects from "./Projects";

const Portfolio = () => {
	document.title = "Portfolio | Berk Beleli";
	return (
	  <article className="portfolio-main">
		<PortfolioDescription />
		<Projects />
		<ScrollButton />
		<Footer />
	  </article>
	);
  };
  
  export default Portfolio;