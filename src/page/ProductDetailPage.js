import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const { id } = useParams()
    console.log("params : ", id)

    return (
        <div>
            <h1>Show Product Details</h1>
            <h2>{id}</h2>
        </div>
    )
}

export default ProductDetailPage