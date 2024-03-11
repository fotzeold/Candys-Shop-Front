import "./advertising.scss"
import ProductCard from "../ProductCard/ProductCard"

const Advertising = ({ products }) => {

	return (
		<section className="advertising">
			<div className="container">
				<h2>Вибір більшості</h2>
				<div className="advertising__cards">
					<div className="row">
						{
							Array.isArray(products) && products.length > 0 ?
								products.map(product => <ProductCard key={product._id} product={product} />) : ""
						}
					</div>
				</div>
				<a href="">Більше солодкого</a>
			</div>
		</section>
	)
}

export default Advertising

