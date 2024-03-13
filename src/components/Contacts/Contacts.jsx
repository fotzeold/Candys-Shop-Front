import "./contacts.scss"
import { phoneCallMenu, facebookMenu, viberMenu, viber, facebook, phoneCall } from "../../services/images.js"

const Contacts = ({ param }) => {
	return (
		<ul>
			<li><a href=""><img src={param === "menu" ? viberMenu : viber} alt="viber" /> <span>Viber</span> </a></li>
			<li><a href=""><img src={param === "menu" ? facebookMenu : facebook} alt="facebook" /><span>Facebook</span> </a></li>
			<li><a href=""><img src={param === "menu" ? phoneCallMenu : phoneCall} alt="phoneCall" /><span>0983488818</span> </a></li>
			<li><a href=""><img src={param === "menu" ? phoneCallMenu : phoneCall} alt="phoneCall" /><span>0934638024</span> </a></li>
		</ul>
	)
}

export default Contacts

