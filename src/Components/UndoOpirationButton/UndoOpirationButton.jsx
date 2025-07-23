import {  modifyQuantityByAmount, removeFromCart, addToCart } from "../../RTK/Slices/CartSlice"
import { useDispatch, useSelector } from "react-redux"


function UndoOpirationButton() {
    const { products } = useSelector(state => state)
    const historyActions = useSelector(state => state.cart.historyActions)
    const dispatch = useDispatch()


    const handleClickUndoOperationCart = () => {
        if (historyActions[historyActions.length - 1].historyType == 'modifyQuantity') {
            let lastActionInCart = historyActions[historyActions.length - 1].action;
            let undoOfLastActionInCart = { item: lastActionInCart.payload.item, quantity: -1 * lastActionInCart.payload.quantity, undoOperation: true }
            dispatch(modifyQuantityByAmount(undoOfLastActionInCart))
        } else if (historyActions[historyActions.length - 1].historyType == 'addToCart') {
            dispatch(removeFromCart({ id: historyActions[historyActions.length - 1].action.id, undoOperation: true }))
        } else if (historyActions[historyActions.length - 1].historyType == 'removeFromCart') {
            const product = products.filter((item) => item.id == historyActions[historyActions.length - 1].id)
            dispatch(addToCart({ product: product[0], undoOperation: true }))
        }
    }
    return (
        <div>
            <button onClick={handleClickUndoOperationCart}> Undo Operation</button>
        </div>
    )
}

export default UndoOpirationButton;