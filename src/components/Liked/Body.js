
import Header from "./Header_Liked";
import "./Body.css";
import logo from "./Liked_Img.png"
function Body() {

    return (
        <div className="main_body">
            <div className="header__right">
                Temp UserName
            </div>

    <div className="body__info">
        <img src={logo} alt="liked logo"/>
        <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Liked Songs</h2>
            <p>Collection of Liked Songs</p>
        </div>
    </div>
        </div>
    )
}

export default Body;