import Profile from "./components/profile";
import EditProfile from "./components/profile/EditProfile";
import Login from "./components/login";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Details from "./components/album_details";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Link to="/profile">Profile Page | </Link>
                <Link to="/login">Login Page | </Link>
                <Link to="/details">Details Page | </Link>
                <div className="container">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/edit-profile" element={<EditProfile/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/details" element={<Details/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
