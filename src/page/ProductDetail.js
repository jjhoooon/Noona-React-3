import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import DetailProductCard from "../component/DetailProductCard"
import { useSelector } from "react-redux"
import { productAction } from "../redux/actions/productAction"

const ProductDetail = () => {

    const detailProduct = useSelector((state) => state.product.selectedItem)
    let { id } = useParams()
    const getProductDetail = async () => {
        dispatchEvent(productAction.getProductDetail(id))
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <div className="detail-product-area">
            <DetailProductCard detailProduct={detailProduct} />
        </div>
    )
}

export default ProductDetail