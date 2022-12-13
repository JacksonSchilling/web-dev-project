import React, {useEffect} from "react";
import {
    deleteUserThunk,
    findAllUsersThunk,
    registerThunk
} from "../login/users-thunks";
import {useDispatch, useSelector} from "react-redux";

const UserManagement = () => {
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [users])
    return (
        <div className="container">
            {
                currentUser?.admin ? (
                    <div>
                        <h2>User Management</h2>

                        <ul className="list-group">
                            {
                                users.map((user) =>
                                              <li className="list-group-item"
                                                  key={user.id}>
                                                  <i onClick={() => {
                                                      dispatch(deleteUserThunk(
                                                          user._id))
                                                  }}
                                                     className="bi bi-trash float-end"></i>
                                                  <span>{user.username} </span>
                                              </li>
                                )
                            }
                        </ul>
                    </div>
                ) : (
                    <div className="container" style={{width: '18rem'}}>
                        <div className="card">
                            <img src="/images/uhOh.png" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <p className="card-text text-black text-center pt-2">
                                    You are not an ADMIN
                                </p>
                            </div>
                        </div>
                    </div>

                    // <div>
                    //     Hello
                    // </div>
                )
            }
        </div>
    )

}
export default UserManagement

