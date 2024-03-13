import "./app.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Advertising from "../Advertising/Advertising";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

import { getProducts } from "../../services/service.js";
import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

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
				<Routes>
					<Route path="/" element={<><Hero /><Advertising products={products} /></>} />
					<Route path="/products" element={<Products products={products} />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App;