import "./footer.scss"
import Contacts from "../Contacts/Contacts"
import { footerLogo } from "../../services/images"

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<a href="" className="footer__logo"><img src={footerLogo} alt="footerLogo" /></a>
				<div className="footer__contacts">
					<Contacts />
				</div>
			</div>
		</footer>
	)
}

export default Footer