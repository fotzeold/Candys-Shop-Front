import "./app.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Advertising from "../Advertising/Advertising";

import { getProducts } from "../../services/service.js";
import { useState, useEffect } from "react";

const App = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts()
			.then(data => setProducts(data))
			.catch(error => console.log(error))
	}, [products])

	return (
		<>
			<Header />
			<main>
				<Hero />
				<Advertising products={products} />
			</main>
		</>
	)
}

export default App;