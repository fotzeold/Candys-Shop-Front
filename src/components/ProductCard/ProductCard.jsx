import "./product-card.scss"
import { BASE_URL } from "../../services/service.js"

const ProductCard = ({ product }) => {
	const { name, price, descr, img } = product

	return (
		<div className="product-card">
			<img src={BASE_URL + img.src} alt={img.alt} />
			<h3>{name}</h3>
			<p className="product-card__descr">{descr}</p>
			<p className="product-card__price">{price + " грн"}</p>
			<button className="product-card__buy chocolate-btn">Добавити в корзину</button>
		</div>
	)
}

export default ProductCard

