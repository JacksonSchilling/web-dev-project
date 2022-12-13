import "./form-validation.css"
import "./form-validation.js";
import {useNavigate} from "react-router";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../login/users-thunks";

const EditProfile = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleUpdateUser = () => {
        const userUpdateArr = []
        const userUpdates = {username, fullName, email}
        userUpdateArr.push(currentUser._id)
        userUpdateArr.push(userUpdates)
        dispatch(updateUserThunk(userUpdateArr))
    }


    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-md-7 col-lg-8">
                    <div className="row">
                        <div className="col-10">
                            <h4 className="mb-3">Edit Profile</h4>
                        </div>
                        <div className="col end-0">
                            <button type="button" className="btn-close end-0"
                                    aria-label="Close"
                                    onClick={() => navigate('/api/profile')}
                            >
                            </button>
                        </div>
                    </div>
                    {/*<h4 className="mb-3">Edit Profile</h4>*/}

                    <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName"
                                       className="form-label">Full name</label>
                                <input type="text" className="form-control"
                                       id="firstName" placeholder=""
                                       required
                                onChange={(e) => setFullName(e.target.value) }/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>


                            <div className="col-12">
                                <label htmlFor="username"
                                       className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control"
                                           id="username" placeholder="Username"
                                           required
                                           onChange={(e) => setUsername(e.target.value) }/>
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email"
                                       className="form-label">Email</label>
                                <input type="email" className="form-control"
                                       id="email"
                                       placeholder="you@example.com"
                                       required
                                       onChange={(e) => setEmail(e.target.value) }/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address
                                </div>
                            </div>

                            {/*<div className="col-12">*/}
                            {/*    <label htmlFor="address"*/}
                            {/*           className="form-label">Address</label>*/}
                            {/*    <input type="text" className="form-control"*/}
                            {/*           id="address"*/}
                            {/*           placeholder="1234 XYZ Street"*/}
                            {/*           required/>*/}
                            {/*    <div className="invalid-feedback">*/}
                            {/*        Please enter your shipping address.*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="col-12">*/}
                            {/*    <label htmlFor="address2"*/}
                            {/*           className="form-label">Address 2 <span*/}
                            {/*        className="text-muted">(Optional)</span></label>*/}
                            {/*    <input type="text" className="form-control"*/}
                            {/*           id="address2"*/}
                            {/*           placeholder="Apartment or suite"/>*/}
                            {/*</div>*/}
                        </div>

                        <hr className="my-4"/>

                        <button
                            className="w-100 btn btn-primary btn-lg"
                            type="submit"
                            oncClick={handleUpdateUser}
                            >
                            Save Profile
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditProfile