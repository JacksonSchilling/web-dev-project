import React, {useEffect, useState} from "react"
import "./TrackSearchResult.css"
import {getLikedSongsThunk} from "../services/songs-thunk";
import {useDispatch, useSelector} from "react-redux";



export default function TrackLikedSong({track, chooseTrack, likeSong, dislikeSong}) {

    track = {
        ...track,
        liked: false

    }

    const [trackLike, setTrackLike] = useState(false)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLikedSongsThunk(currentUser))
    }, [])

    function handlePlay() {
        chooseTrack(track)
    }

    const handleLike = () => {

        setTrackLike(false)
        track.liked = trackLike
        dislikeSong(track)

        //window.location.reload(false)

    }

    const getLike = () => {
        console.log("The liked status for track ")
        console.log(track)
        console.log(track.liked)
    }

    return (
        <div className="row">
            <div className="col-10">
                <div
                    className="d-flex m-2 align-items-center"
                    style={{cursor: "pointer"}}
                    onClick={handlePlay}
                >
                    <img src={track.albumUrl}
                         style={{height: "64px", width: "64px"}}/>
                    <div className="ml-3">
                        <div className="white-text">{track.title}</div>
                        <div className="text-muted">{track.artist}</div>
                    </div>
                </div>
            </div>
            <div className="col">
                <i className="bi bi-heart-fill" onClick={handleLike}></i>
            </div>
        </div>

    )
}
