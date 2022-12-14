import {useEffect} from "react";
import {getLikedSongsThunk} from "../../services/songs-thunk";
import {useSelector} from "react-redux";

const likedSongPage = () => {

    const {currentUser} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getLikedSongsThunk(currentUser))
    }, [])
    return (
        <div className="row">
            <div className="col-md-4 px-0">
                <img src="/images/liked-song-logo.png" alt="liked logo"
                     className="img-fluid "/>
            </div>
            <div className="col">
                <strong>PLAYLIST</strong>
                <h2>Liked Songs</h2>
                <p>Collection of Liked Songs</p>
            </div>


        </div>


    )
}