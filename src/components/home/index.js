import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getLikedSongsThunk} from "../../services/songs-thunk";
import {findAllUsersThunk} from "../login/users-thunks";

const Home = () => {
    const {users} = useSelector((state) => state.users)
    const {songs} = useSelector((state) => state.likedSong)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])

    const userArr = []
    let userSongMap = {}

    userArr.map((user) => {
        dispatch(getLikedSongsThunk(user))
        userSongMap = {
            ...userSongMap,

        }
    })


    return (
        <div>
            {
                users.map((user) => {
                    userArr.push(user)
                })
            }
        </div>
    )
}

export default Home