import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, isLoading, error } = useSignup()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(name, email, password)
        navigate('/')
    }

    return (
        <form className="login" onSubmit={handleSubmit}>

            <h1> Regisztráció </h1>

            <input className="inputBox" type="text" placeholder="Név" 
                value={name} onChange={(e) => setName(e.target.value)} />

            <input className="inputBox" type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="inputBox" type="password" placeholder="Jelszó" 
                value={password} onChange={(e) => setPassword(e.target.value)} />
 
            <button disabled={isLoading} className="inputButton"> Regisztráció </button>
            { error && <h2>{error}</h2> }
        </form>
    )
}

export default Signup;