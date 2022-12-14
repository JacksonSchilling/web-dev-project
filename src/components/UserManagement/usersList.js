import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findAllUsers} from "../login/users-service";
import {findAllUsersThunk} from "../login/users-thunks";
import {followUserThunk} from "../follows/follows-thunks";
import {useNavigate} from "react-router";
import PublicProfile from "../profile/publicProfile";

const UsersList = () => {
    const dispatch = useDispatch()
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const navigate = useNavigate()

    const [clicked, setClicked] = useState(false)
    const [publicUser, setPublicUser] = useState(null)

    useEffect(() => {
        dispatch(findAllUsersThunk())
        // users.filter((user) => user.username !== currentUser.username)
    }, [])

    const handleCloseDetails = () => {
        setClicked(false)
        setPublicUser(null)
        navigate('/api/browse-users')
    }

    const handleViewPublicProfile = (user) => {
        setClicked(true)
        setPublicUser(user)
    }

    return (
        currentUser !== null ? (
        <div className="list-group">
            {
                !clicked && (
                             <div className="list-group-item bg-dark text-white mb-1">
                                 Users
                             </div>
                         )
            }

            {
                !clicked &&
                users.filter((user) => user.username !== currentUser.username)
                    .map((user) => {
                        return (
                            <div className="list-group-item"
                                 >
                                <div className="row">
                                    <div className="col" onClick={() => handleViewPublicProfile(user)}>
                                        {user.fullName}
                                    </div>
                                    <div className="col">
                                        <button
                                            className="btn btn-success flex-end"
                                            onClick={() => dispatch(
                                                followUserThunk({
                                                                    'user': user,
                                                                    'currentUser': currentUser
                                                                }))}>Follow
                                        </button>
                                    </div>
                                </div>

                            </div>

                        )
                    })
            }
            {
                clicked && publicUser !== null && (
                            <PublicProfile user={publicUser}
                                           handleCloseDetails={handleCloseDetails}/>
                        )
            }
        </div>
    ) : <div>
            <h3>You are not logged in</h3>
            <button className="btn btn-success btn-lg"
                    onClick={() => navigate('/api/login')}>Login</button>
        </div>)
}

export default UsersList