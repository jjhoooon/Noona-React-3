import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const getProducts = async () => {
        let url = `http://localhost:5001/products`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
        // console.log(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <ProductCard />
        </div>

    )
}

export default ProductAll