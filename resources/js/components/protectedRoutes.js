import {Outlet} from 'react-router-dom';
import Login from '../admin/user/Login'
const useAuth = ()=>{
     const user = {loggedIn:false}
     return user
     return user && user.loggedIn;
}
const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> :<Login/>
}
export default ProtectedRoutes
