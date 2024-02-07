import { PropTypes } from "prop-types"
import Cart_Item from "../Cart_Item/Cart_Item"


export function Cart_List({ cart }) {
  return (
    <>
      {
      cart.map(item =>{
        return <Cart_Item key={item.id} item={item}/>
      })
      }
    </>
  )
}


Cart_List.propTypes = {
    cart : PropTypes.array,
}

       