import "./products.scss";
import ProductCard from "../ProductCard/ProductCard"

import { getProducts } from "../../services/service";
import { useEffect, useState } from "react";

const Products = () => {
	const [products, setProducts] = useState()

	useEffect(() => {
		getProducts()
			.then((data) => {
				if (data && data[0].name) {
					setProducts(data)
				}
			})
			.catch(error => console.log(error))
	}, [products])

	return (
		<section className="products">
			<div className="container">
				<h2>Весь асортимент</h2>
				<div className="products__cards">
					<div className="row">
						{
							Array.isArray(products) && products.length > 0 ?
								products.map(product => <ProductCard key={product._id} product={product} />) : ""
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Products