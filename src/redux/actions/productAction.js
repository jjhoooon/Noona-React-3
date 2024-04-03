import { productActions } from "../reducers/productSlice"

// function getProducts(searchQuery) {
//     return async (dispatch, getState) => {
//         // let url = `https://my-json-server.typicode.com/jjhoooon/Noona-React-3/products?q=${searchQuery}`
//         let url = `http://localhost:5001/products?q=${searchQuery}`
//         // npx json-server db.json --port 5001
//         let response = await fetch(url)
//         let data = await response.json()
//         // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
//         dispatch(productActions.getAllProducts({ data }))
//     }
// }

function getProductDetail(id) {
    return async (dispatch, getState) => {
        // let url = `https://my-json-server.typicode.com/jjhoooon/Noona-React-3/products/${id}`
        let url = `http://localhost:5001/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } })
    }
}

export const productAction = { getProductDetail }