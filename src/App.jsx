import { Route, Routes } from "react-router-dom"
import { Nav_Bar } from "./Layout/Nav_Bar"
import { Home, Products, Cart, LogInPage } from "./Pages/index"
import Single_Product from "./Pages/Single_Product/Single_Product"
import { Footer } from "./Layout/Footer"
import UndoOpirationButton from "./Components/UndoOpirationButton/UndoOpirationButton"

import ProtectedPage from "../src/Components/ProtectedPage"

function App() {


  return (
    <>
      <Nav_Bar />
      <Routes>
        <Route path='/login' element={<LogInPage />} />
        <Route path='/' element={<ProtectedPage><Home /></ProtectedPage>} />
        <Route path='/products' element={<ProtectedPage><Products /></ProtectedPage>} />
        <Route path='/cart' element={<ProtectedPage><Cart /></ProtectedPage> } />
        <Route path='products/:id' element={<ProtectedPage><Single_Product /></ProtectedPage>} />
      </Routes>
      <div style={{ position: 'fixed', bottom: '40px', right: '90px' }}>
        <UndoOpirationButton>
        </UndoOpirationButton></div>
      <Footer />
    </>
  )
}

export default App
