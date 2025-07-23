import { useEffect } from "react"
import { useNavigate, Navigate } from "react-router-dom"


// <ProtectedPage  prop1={} ....>  ........ </ProtectedPage>
export default function ProtectedPage({ children }) {
    const isLoggedIn = localStorage.getItem("login-info") !== null;

    if (!isLoggedIn) {
        return <Navigate to="/login"  />;
    }

    return <>{children}</>;
}
