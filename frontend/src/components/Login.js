import { useState } from "react";
import '../App.css';
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        navigate('/')
    }

    return (
        <form className="login" onSubmit={handleSubmit}>

            <h1> Bejelentkezés </h1>

            <input className="inputBox" type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="inputBox" type="password" placeholder="Jelszó" 
                value={password} onChange={(e) => setPassword(e.target.value)} />

            <button disabled={isLoading} className="inputButton"> Bejelentkezés </button>
            { error && <h3>{error}</h3> }
        </form>
    )
}

export default Login;










































// import React, { useState } from "react";
// //import { useNavigate } from "react-router-dom";
// import '../App.css';

// import { useAuth0 } from "@auth0/auth0-react";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     //const navigate = useNavigate();
//     const { loginWithRedirect } = useAuth0();

//     // const collectData = async () => {
//     //     let result = await fetch("http://localhost:5000/login", {
//     //         method: 'post',
//     //         body: JSON.stringify({ email, password }),
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         }
//     //     });
//     //     result = await result.json();
//     //     if (result.name) {
//     //         await loginWithRedirect();
//     //         navigate("/");
//     //     } else {
//     //         alert("Helytelen email vagy jelszó.");
//     //     }
//     // }

//     return (
//         <div className="login">
//             <h1> Bejelentkezés </h1>
//             <input
//                 className="inputBox"
//                 type="text"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 className="inputBox"
//                 type="password"
//                 placeholder="Jelszó"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={() => loginWithRedirect()} className="inputButton" type="button"> Bejelentkezés </button>
//         </div>
//     );
// }

// export default Login;
