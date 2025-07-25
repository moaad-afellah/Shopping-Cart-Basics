import { Route, Routes } from "react-router-dom"
import { Nav_Bar } from "./Layout/Nav_Bar"
import { Home, Products, Cart, LogInPage, Paiement } from "./Pages/index"
import Single_Product from "./Pages/Single_Product/Single_Product"
import { Footer } from "./Layout/Footer"
import UndoOpirationButton from "./Components/UndoOpirationButton/UndoOpirationButton"
import ProtectedPage from "../src/Components/ProtectedPage"


function App() {


  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>

      <Nav_Bar />

      <div style={{ flexGrow: 1}}>
        <Routes >
          <Route path='/login' element={<LogInPage />} />
          <Route path='/' element={<ProtectedPage><Home /></ProtectedPage>} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<ProtectedPage><Cart /></ProtectedPage>} />
          <Route path='products/:id' element={<ProtectedPage><Single_Product /></ProtectedPage>} />
          <Route path='/paiement' element={<ProtectedPage><Paiement/></ProtectedPage>} />
        </Routes>
        </div>

      <div style={{ position: 'fixed', bottom: '40px', right: '90px' }}>
        <UndoOpirationButton>
        </UndoOpirationButton>
      </div>
      <Footer />
    </div>
  )
}

export default App
