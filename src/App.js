import Profile from "./components/profile";
import EditProfile from "./components/profile/EditProfile";
import Login from "./components/login";
import Home from "./components/home";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Details from "./components/album_details";
import SpotifyLogin from "./components/login/SpotifyLogin";
import Dashboard from "./components/Dashboard";
import {configureStore} from "@reduxjs/toolkit";
import searchSongReducer from "./redux/search-song-reducer";
import {Provider} from "react-redux";
import Register from "./components/login/register";
import UserManagement from "./components/UserManagement";

const code = new URLSearchParams(window.location.search).get("code")

const store = configureStore({
                                 reducer: {
                                     likedSong: searchSongReducer,
                                 }
                             })

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Link to="/profile">Profile Page | </Link>
                    <Link to="/login">Login Page | </Link>
                    <Link to="/details">Details Page | </Link>
                    <Link to="/spotify-login">Spotify Login Page | </Link>
                    <Link to="/home">Home | </Link>
                    <Link to="/dashboard">Dashboard | </Link>
                    <Link to="/user-management">User Management | </Link>
                    <div className="container">
                        <Routes>
                            <Route path="/"
                                   element={code ? <Dashboard code={code}/> :
                                            <SpotifyLogin/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/edit-profile"
                                   element={<EditProfile/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/spotify-login"
                                   element={<SpotifyLogin/>}/>
                            <Route path="/details" element={<Details/>}/>
                            <Route path="/dashboard"
                                   element={<Dashboard code={code}/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/user-management" element={<UserManagement/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>

    );
}

export default App;
