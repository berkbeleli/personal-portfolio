import Footer from "../../components/footer/Footer";
import ScrollButton from "../../components/ScrollButton";
import AboutPreview from "./About-Preview";
import ContactPreview from "./Contact-Preview";
import HeadPreview from "./Head-Preview";
import PortfolioPreview from "./Portfolio-Preview.js";


const HomePage = () => {
	document.title = "Berk Beleli | Personal Portfolio";
	
	return (
		<document className="main-page">
			<HeadPreview />
			<AboutPreview />
			<PortfolioPreview />
			<ContactPreview />
			<ScrollButton />
			<Footer />
		</document>
	)
}

export default HomePage