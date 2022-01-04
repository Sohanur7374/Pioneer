import { Users } from '../../dummyData';
import { Online } from '../online/Online';
import './rightbar.css';

const Rightbar = ({profile}) => {
    const HomeRightbar =()=>{
        return(
            <>
                 <div className="rightBirthdayChart">
                    <img className='birthdayImg' src="asset/images/gift.png" alt="" />
                    <span className='birthdayText'><b>Naim shekh</b> and <b> 4 others</b> friends are Birthday today</span>
                </div>
                <img className='rightbarAdd' src="asset/images/ad.png" alt="img" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=> (
                       <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar =() =>{
        return (<>
            <h4 className='rightbarTitle'>User information </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Bangladesh</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Bogura</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className='rightbarTitle'>User Friends </h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="./asset/propic/1.jpg" className='rightbarFollowingImg' alt="" />
                    <span className="rightbarFollowingName">Sohanur Rahman</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./asset/propic/2.jpg" className='rightbarFollowingImg' alt="" />
                    <span className="rightbarFollowingName">Monisa dee</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./asset/propic/3.jpg" className='rightbarFollowingImg' alt="" />
                    <span className="rightbarFollowingName">Wakiqur Rahman</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./asset/propic/4.jpg" className='rightbarFollowingImg' alt="" />
                    <span className="rightbarFollowingName">Debasis</span>
                </div>
           
                <div className="rightbarFollowing">
                    <img src="./asset/propic/6.jpg" className='rightbarFollowingImg' alt="" />
                    <span className="rightbarFollowingName">SMosiur Rahman</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./asset/propic/7.jpg" className='rightbarFollowingImg' alt="" />
                    <span className="rightbarFollowingName">Saidur Rahman</span>
                </div>
            </div>
        </>);
    }; 
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
               {profile ? <ProfileRightbar /> : <HomeRightbar />} 
            </div>
        </div>
    )
}

export default Rightbar
