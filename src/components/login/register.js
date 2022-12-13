import React, {useState} from "react";
import "./login.css"
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";

const Register = () => {
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const [admin, setAdmin] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {fullName, username, password, email, dob, admin}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <h1>Register</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }

            <label htmlFor="name"
                   className="form-label">Full Name</label>
            <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control"
                       id="name" placeholder="Full Name"
                       onChange={(e) => setFullName(e.target.value)}
                       required/>
                <div className="invalid-feedback">
                    Your Full Name is required.
                </div>
            </div>

            <label htmlFor="username"
                   className="form-label">Username</label>
            <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control"
                       id="username" placeholder="Username"
                       onChange={(e) => setUsername(e.target.value)}
                       required/>
                <div className="invalid-feedback">
                    Your username is required.
                </div>
            </div>

            <label htmlFor="email"
                   className="form-label">Email</label>
            <input type="email" className="form-control mb-3"
                   id="email"
                   placeholder="you@example.com"
                   onChange={(e) => setEmail(e.target.value)}
                   required/>
            <div className="invalid-feedback">
                Please enter a valid email address
            </div>

            <label htmlFor="dob"
                   className="form-label">Date of Birth</label>
            <input type="date" className="form-control mb-3"
                   id="dob"
                   onChange={(e) => setDob(e.target.value)}
                   required/>
            <div className="invalid-feedback">
                Please enter a valid Date of Birth
            </div>

            <label htmlFor="password"
                   className="form-label">Password</label>
            <input
                className="form-control mb-2"
                id="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="confirm-password"
                   className="form-label">Confirm Password</label>
            <input
                className="form-control mb-2"
                value={validatePassword}
                type="password"
                id="confirm-password"
                onChange={(e) => setValidatePassword(e.target.value)}/>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => setAdmin(e.target.checked)}/>
                <label className="form-check-label" form="flexCheckDefault">
                    Admin Account?
                </label>
            </div>

            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary w-100 mt-3">
                Register
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Register