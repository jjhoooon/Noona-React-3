import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Productpage = () => {
    let [query, setQuery] = useSearchParams()
    console.log("query : ", query.get("q"))

    return (
        <div>
            <h1>Productpage</h1>
        </div>
    )
}

export default Productpage