import { useEffect, useState } from "react"

const CartItem = ({ itemSize, title, price }) => {

    const [itemNumber, setItemNumber] = useState(1)
    const [itemPrice, setItemPrice] = useState(price)


    const addItemNumber = () => {
        setItemNumber(itemNumber + 1)
    }

    const subItemNumber = () => {
        if (itemNumber > 1) {
            setItemNumber(itemNumber - 1);
        }
    }

    useEffect(() => {
        setItemPrice(price * itemNumber)
    }, [itemNumber, price])

    return (
        <div className='cart-item-box'>
            <div className='item-size-name-info'>
                {title} / {itemSize}
                <div className='item-number-info'>
                    <button onClick={() => subItemNumber()}>-</button>
                    <div>{itemNumber}</div>
                    <button onClick={() => addItemNumber()}>+</button>
                </div>
                <div>{itemPrice}</div>
            </div>
        </div>
    )
}

export default CartItem