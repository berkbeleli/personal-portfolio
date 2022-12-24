import Footer from "../../components/footer/Footer";
import ScrollButton from "../../components/ScrollButton";
import ContactPreview from "./Contact-Preview";
import HeadPreview from "./Head-Preview";
import PortfolioPreview from "./Portfolio-Preview";


const HomePage = () => {
	document.title = "Berk Beleli | Personal Portfolio";
	
	return (
		<document>
			<HeadPreview />
			<PortfolioPreview />
			<ContactPreview />
			<ScrollButton />
			<Footer />
		</document>
	)
}

export default HomePage