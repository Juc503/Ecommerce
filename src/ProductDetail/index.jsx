import { useStoreContext } from '../context/StoreContext'
import ProductView from './ProductView'
import { useParams } from 'react-router-dom'
import useSWR from '../hooks/useSWR'
import { API_URL } from '../config/CONST'

function ProductDetail () {
  const { addProduct } = useStoreContext()

  const { id } = useParams()
  //console.log(id)

  const { data } = useSWR({ url: `${API_URL}/products/${id}` })
  return <ProductView data={data} addProduct={addProduct} />
}

export default ProductDetail


// import { useParams,useLocation } from "react-router-dom"
// import { useGlobalContext } from "../context/GlobalContext"
// import useSWR from "../hooks/useSWR"
// import ProductView from "./ProductView"
// import { useEffect } from "react"

// function ProductDetail (){
// const {state,dispatch} = useGlobalContext()

// useEffect(() => {
//     console.log({state})
// },[state])

// const addToCart = (product) => {
//     dispatch({
//         type: 'ADD_PRODUCT',
//         payload: product
//     })
// }

// const removeFromCart = (product) => {

//     dispatch({
//         type: 'REMOVE_PRODUCT',
//         payload: product
//     })
// }

// const location = useLocation()
// const params = useParams()

// console.log(location,params)

// const {data: productData} = useSWR({url:`https://fakestoreapi.com/products/${params.id}`})


//     return <ProductView data = {productData} addToCart = {addToCart} removeProduct={removeFromCart} />
// }

// export default ProductDetail