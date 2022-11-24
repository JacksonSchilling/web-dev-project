import Profile from "./components/profile";
import EditProfile from "./components/profile/EditProfile";
import Login from "./components/login";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Link to="/profile">Profile Page | </Link>

                <Link to="/login">Login Page </Link>
                <div className="container">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/edit-profile" element={<EditProfile/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
