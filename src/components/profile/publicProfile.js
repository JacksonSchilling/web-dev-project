import React from "react";

const PublicProfile = ({user, handleCloseDetails}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-8">
                    <p className="h3 m-0">Profile Overview</p>
                    <div className="text-secondary"></div>
                </div>
                <div className="col">
                    <i className="bi bi-x-lg"
                       onClick={handleCloseDetails}></i>
                </div>
            </div>
            <div className="row">
                <img src="/images/cover.png"/>
                <div className="wd-inline-block">
                    <img src="/images/avatar.png"
                         className="img-fluid rounded-circle w-25 wd-overlap-profile-img"/>
                </div>

            </div>
            <div className="row">
                <p className="h4 fw-bolder m-0">{user.fullName}</p>
                <p className="h6 text-secondary">@{user.username}</p>
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
                        <h5>{user.email}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Date of Birth</h5>
                    </div>
                    <div className="col">
                        <h5>{user.dob}</h5>
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

export default PublicProfile