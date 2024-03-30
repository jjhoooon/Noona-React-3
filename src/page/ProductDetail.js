import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import DetailProductCard from "../component/DetailProductCard"

const ProductDetail = () => {

    const [detailProduct, setDetailProduct] = useState()
    let { id } = useParams()

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/jjhoooon/Noona-React-3/products/${id}`
        // let url = `http://localhost:5001/products/${id}`
        console.log(url)
        let response = await fetch(url)
        let data = await response.json()
        setDetailProduct(data)
        console.log(data)
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