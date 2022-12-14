import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Profile from "./components/profile";
import EditProfile from "./components/profile/EditProfile";
import Login from "./components/login";

import Dashboard from "./components/Dashboard";
import searchSongReducer from "./redux/search-song-reducer";
import Register from "./components/login/register";
import UserManagement from "./components/UserManagement";
import "./App.css";
import LikedSong from "./components/likedSong";
import usersReducer from "./components/login/users-reducer";
import CurrentUser from "./components/login/current-user";
import followsReducer from "./components/follows/follows-reducer";
import UsersList from "./components/UserManagement/usersList";

const store = configureStore({
                                 reducer: {
                                     likedSong: searchSongReducer,
                                     users: usersReducer,
                                     follows: followsReducer
                                 }
                             })

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CurrentUser>
                    <div className="wrapper">
                        <div className="sidebar sidebarOption a">
                            <Link to="/api/profile">Profile Page </Link>
                            <Link to="/api/login">Login Page </Link>

                            <Link to="/dashboard">Dashboard </Link>
                            <Link to="/api/user-management">User
                                Management </Link>
                            <Link to="/api/home">Home</Link>
                            <Link to="/api/browse-users">Browse Users</Link>
                            <button className="btn btn-danger btn-md w-25"
                                    onClick={() => window.location.reload()}
                            >Logout</button>
                        </div>
                        <div className="main_body player player_body">
                            <div className="container">
                                <Routes>
                                    <Route path="/"
                                           element={<Login/>}/>

                                    <Route path="/api/profile"
                                           element={<Profile/>}/>
                                    <Route path="/api/edit-profile"
                                           element={<EditProfile/>}/>
                                    <Route path="/api/login"
                                           element={<Login/>}/>
                                    <Route path="/dashboard"
                                           element={<Dashboard/>}/>
                                    <Route path="/api/register"
                                           element={<Register/>}/>
                                    <Route path="/api/user-management"
                                           element={<UserManagement/>}/>
                                    <Route path="/api/home"
                                           element={<LikedSong/>}/>
                                    <Route path="/api/browse-users"
                                           element={<UsersList/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </CurrentUser>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
