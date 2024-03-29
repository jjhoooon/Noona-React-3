import { useState, useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams()

    const getProducts = async () => {
        let searchQuery = query.get("q") || ""
        console.log("query : ", searchQuery)
        let url = `http://localhost:5000/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [query])

    return (
        <div>
            <Container fluid="lg">
                <Row>
                    {productList.map((menu) => (
                        <Col lg={4}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>

    )
}

export default ProductAll