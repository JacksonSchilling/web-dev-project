import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
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
                                 onClick={() => handleViewPublicProfile(user)}>
                                <div className="row">
                                    <div className="col">
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
    )
}

export default UsersList