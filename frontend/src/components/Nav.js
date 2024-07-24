import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
//import { useAuth0 } from '@auth0/auth0-react';

// const Nav = () => {
//     const { logout, isAuthenticated, user } = useAuth0();

//     return (
//         <div>
//             <ul className='nav-ul'>
//                 <li>
//                     <Link to="/"> <h3> Főoldal </h3> </Link>
//                 </li>
//                 <li>
//                     <Link to="/News"> <h3> Hírek </h3> </Link>
//                 </li>
//                 <li>
//                     <Link to="/Vote"> <h3> Szavazás </h3> </Link>
//                 </li>
//                 <li>
//                     <Link to="/Profile"> <h3> Profil </h3> </Link>
//                 </li>
//                 {isAuthenticated ? (
//                     <li className='login-bt'>
//                         <Link onClick={() => logout()} to="/">
//                             <h3> Kijelentkezés: 
//                                 <label className='userName'> {user ? user.name : 'N/A'} </label>
//                             </h3>
//                         </Link>
//                     </li>
//                 ) : (
//                     <div className='loginbtdiv'>
//                         <li className='login-bt'>
//                             <Link to="/login"> <h3> Bejelentkezés </h3> </Link>
//                         </li>
//                         <li className='register-bt'>
//                             <Link to="/signup"> <h3> Regisztráció </h3> </Link>
//                         </li>
//                     </div>
//                 )}
//             </ul>
//         </div>
//     );
// }

// export default Nav;

const Nav = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (
        <div>
            <ul className='nav-ul'>
                <li>
                    <Link to="/"> <h3> Főoldal </h3> </Link>
                </li>
                <li>
                    <Link to="/News"> <h3> Hírek </h3> </Link>
                </li>
                <li>
                    <Link to="/Vote"> <h3> Szavazás </h3> </Link>
                </li>
                <li>
                    <Link to="/Profile"> <h3> Profil </h3> </Link>
                </li>
                { user && (
                    <li className='login-bt'>
                        <Link onClick={handleClick} to="/">
                            <h3> Kijelentkezés: <label className='userName'> {user.email} </label> </h3>
                        </Link>
                    </li>
                )}
                { !user &&(
                    <div className='loginbtdiv'>
                        <li className='login-bt'>
                            <Link to="/login"> <h3> Bejelentkezés </h3> </Link>
                        </li>
                        <li className='register-bt'>
                            <Link to="/signup"> <h3> Regisztráció </h3> </Link>
                        </li>
                    </div>
                )}             
            </ul>
        </div>
    );
}

export default Nav;