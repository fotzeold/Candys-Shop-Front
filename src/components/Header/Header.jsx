import "./header.scss";
import { logo, phoneCallMenu, facebookMenu, viberMenu } from "../../services/images";
import { useState } from "react";

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(false)
	const toggleMenu = () => { setActiveMenu((status) => !status) }

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
						<a><img src={logo} alt="logotype" /></a>
					</div>
					<div className="row">
						<nav className={activeMenu ? "header__nav active" : "header__nav"}>
							<p>Меню</p>
							<ul className="header__nav-page row">
								<li><a>Головна</a></li>
								<li><a>Солодощі</a></li>
							</ul>
							<div className="header__nav-contacts">
								<ul>
									<li><a href=""><img src={viberMenu} alt="" /> <span>Viber</span> </a></li>
									<li><a href=""><img src={facebookMenu} alt="" /><span>Facebook</span> </a></li>
									<li><a href=""><img src={phoneCallMenu} alt="" /><span>0983488818</span> </a></li>
									<li><a href=""><img src={phoneCallMenu} alt="" /><span>0934638024</span> </a></li>
								</ul>
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