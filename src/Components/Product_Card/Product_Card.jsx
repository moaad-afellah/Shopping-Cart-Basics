import { Card } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./Product_Card.css"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"
import { useDispatch, useSelector} from "react-redux";
import { addToCart } from "../../RTK/Slices/CartSlice";


export function Product_Card( { product } ) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const myCart = useSelector(state => state.cart.products)

  const addToCartHandler = () =>{
   if(myCart.find((item) => item.id == product.id)){
    alert('THIS PRODUCT IS ALREADY ADDED')
 
  }else{
    dispatch(addToCart({product}))
    navigate("/cart")
  }
  }
  return (
    <Card className="product-card mb-3 bg-body-secondary">
        <p className="fw-bold text-center py-2 m-0 text-primary">{product.brand}</p>
      <Card.Img className="product-card__image rounded-0" variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>Title: {product.title}</Card.Title>
        <Card.Text>
          <h6 className="fw-bold">Price: <span className=" text-danger">{product.price}$</span></h6>
        </Card.Text>
        <Link className="btn btn-primary me-1" to={`/products/${product.id}`}>Show product</Link>
        <Button onClick={addToCartHandler} className="btn btn-success">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}


Product_Card.propTypes = {
    product : PropTypes.object,
}