import Footer from "../../components/footer/Footer";
import ScrollButton from "../../components/ScrollButton";

const Portfolio = () => {
	document.title = "Portfolio | Catherine Mitagvaria";
	return (
	  <article className="portfolio-main">
		<ScrollButton />
		<Footer />
	  </article>
	);
  };
  
  export default Portfolio;