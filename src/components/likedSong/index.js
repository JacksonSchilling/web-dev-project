import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
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
    //     const res = await
    // axios.get(`https://open.spotify.com/oembed?url=${uri}`) const img =
    // res.data.thumbnail_url console.log(img) return img }

    const viewDetailsOfTrack = (track) => {
        const albumId = track.albumId
        const albumImgUrl = track.albumUrl
        const albumTracks = []
        spotifyApi.getAlbumTracks(albumId, {})
            .then(function (data) {
                const album = data.body.items
                const numOfSongs = album.length
                album.map((item) => {
                    const artistName = item.artists[0].name
                    const type = item.artists[0].type
                    const songTitle = item.name
                    const trackId = item.id
                    const millis = item.duration_ms
                    const minutes = Math.floor(millis / 60000);
                    const seconds = ((millis % 60000) / 1000).toFixed(0);

                    albumTracks.push({
                                         'artistName': artistName,
                                         'type': type,
                                         'songTitle': songTitle,
                                         'trackId': trackId,
                                         'numOfSongsInAlbum': numOfSongs,
                                         'albumImg': albumImgUrl,
                                         'duration': minutes + ":" + (seconds < 10 ? '0' : '') + seconds,
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
            {!clicked && (
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
            )
            }
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
                                        <div className="row border">
                                            <img className="ps-0 col-4"
                                                 src={album[0].albumImg}
                                                 alt={"album cover"}/>
                                            <div className="col-8 pt-5 mt-5 pb-0">
                                                <div className="pt-5 align-bottom">
                                                    <p>{album[0].type.toUpperCase()}</p>
                                                    <h1 className="fw-bolder">{album[0].artistName}</h1>
                                                    <span>{album[0].numOfSongsInAlbum} songs </span>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            clicked && album !== [] ? album.map((track) => (
                                                <div className="row border">
                                                    <div className="col 1">
                                                        <span>{track.songTitle}</span>
                                                    </div>
                                                    <div className="col 1">
                                                        <span>{track.duration}</span>
                                                    </div>
                                                    <div className="col 1">
                                                        <i className="bi bi-play-circle"></i>
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
                                            ))
                                        }

                                    </div>

                                )
                    }

                    {clicked &&
                     album !== [] ? album.map((track) => (
                        <div className="row">


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