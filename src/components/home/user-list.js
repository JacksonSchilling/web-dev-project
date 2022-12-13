import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import userItem from "./user-item";
import {findAllUsersThunk} from "../login/users-thunks";
import usersReducer from "../login/users-reducer";

const UserList = () => {
    const {users, loading} = useSelector(
        state => state.initialState)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                users.map(user =>
                    <userItem
                        key={user._id} user={user}/> )
            }
        </ul>
    );
};
export default UserList;