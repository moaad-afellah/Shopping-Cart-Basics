import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaCartShopping, FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import DropDown from "../Components/DropDown/DropDown";

export function Nav_Bar() {
  const cart = useSelector(state => state.cart.products)
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
    <Container>
        <NavLink className="navbar-brand" to="/">
            <FaCartShopping className="me-2"/>
            Shopping-Cart-Basics
        </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/products">Products</NavLink>
              <NavLink className="nav-link" to="/cart">
                  Cart
                  <span className="text-danger mx-1">
                  {cart.length}
                  </span>
                  <FaCartArrowDown/>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <DropDown/>
    </Container>
  </Navbar>
  )
}