import React, {useEffect} from "react";
import {deleteUserThunk, findAllUsersThunk, registerThunk} from "../login/users-thunks";
import {useDispatch, useSelector} from "react-redux";
import currentUser from "../login/current-user";
import "./usermanagement.css"

const UserManagement = () => {
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    if (currentUser.admin === true) {
        return(
            <>
                {
                    <h2>User Management</h2>
                }
                <ul className="list-group">
                    {
                        users.map((user) =>
                            <li className="list-group-item"
                                key={user._id}>
                                <i onClick={() => {
                                    dispatch(deleteUserThunk(user._id))
                                }}
                                   className="bi bi-trash float-end"></i>
                                <span>{user.username} </span>
                            </li>
                        )
                    }
                </ul>
            </>
        )
    } else {
        return(
            <>
                <h2>Not Authorized</h2>
            </>
        )
    }


}
export default UserManagement

