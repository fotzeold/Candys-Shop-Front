import "./footer.scss"
import Contacts from "../Contacts/Contacts"
import { footerLogo } from "../../services/images"
import { Link } from "react-router-dom";

const Footer = () => {

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<footer>
			<div className="container">
				<Link
					to="/"
					className="footer__logo"
					onClick={scrollToTop}
				><img src={footerLogo} alt="footerLogo" /></Link>

				<div className="footer__contacts">
					<Contacts />
				</div>
			</div>
		</footer>
	)
}

export default Footer