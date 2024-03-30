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
        let url = `https://my-json-server.typicode.com/jjhoooon/Noona-React-3/products?q=${searchQuery}`
        // let url = `http://localhost:5001/products?q=${searchQuery}`
        // npx json-server db.json --port 5001
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
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