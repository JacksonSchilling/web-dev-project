import {useState, useEffect} from "react"
import useAuth from "./useAuth"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import {Container, Form} from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import {likeSongThunk} from "../services/songs-thunk";


export const spotifyApi = new SpotifyWebApi({
                                         clientId: "bb235ac85acd4799bac266127f244d7f",
                                     })

export default function Dashboard() {
    const accessToken = useAuth()
    const {currentUser} = useSelector((state) => state.users)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")

    const dispatch = useDispatch()

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }

    const likeSong = (track) => {
        // spotify:track:0zlGnseLGzRIBA0TJcb3Bo
        const uri = track.uri
        const id = uri.substring(14)
        spotifyApi.getTrack(id)
            .then(function (data) {
                console.log(currentUser);
                const likeSongDetails = {
                    ...data.body,
                    user: currentUser
                }
                dispatch(likeSongThunk(likeSongDetails))
            }, function (err) {
                console.error(err);
            });
    }



    useEffect(() => {
        if (!playingTrack) {
            return
        }

        axios
            .get("http://localhost:4000/lyrics", {
                params: {
                    track: playingTrack.title,
                    artist: playingTrack.artist,
                },
            })
            .then(res => {
                setLyrics(res.data.lyrics)
            })
    }, [playingTrack])

    useEffect(() => {
        if (!accessToken) {
            return
        }
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) {
            return setSearchResults([])
        }
        if (!accessToken) {
            return
        }

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) {
                return
            }
            setSearchResults(
                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) {
                                return image
                            }
                            return smallest
                        },
                        track.album.images[0]
                    )

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    }
                })
            )
        })

        return () => (cancel = true)
    }, [search, accessToken])

    return (
        <Container className="d-flex flex-column py-2"
                   style={{height: "100vh"}}>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{overflowY: "auto"}}>
                {searchResults.map(track => (
                    <TrackSearchResult
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                        likeSong={likeSong}
                    />
                ))}
                {searchResults.length === 0 && (
                    <div className="text-center" style={{whiteSpace: "pre"}}>
                        {lyrics}
                    </div>
                )}
            </div>
            <div>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
            </div>
        </Container>
    )
}
