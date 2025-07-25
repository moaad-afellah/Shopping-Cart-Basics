import { PropTypes } from "prop-types"
import "./Cart_Item.css"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { modifyQuantityByAmount } from "../../RTK/Slices/CartSlice"
import { FaRegTrashCan } from "react-icons/fa6";





export default function Cart_Item({ item, removeItemHandler }) {
    const dispatch = useDispatch()
    return (
        <>
            <tr>
                <td className="text-center">
                    <img className="cart-page__item-image" src={item.thumbnail} alt={item.title} />
                </td>
                <td className="text-center py-5 fw-bold">
                    {item.title}
                </td>
                <td className="text-danger fw-bold text-center py-5">
                    {item.price}
                </td>
                <td className="text-center py-5 fw-bold">
                    {item.brand}
                </td>
                <td className="text-center py-5 fw-bold">
                    {item.category}
                </td>
                <td className="text-center py-5 fw-bold">
                    <button className="taggleButton" onClick={() => dispatch(modifyQuantityByAmount({ item, quantity: 1 }))}>+</button>
                    {item.qyt}
                    <button className="taggleButton" onClick={() => dispatch(modifyQuantityByAmount({ item, quantity: -1 }))}>-</button>
                </td>
                <td className="text-center py-5 fw-bold">
                    {item.price * item.qyt}
                </td>
                <td className="text-center py-5 fw-bold">
                    <Button onClick={() => removeItemHandler(item.id)} variant="danger">
                        Delete
                        <FaRegTrashCan className="ms-2" />
                    </Button>
                </td>
            </tr >
        </>
    )
}



Cart_Item.propTypes = {
    item: PropTypes.object,
}