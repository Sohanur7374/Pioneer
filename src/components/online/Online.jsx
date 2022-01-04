import "./online.css"

export const Online = ({user}) => {
    return (
                  <li className="rightbarFriendItem">
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src={user.profilepic} alt="" />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUseName'>{user.username}</span>
                    </li>
    )
}
