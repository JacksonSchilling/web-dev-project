import Profile from "./components/profile";
import EditProfile from "./components/profile/EditProfile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
