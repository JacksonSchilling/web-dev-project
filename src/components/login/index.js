import React, {useState} from "react";
import "./login.css"
import {Navigate, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunks";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleLoginBtn = () => {
        try {
            console.log(username + " " + password)
            const user = {
                'username': username,
                'password': password,
            }
            dispatch(loginThunk(user))
        } catch (e) {

        }
    }

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <div className="form-signin w-100 m-auto">
            <button type="button"
                    className="btn btn-sm btn-outline-secondary mt-2 float-end rounded-pill"
                    onClick={() => navigate('/register')}
            >
                Register
            </button>

            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control"
                       id="floatingInput"
                       placeholder="name@example.com"
                       onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control"
                       id="floatingPassword" placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary"
                    onClick={handleLoginBtn}>Sign in
            </button>
            <p className="mt-5 mb-3 text-muted position-absolute top-25
                start-50 translate-middle">&copy; 2017–2022</p>
        </div>
    )
}

export default Login