import { Link } from "react-router-dom";
import ProjectsPreview from "./Projects-Preview";

const PortfolioPreview = () => {
	function resetLocation() {
		window.scrollTo(0, 0);
	  }
	return (
		<article className="portfolio">
		<section className="portfolio-text">
		  <h2 className="title-font blue-text h2-tag">My Portfolio</h2>
		  <p className="white-text p-tag">
			I have spent a lot of time on different projects. I love doing
			everything from scratch. Here are some of my favorite ones which sum
			up my knowledge. I have done many small projects from different
			courses and challenges to learn more things to improve my knowledge. You can check them on my{" "}
			<span>
			  <a
				href="https://github.com/berkbeleli?tab=repositories"
				className="blue-text github-link"
				target="_blank"
				rel="noreferrer"
			  >
				Github
			  </a>
			</span>
		  </p>
		</section>
		<ProjectsPreview />
      <section>
        <Link
          onClick={resetLocation}
          className="more-projects-btn blue-text"
          to="/portfolio"
        >
          More projects
        </Link>
      </section>
	  </article>
	);
}

export default PortfolioPreview