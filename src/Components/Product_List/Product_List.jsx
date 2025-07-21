import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAllFetchProducts,fetchProducts } from "../../RTK/Slices/ProductSlice"
import { Col } from "react-bootstrap"
import { Product_Card } from "../../Components/Product_Card/Product_Card"


export  function Product_List() {
    const dispatch =  useDispatch()
    const  { products } = useSelector(state => state)
   useEffect(() => {
      
       fetchProducts().then( (data) => {
         dispatch(addAllFetchProducts(data.products))
       });
   
     }, [])
      
  return (
    <>
      {
              products.map((product) => {
                return <Col lg={4} md={6} key={product.id}>
                  <Product_Card product={product} />
                </Col>
              })
            }
    </>
  )
}
