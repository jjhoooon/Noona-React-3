import { useState, useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductAll = () => {
    const productList = useSelector(state => state.productList)
    const [query, setQuery] = useSearchParams()
    const dispatch = useDispatch()
    const getProducts = () => {
        let searchQuery = query.get("q") || ""
        console.log("query : ", searchQuery)
        dispatch(productAction.getProducts(searchQuery))
    }

    useEffect(() => {
        getProducts()
    }, [query])

    return (
        <div className='product-all-area'>
            <Container fluid="lg">
                <Row>
                    {productList.map((menu) => (
                        <Col className='product-col' lg={4}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

    )
}

export default ProductAll