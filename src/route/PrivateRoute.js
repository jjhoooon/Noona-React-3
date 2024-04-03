import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const authentication = useSelector((state) => state.auth.authentication)
    return authentication == true ? <ProductDetail /> : <Navigate to='/login' />
}

export default PrivateRoute