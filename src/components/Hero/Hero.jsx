import "./hero.scss"
import { heroChocolate } from "../../services/images"

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="row">
					<div className="hero__content">
						<h1>Kanga Shop - найсмачніший вибір!</h1>
						<div className="hero__image-mobile">
							<img src={heroChocolate} alt="chocolate" />
						</div>
						<p>У нас можна придбати солодощі на вагу по доступним цінам </p>
						<button className="hero__show-more chocolate-btn">
							Дивитись асортимент
						</button>
					</div>

					<div className="hero__image">
						<img src={heroChocolate} alt="chocolate" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero