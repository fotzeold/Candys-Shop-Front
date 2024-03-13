import "./contacts.scss"
import { phoneCallMenu, facebookMenu, viberMenu, viber, facebook, phoneCall } from "../../services/images.js"

const Contacts = ({ param }) => {
	return (
		<ul>
			<li>
				<a href="https://invite.viber.com/?g2=AQBtj7d%2FO603QlB%2FMAtHT5NKBs%2FnFlOLmIFrx9klDdWMKax9Bde1q9iyQjFfAA9e">
					<img src={param === "menu" ? viberMenu : viber} alt="viber" />
					<span>Viber</span>
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/k.a.n.g.a.shopping">
					<img src={param === "menu" ? facebookMenu : facebook} alt="facebook" />
					<span>Facebook</span>
				</a>
			</li>
			<li>
				<a href="tel:+380980275819">
					<img src={param === "menu" ? phoneCallMenu : phoneCall} alt="phoneCall" />
					<span>0980275819</span>
				</a>
			</li>
			<li>
				<a href="tel:+380687472087">
					<img src={param === "menu" ? phoneCallMenu : phoneCall} alt="phoneCall" />
					<span>0687472087</span>
				</a>
			</li>
		</ul>
	)
}

export default Contacts

