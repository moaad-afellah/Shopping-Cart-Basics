import LogIn_form from "../../Components/LogIn_form/LogIn_form";
import { useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitLogIn, logInSuccess } from '../../RTK/Slices/LogInSlice'
import { logInApi } from "../../api/login";
import { useSelector } from "react-redux";
import { Eclipse } from "react-loading-io";


export function LogInPage() {
    const { LogIn } = useSelector(state => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logInIfo, setLogInIfo] = useState({ email: '', password: '' });


    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();


    const handleLogIn = (e) => {
        e.preventDefault();

        const newInfo = {
            ...logInIfo, email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value,
        };

        setLogInIfo(newInfo);

        console.log(newInfo);

        if (newInfo.email !== '' && newInfo.password !== '') {
            dispatch(submitLogIn())
            logInApi(newInfo).then((response) => {
                if (response.status == "OK") {
                    dispatch(logInSuccess())
                    localStorage.setItem('login-info', JSON.stringify(newInfo))
                    navigate('/')

                }

            })
        }
    };

    return (
        <div>
            {LogIn.status == 'LOGIN_SUBMIT' ? <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60vh",
                }}
            >
                <Eclipse size={100} />
            </div>
                : <LogIn_form
                    logInIfo={logInIfo}
                    inputEmailRef={inputEmailRef}
                    inputPasswordRef={inputPasswordRef}
                    handleLogIn={handleLogIn}
                />
            }
        </div >
    );
}