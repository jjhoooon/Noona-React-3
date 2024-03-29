import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
    const navigate = useNavigate()

    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }

    let priceTitle = (item?.price) / 1000 + "," + "000"

    return (
        <div className='card-box' onClick={showDetail}>
            <img width='300px' height='400px' src={item?.img} />
            <div>{item?.choice == true ? "concious item" : null}</div>
            <div>{item?.title}</div>
            <div>{priceTitle}원</div>
            <div>{item?.new == true ? "신제품" : ""}</div>
        </div>
    )
}

export default ProductCard