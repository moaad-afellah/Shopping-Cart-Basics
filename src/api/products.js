import productsData from "../server/db.json"

export const fetchProducts = () => {

    console.log('Fetching Products from the server ...')
    return new Promise((resolve) => {

        setTimeout(() => { resolve(productsData) }, 100)
    })
}