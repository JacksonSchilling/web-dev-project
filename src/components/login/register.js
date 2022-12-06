import React from "react";
import "./login.css"
import {useNavigate} from "react-router";

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className="form-signin w-100 m-auto">
            <button type="button"
                    className="btn btn-sm btn-outline-secondary mt-2 me-5 float-end rounded-pill"
                    onClick={() => navigate('/login')}
            >
                Already have an account? Log-In
            </button>
            <form>
                <h1 className="h3 mb-3 fw-normal">Register for an account</h1>

                <div className="form-floating">
                    <input type="email" className="form-control"
                           id="floatingInput"
                           placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control"
                           id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Admin Account
                        </label>
                </div>

                <button className="w-100 btn btn-lg btn-primary"
                        type="submit">Register
                </button>
                <p className="mt-5 mb-3 text-muted position-absolute top-25
                start-50 translate-middle">&copy; 2017–2022</p>
            </form>


        </div>
    )
}

export default Register