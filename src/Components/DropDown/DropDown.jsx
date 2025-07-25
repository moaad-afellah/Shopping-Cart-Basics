import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitLogOut, logOutSuccess } from '../../RTK/Slices/LogInSlice'
import { logInApi } from '../../api/login'
import { useSelector } from 'react-redux';
import './DropDown.css';

function DropDown() {
    const infoUser = useSelector((state) => state.LogIn.infoUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            {infoUser != null && <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle"></i>
                    ☰ Account
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow custom-dropdown-menu">
                    <h6 className="dropdown-header text-center text-uppercase text-primary fw-bold">Welcome </h6>

                    <Dropdown.Item onClick={() => navigate('/')}>
                        <i className="bi bi-house-door me-2"></i>
                        🏠 Go Home
                    </Dropdown.Item>

                    <Dropdown.Item onClick={() => navigate('/cart')}>
                        <i className="bi bi-cart4 me-2"></i>
                        🛒 Go to Cart
                    </Dropdown.Item>

                    <Dropdown.Item onClick={() => navigate('/products')}>
                        <i className="bi bi-box-seam me-2"></i>
                        🛍️ Go to Products
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item className="text-danger" onClick={() => {
                        dispatch(submitLogOut())
                        logInApi().then((response) => {
                            if (response.status == "OK") {
                                dispatch(logOutSuccess())
                                localStorage.removeItem('login-info');
                                navigate('/login');
                            }

                        })
                        localStorage.removeItem('login-info');
                        navigate('/login');
                    }}>
                        <i className="bi bi-box-arrow-right me-2"></i>
                        🚪Log out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>}
        </>
    )
}

export default DropDown;