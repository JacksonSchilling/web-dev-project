import React from "react";

const UserManagement = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>User Management</h1>
            </div>
            <div className="row border">
                <div className="col 1">
                    <h4>User 1</h4>
                </div>
                <div className="col me-5 pt-1">
                    <button className="w-10 btn btn-sm btn-danger"
                            type="submit">Delete
                    </button>
                </div>
            </div>
            <div className="row border">
                <div className="col 1">
                    <h4>User 2</h4>
                </div>
                <div className="col me-5 pt-1">
                    <button className="w-10 btn btn-sm btn-danger"
                            type="submit">Delete
                    </button>
                </div>
            </div>
            <div className="row border">
                <div className="col 1">
                    <h4>User 3</h4>
                </div>
                <div className="col me-5 pt-1">
                    <button className="w-10 btn btn-sm btn-danger"
                            type="submit">Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserManagement