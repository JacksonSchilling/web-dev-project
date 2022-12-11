import Profile from "./components/profile";
import EditProfile from "./components/profile/EditProfile";
import Login from "./components/login";
import Home from "./components/home";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SpotifyLogin from "./components/login/SpotifyLogin";
import Dashboard from "./components/Dashboard";
import {configureStore} from "@reduxjs/toolkit";
import searchSongReducer from "./redux/search-song-reducer";
import {Provider} from "react-redux";
import Register from "./components/login/register";
import UserManagement from "./components/UserManagement";
import "./App.css";
import LikedSong from "./components/likedSong";
import usersReducer from "./components/login/users-reducer";

const code = new URLSearchParams(window.location.search).get("code")

const store = configureStore({
                                 reducer: {
                                     likedSong: searchSongReducer,
                                     users: usersReducer
                                 }
                             })

function App() {
    return (
        <Provider store={store}>

            <BrowserRouter>

                <div className="wrapper">
                    <div className="sidebar sidebarOption a">
                        <Link to="/api/profile">Profile Page </Link>
                        <Link to="/api/login">Login Page </Link>
                        <Link to="/login">Spotify Login Page </Link>
                        <Link to="/api/home">Home </Link>
                        <Link to="/dashboard">Dashboard </Link>
                        <Link to="/api/user-management">User Management </Link>
                        <Link to="/api/liked-song">Liked Page</Link>
                    </div>
                    <div className="main_body player player_body">
                        <div className="container">
                            <Routes>
                                <Route path="/"
                                       element={code ? <Dashboard code={code}/>
                                                     :
                                                <SpotifyLogin/>}/>
                                <Route path="/api/home" element={<Home/>}/>
                                <Route path="/api/profile" element={<Profile/>}/>
                                <Route path="/api/edit-profile"
                                       element={<EditProfile/>}/>
                                <Route path="/api/login" element={<Login/>}/>
                                <Route path="/login"
                                       element={<SpotifyLogin/>}/>
                                <Route path="/dashboard"
                                       element={<Dashboard code={code}/>}/>
                                <Route path="/api/register" element={<Register/>}/>
                                <Route path="/api/user-management"
                                       element={<UserManagement/>}/>
                                <Route path="/api/liked-song"
                                       element={<LikedSong/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
