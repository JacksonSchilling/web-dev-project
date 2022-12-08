import React from "react";
import "./index.css";
import {useNavigate} from "react-router";

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-10">
                    <p className="h3 m-0">Account Overview</p>
                    <div className="text-secondary"></div>
                </div>
            </div>
            <div className="row">
                <img src="/images/cover.png"/>
                <div className="wd-inline-block">
                    <img src="/images/avatar.png"
                         className="img-fluid rounded-circle w-25 wd-overlap-profile-img"/>
                    <button type="button"
                            className="btn btn-sm btn-outline-secondary mt-2 float-end rounded-pill"
                            onClick={() => navigate('/edit-profile')}
                    >
                        Edit
                        Profile
                    </button>
                </div>

            </div>
            <div className="row">
                <p className="h4 fw-bolder m-0">Saurabh Gade</p>
                <p className="h6 text-secondary">@saurabh7998</p>
            </div>
            <div className="row mt-3">
                <p></p>
            </div>
            <div>
                <div className="row">
                    <div className="col">
                        <h5>Email</h5>
                    </div>
                    <div className="col">
                        <h5>gade.sau@xyz.com</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Address</h5>
                    </div>
                    <div className="col">
                        <h5>1211 Avenue of the Americas, New York, NY</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Date of Birth</h5>
                    </div>
                    <div className="col">
                        <h5>07 September, 1998</h5>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="wd-inline-block">
                    <span className="pe-3"><b>100</b> Following</span>
                    <span className="pe-3"><b>150</b> Followers</span>
                </div>
            </div>

        </div>
    )
}

export default Profile