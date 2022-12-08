import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getLikedSongsThunk} from "../../services/songs-thunk";
import TrackSearchResult from "../TrackSearchResult";

const LikedSong = () => {
    const {songs, loading} = useSelector(
        state => state.likedSong)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLikedSongsThunk())
    }, [])


    return (
        <div className="container">
            Liked Songs!!!
            {songs.map(track => (
                <TrackSearchResult
                    track={track}
                    key={track.uri}
                    chooseTrack={null}
                    likeSong={null}
                />
            ))}

        </div>
    )
}


export default LikedSong