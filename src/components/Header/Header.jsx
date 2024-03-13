import "./header.scss";
import { logo } from "../../services/images";
import { useState } from "react";
import Contacts from "../Contacts/Contacts";
import { Link } from "react-router-dom";

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(false)
	const toggleMenu = () => { setActiveMenu((status) => !status) }
	const closeMenu = () => { setActiveMenu(false) }

	return (
		<header>
			<div className="container">
				<div className="row">
					<div
						onClick={toggleMenu}
						className={activeMenu ? "header__burger active" : "header__burger"}
					>
						<figure id="burger-1"></figure>
						<figure id="burger-2"></figure>
						<figure id="burger-3"></figure>
					</div>
					<div className="header__logo">
						<Link className="link" to="/" onClick={closeMenu}><img src={logo} alt="logotype" /></Link>
					</div>
					<div className="row">
						<nav className={activeMenu ? "header__nav active" : "header__nav"}>
							<p>Меню</p>
							<ul className="header__nav-page row">
								<li><Link className="link" to="/" onClick={closeMenu}>Головна</Link></li>
								<li><Link className="link" to="products" onClick={closeMenu}>Солодощі</Link></li>
							</ul>
							<div className="header__nav-contacts">
								<Contacts param={"menu"} />
							</div>
						</nav>
						<a className="header__basket"><figure>2</figure></a>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header