import { Button, Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Cart_List } from "../../Components/Cart_List/Cart_List"
import { clearCart } from "../../RTK/Slices/CartSlice"
import { VscClearAll } from "react-icons/vsc";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { removeFromCart } from "../../RTK/Slices/CartSlice"
import Swal from 'sweetalert2'
import "./Cart.css"



export function Cart() {
  
  const cart = useSelector(state => state.cart.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart.length)
    if (cart.length === 0) {
      navigate("/")
    }
  }, [cart.length])

  const removeItemHandler = (id) => {
    dispatch(removeFromCart({ id }))
    Swal.fire({
      position: "center",
      icon: "success",
      title: "The product has been deleted",
      showConfirmButton: true,
    });



  }

  const clearCartHandler = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully erased all data",
      showConfirmButton: false,
      timer: 1500
    });
    dispatch(clearCart())
  }

  if (cart.length == 0) {
    return <h1 className="alert alert-danger py-5 text-center">
      There are no products to display
    </h1>
  }



  let totalPrice = cart.reduce((acc, current) => {
    return acc + current.price * current.qyt
  }, 0).toFixed(0)


  return (
    <div className="cart-page py-5 overflow-x-auto">
      <Container>
        <div className="d-flex justify-content-between">
          <h3>Total Price: <span className="fw-bold text-danger">{totalPrice}$</span></h3>
          <Button onClick={clearCartHandler} variant="danger" className="mb-3">
            Clear All Cart
            <VscClearAll className="ms-2" fontSize={20} />
          </Button>
        </div>
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Brand</th>
              <th>category</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <Cart_List cart={cart} removeItemHandler={removeItemHandler} />
          </tbody>
        </Table>

        <div className="paiementButton">
          <button
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '25px',
              fontWeight: '600',
              transition: 'background-color 0.3s ease',
            }}
            onClick={()=> {
              navigate('/paiement');
            }}
          >
            Passer au paiement
          </button>
        </div>
      </Container>
    </div>
  )
}
