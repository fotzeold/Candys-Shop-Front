import "./app.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Advertising from "../Advertising/Advertising";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

import { Routes, Route } from "react-router-dom";

const App = () => {

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<><Hero /><Advertising /></>} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App;