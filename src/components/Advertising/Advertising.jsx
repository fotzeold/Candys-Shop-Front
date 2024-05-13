import "./advertising.scss"
import ProductCard from "../ProductCard/ProductCard"
import { useEffect, useState } from "react"
import { getPopularProducts } from "../../services/service.js";

const Advertising = () => {
	const [popularProducts, setPopularProducts] = useState([])

	useEffect(() => {
		getPopularProducts()
			.then(data => {
				if (data && data[0].name) {
					setPopularProducts(data)
				}
			})
			.catch(error => console.log(error))
	}, [popularProducts])

	return (
		<section className="advertising">
			<div className="container">
				<h2>Вибір більшості</h2>
				<div className="advertising__cards">
					<div className="row">
						{
							Array.isArray(popularProducts) && popularProducts.length > 0 ?
								popularProducts.map(product => <ProductCard key={product._id} product={product} />) : ""
						}
					</div>
				</div>
				<a href="">Більше солодкого</a>
			</div>
		</section>
	)
}

export default Advertising

