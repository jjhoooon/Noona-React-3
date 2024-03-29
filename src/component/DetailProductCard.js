import { useState } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const DetailProductCard = ({ detailProduct }) => {

    const navigate = useNavigate()

    let priceTitle = (detailProduct?.price) / 1000 + "," + "000"
    const [itemSize, setItemSize] = useState()
    const [showCartItem, setShowCartItem] = useState(false)

    const selectItemSize = (size) => {
        setItemSize(size)

    }

    const addToCart = () => {
        if (!itemSize) {
            alert('사이즈를 선택해주세요.')
        } else {
            setShowCartItem(true)
        }
    }

    const buyItem = () => {
        if (!showCartItem) {
            alert('장바구니를 담아주세요.')
        } else {
            alert('구매 완료하였습니다.')
            navigate('/')
        }
    }

    return (
        <div className='detail-main-container'>
            <div className='detail-left-container'>
                <img width='760px' height='900px' src={detailProduct?.img} />
            </div>
            <div className='detail-right-container'>
                <div>{detailProduct?.title}</div>
                <div>{priceTitle}원</div>
                <div>사이즈</div>
                <div className='size-button-box'>
                    {detailProduct?.size.map((size) => (
                        <button className='size-button' onClick={() => selectItemSize(size)}>
                            {size}
                        </button>
                    ))}
                </div>
                <button onClick={() => addToCart()}>장바구니 담기</button>
                {showCartItem && <CartItem itemSize={itemSize} title={detailProduct?.title} price={detailProduct?.price} />}
                <button onClick={() => buyItem()}>구매하기</button>
            </div>
        </div>
    )
}

export default DetailProductCard