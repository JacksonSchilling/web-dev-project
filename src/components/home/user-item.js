import React from "react";
import "./home.css";
//import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";

const UserItem = (
    {

        user = {
            "_id": "234",
            "fullName": "Basil Coughlan",
            "username": "BasilC",
            "password": "1234",
            "email": "bcoughlan12@gmail.com",
            "firstName": "Basil",
            "lastName": "Coughlan",
            "dob": "01/01/1900",
            "address": "123 Main St",
            "admin": true,
            "likedSongs":"Nobody Gets Me, Zero"
        }
    }
) => {

    return(

        <li className="list-group-item">
            <div className="mt-3 float-left">
                <div>
                    <img width={170} alt={''} src="../images/avatar.png"/>
                </div>

                <div className="text-white fw-bold mt-2">
                    Username: {user.username}
                </div>

                <div className="text-white mt-2">
                    Liked Songs: {user.likedSongs}
                </div>
            </div>
        </li>
    );
};
export default UserItem;