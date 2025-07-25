import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../RTK/Slices/CartSlice";
import Swal from 'sweetalert2';


export function Paiement() {

    const cart = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cartInfo, setCartInfo] = useState({ cardName: '', cardNumber: '', expiry: '', cvv: '' });
    const cardNameRef = useRef();
    const cardNumberRef = useRef();
    const expiryRef = useRef();
    const cvvRef = useRef();

    const handlePay = ((e) => {
        e.preventDefault();
        setCartInfo({
            ...cartInfo, cardName: cardNameRef.current.value,
            cardNumber: cardNameRef.current.value,
            expiry: expiryRef.current.value,
            cvv: cvvRef.current.value
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment successful",
            showConfirmButton: true,
        });
        dispatch(clearCart())
        navigate('/cart')
    })

    let totalPrice = cart.reduce((acc, current) => {
        return acc + current.price * current.qyt
    }, 0).toFixed(0)

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <h4 className="mb-4 text-center text-primary">Secure Payment</h4>
                            <div className="totalPrice">
                                <h6>totalPrice : {totalPrice} $</h6>
                            </div>
                            <hr />
                            <form>
                                <div className="mb-3">
                                    <label for="cardName" className="form-label">Cardholder Name</label>
                                    <input type="text" ref={cardNameRef} className="form-control" id="cardName" placeholder="John Doe" />
                                </div>
                                <div className="mb-3">
                                    <label for="cardNumber" className="form-label">Card Number</label>
                                    <input type="text" ref={cardNumberRef} className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="expiry" className="form-label">Expiry Date</label>
                                        <input type="text" ref={expiryRef} className="form-control" id="expiry" placeholder="MM/YY" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="cvv" className="form-label">CVV</label>
                                        <input type="text" ref={cvvRef} className="form-control" id="cvv" placeholder="123" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-110 mt-3 shadow-sm" onClick={handlePay}>Pay Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

