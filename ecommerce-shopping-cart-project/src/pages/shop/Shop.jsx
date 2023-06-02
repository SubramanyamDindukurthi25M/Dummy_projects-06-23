import axios from "axios"
import { useQuery } from "react-query"
import { Product } from "./Product"

export const Shop = () => {
    const baseUrl = 'https://fakestoreapi.com/products'

    const {
        isLoading,
        error,
        data
    } = useQuery('products', () => axios(baseUrl))
    if(error) return <h1>{error.message}</h1>
    if(isLoading) return <h1>Loading....</h1>

    return (
        <div className="container">
            <>
                <h1 className="text-center my-2 text-yellow-300">
                    Avika E-Commerce project
                </h1>
                {
                    data.data.map((product) => {
                        const{id} = product
                        return (
                            <Product 
                                pro={product}
                                key={id}
                            />
                        )
                    })
                }
            </>
        </div>
    )
}