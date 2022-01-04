

import { Feed } from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import "./profile.css";

export const Profile = () => {
    return (
        <>
             <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                <div className="profileRightTop">
                <div className="profileCover">
                   <img src="./asset/images/3.jpg" className="profileCoverImg"  alt="" />
                   <img src="./asset/images/pic.jpg" className="profileUserImg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>sohanur rahman</h4>
                    <span className='profileInfoDecs'>💟Hello my friends!💟</span>
                </div>
                   
                </div>
                <div className="profileRightBottom">
                <Feed />

                <Rightbar profile/>

                </div>
                </div>
            </div>
        </>
    )
}
