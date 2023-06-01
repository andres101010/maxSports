import { Navigate, Outlet } from "react-router-dom";



export const ProtectedRoute = ({
    allowed,
    redirectTo = '/',
    children
}) => {
    if (!allowed) {
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet />
}