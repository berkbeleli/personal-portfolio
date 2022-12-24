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
			
		</document>
	)
}

export default HomePage