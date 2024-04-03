import { useEffect } from "react"
import { useParams } from "react-router-dom"
import DetailProductCard from "../component/DetailProductCard"
import { useSelector, useDispatch } from "react-redux"
import { fetchDetailProducts } from "../redux/reducers/productSlice"

const ProductDetail = () => {
    const detailProduct = useSelector((state) => state.product.selectedItem)
    let { id } = useParams()
    const dispatch = useDispatch()
    const getProductDetail = async () => {
        dispatch(fetchDetailProducts(id))
        console.log(detailProduct)
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