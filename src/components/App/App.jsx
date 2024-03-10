import "./app.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Advertising from "../Advertising/Advertising";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Advertising />
			</main>
		</>
	)
}

export default App;