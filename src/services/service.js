const BASE_URL = "http://localhost:5000"

async function getProducts() {
	try {
		let url = `${BASE_URL}/products`
		let res = await fetch(url)
		let data = await res.json()
		return data
	} catch (error) {
		return error
	}
}

export { getProducts, BASE_URL }

