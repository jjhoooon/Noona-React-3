import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/jjhoooon/Noona-React-3/products?q=${searchQuery}`
        let response = await fetch(url)
        return await response.json()
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})

export const fetchDetailProducts = createAsyncThunk('product/fetchDetail', async (id, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/jjhoooon/Noona-React-3/products/${id}`
        let response = await fetch(url)
        return response.json()
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})


const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.productList = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchDetailProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchDetailProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.selectedItem = action.payload
            })
            .addCase(fetchDetailProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

console.log("pppp", productSlice)

export const productActions = productSlice.actions
export default productSlice.reducer


// function productReducer(state = initialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data }
//         case "GET_SINGLE_PRODUCT_SUCCESS":
//             return { ...state, selectedItem: payload.data }
//         default:
//             return { ...state }
//     }
// }

// export default productReducer;