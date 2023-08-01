import React from 'react'
import Topbar from '../../components/community/Topbar/Topbar.jsx'
import Sidebar from '../../components/community/Sidebar/Sidebar.jsx'
import Feed from '../../components/community/Feed/Feed.jsx'
import Rightbar from '../../components/community/Rightbar/Rightbar.jsx'
import "./Profile.css"
const Profile = () => {
  return (
    <>
    <Topbar/>

    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">
              <img
                className="profileCoverImg"
                src='/post/3.jpeg'
                // src={
                //   user.coverPicture
                //     ? PF + user.coverPicture
                //     : PF + "person/noCover.png"
                // }
                alt=""
              />
              <img
                className="profileUserImg"
                src="person/5.jpeg"
                // src={
                //   user.profilePicture
                //     ? PF + user.profilePicture
                //     : PF + "person/noAvatar.png"
                // }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Vidhi Gupta</h4>
              <h2 className="profileInfoDesc">Hello My friends</h2>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
    <Rightbar profile/>
        </div>
    
    </div>

    </div>
</>
  )
}

export default Profile