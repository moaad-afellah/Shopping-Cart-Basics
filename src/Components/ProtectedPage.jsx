import { useEffect } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { useSelector } from "react-redux";


// <ProtectedPage  prop1={} ....>  ........ </ProtectedPage>
export default function ProtectedPage({ children }) {
    const infoUser = useSelector((state) => state.LogIn.infoUser)
    debugger
    if (infoUser == null) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
}
