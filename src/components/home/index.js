import {Link} from "react-router-dom";

const Home = () => {
    return (
        // <div>
        //     <div className="row">
        //         <div className="col-3 bg-black">
        //             <div className="list-group col-12">
        //                 <a className="list-group-item black-list-group-item"
        //                    style="background-color: black" href="/">
        //                     <i className="fa fa-home me-1 text-white"></i><span
        //                     className="fg-white fw-bold">
        //             Home</span>
        //                 </a>
        //                 <a className="list-group-item black-list-group-item"
        //                    style="background-color: black" href="/">
        //                     <i className="fa fa-search me-1 fg-grey"></i><span
        //                     className="fg-grey">
        //             Search</span>
        //                 </a>
        //                 <a className="list-group-item black-list-group-item"
        //                    style="background-color: black" href="/">
        //                     <i className="fa fa-list me-1 fg-grey"></i><span
        //                     className="fg-grey">
        //             Details</span>
        //                 </a>
        //                 <a className="list-group-item black-list-group-item"
        //                    style="background-color: black" href="/">
        //                     <i className="fa fa-user me-1 fg-grey"></i><span
        //                     className="fg-grey">
        //             Profile</span>
        //                 </a>
        //                 <a className="list-group-item black-list-group-item"
        //                    style="background-color: black" href="/">
        //                     <i className="fa fa-star me-1 fg-grey"></i><span
        //                     className="fg-grey">
        //             Favorites</span>
        //                 </a>
        //                 <a className="list-group-item black-list-group-item"
        //                    style="background-color: black" href="/">
        //                     <i className="fa fa-sign-in-alt me-1 fg-grey"></i><span
        //                     className="fg-grey">
        //             Login</span>
        //                 </a>
        //             </div>
        //         </div>
        //         <div className="col-9 bg-dark text-white">
        //             <button className="btn btn-primary rounded-pill float-right"
        //                     style="background-color: #303030; color: white; width: 15%; border-color: transparent">
        //                 <b>User1</b>
        //             </button>
        //             <div className="float-left position-relative">
        //                 <br>
        //                     <h3>Liked Songs</h3>
        //                 </br>
        //             </div>
        //             <div className="float-none">
        //                 <br></br>
        //                 <div className="float-left">
        //                     <div>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px; margin-left: -120px"/>
        //                     </div>
        //
        //                     <div className="text-white fw-bold mt-2"
        //                          style="margin-left: -120px">
        //                         Zero- From the Orig...
        //                     </div>
        //
        //                     <div className="fg-grey mt-2"
        //                          style="margin-left: -120px">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5">
        //                     <div>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5">
        //                     <div>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5">
        //                     <div>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5">
        //                     <div>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="float-left position-relative">
        //                 <br>
        //                     <h3>Suggested Songs</h3>
        //                 </br>
        //             </div>
        //             <div className="float-none mt-5">
        //
        //                 <div className="float-left">
        //                     <div>
        //                         <br></br>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px; margin-left: -190px"/>
        //                     </div>
        //
        //                     <div className="text-white fw-bold mt-2"
        //                          style="margin-left: -190px">
        //                         Zero- From the Orig...
        //                     </div>
        //
        //                     <div className="fg-grey mt-2"
        //                          style="margin-left: -190px">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5 mt-5">
        //                     <div>
        //                         <br></br>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px; margin-left: -20px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2"
        //                          style="margin-left: -20px">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2"
        //                          style="margin-left: -20px">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5 mt-5">
        //                     <div>
        //                         <br></br>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5 mt-5">
        //                     <div>
        //                         <br></br>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //                 <div className="float-left ms-5 mt-5">
        //                     <div>
        //                         <br></br>
        //                         <img src="../images/origins-cover.png"
        //                              style="width: 170px"/>
        //                     </div>
        //                     <div className="text-white fw-bold mt-2">
        //                         Zero- From the Orig...
        //                     </div>
        //                     <div className="fg-grey mt-2">
        //                         Imagine Dragons
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //
        // </div>
        <div>
            Home Page!!!
            <p>Basil will add his home component here</p>
        </div>
    )
}

export default Home