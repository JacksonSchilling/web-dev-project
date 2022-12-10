import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getLikedSongsThunk} from "../../services/songs-thunk";
import TrackSearchResult from "../TrackSearchResult";
import {spotifyApi} from "../Dashboard";
import {useNavigate} from "react-router";
import axios from "axios";

const LikedSong = () => {
    const {songs, loading} = useSelector(
        state => state.likedSong)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [album, setAlbum] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        dispatch(getLikedSongsThunk())
    }, [])

    // const getImg = async (uri) => {
    //     const res = await axios.get(`https://open.spotify.com/oembed?url=${uri}`)
    //     const img = res.data.thumbnail_url
    //     console.log(img)
    //     return img
    // }

    const viewDetailsOfTrack = ({albumId}) => {
        const albumTracks = []
        spotifyApi.getAlbumTracks(albumId, {limit: 10, offset: 1})
            .then(function (data) {
                const album = data.body.items
                album.map((item) => {
                    const artistName = item.artists[0].name
                    const type = item.artists[0].type
                    const songTitle = item.name
                    const trackId = item.id
                    albumTracks.push({
                                         'artistName': artistName,
                                         'type': type,
                                         'songTitle': songTitle,
                                         'trackId': trackId,
                                         // 'image': img,
                                     })
                    console.log(type + " " + artistName + " " + songTitle + " ")
                    setAlbum(albumTracks)
                    setClicked(true)

                })
            }, function (err) {
                console.log('Something went wrong while fetching album!', err);
            });
    }

    const handleCloseDetails = () => {
        setAlbum([])
        setClicked(false)
        navigate('/liked-song')
        // window.location.reload()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 px-0">
                    <img src="images/liked-song-logo.png" alt="liked logo"
                         className="img-fluid "/>
                </div>
                <div className="col">
                    <strong>PLAYLIST</strong>
                    <h2>Liked Songs</h2>
                    <p>Collection of Liked Songs</p>
                </div>
            </div>

            <div>


                <div>
                    {
                        clicked && (
                                    <div className="row mb-4 mt-4">
                                        <div className="col-10">
                                            <h3>Details - Songs in this Album</h3>
                                        </div>
                                        <div className="col">
                                            <i className="bi bi-x-lg"
                                               onClick={handleCloseDetails}></i>
                                        </div>
                                    </div>

                                )
                    }

                    {clicked &&
                     album !== [] ? album.map((track) => (
                        <div className="row">
                            {/*<div className="col-4">*/}
                            {/*    /!*<img src={track.image}*!/*/}
                            {/*    /!*     className="img-thumbnail"/>*!/*/}
                            {/*</div>*/}
                            <div className="col">
                                <p>{track.songTitle}</p>
                            </div>

                        </div>
                    )) : songs.map(track => (
                        <TrackSearchResult
                            track={track}
                            key={track.uri}
                            chooseTrack={null}
                            likeSong={null}
                            chooseTrack={viewDetailsOfTrack}
                        />
                    ))}
                </div>


            </div>


        </div>
    )
}

export default LikedSong