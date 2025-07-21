import { Route, Routes } from "react-router-dom"
import { Nav_Bar } from "./Layout/Nav_Bar"
import { Home, Products, Cart } from "./Pages/index"
import Single_Product from "./Pages/Single_Product/Single_Product"
import { Footer } from "./Layout/Footer"
import UndoOpirationButton from "./Components/UndoOpirationButton/UndoOpirationButton"

function App() {


  return (
    <>
      <Nav_Bar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='products/:id' element={<Single_Product />} />
      </Routes>
      <div style={{position:'fixed' ,bottom : '40px', right:'90px' }}><UndoOpirationButton></UndoOpirationButton></div>
      <Footer />
    </>
  )
}

export default App
