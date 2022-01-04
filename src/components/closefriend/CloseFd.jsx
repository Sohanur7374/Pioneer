import './closefd.css'

export const CloseFd = ({user}) => {
    return (
        <li className="sidebarFriend">
        <img src={user.profilepic} alt="" className="sidebarFriendImg" />
        <span className='sidebarFriendName'>{user.username}</span>
        </li>
    )
}
