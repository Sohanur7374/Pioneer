import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons';
import { Users } from '../../dummyData';
import { CloseFd } from '../closefriend/CloseFd';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWapper">
                <ul className="sidebarList">
                    <li className='sidebarItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Feed</span>
                    </li>
                    <li className='sidebarItem'>
                        <Chat className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Chat</span>
                    </li>
                    <li className='sidebarItem'>
                        <PlayCircleFilledOutlined className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Videos</span>
                    </li>
                   
                    <li className='sidebarItem'>
                        <Group className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Groups</span>
                    </li>
                   
                    <li className='sidebarItem'>
                        <Bookmark className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Bookmarks</span>
                    </li>
                   
                    <li className='sidebarItem'>
                        <HelpOutline className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Questions</span>
                    </li>
                   
                    <li className='sidebarItem'>
                        <WorkOutline className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Jobs</span>
                    </li>
                   
                    <li className='sidebarItem'>
                        <Event className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Events</span>
                    </li>
                   
                    <li className='sidebarItem'>
                        <School className='sidebarIcon' />
                        <span className='sidebarlistItemText'>Courses</span>
                    </li>
                   
                </ul>
                <button className='sidebarButton'>Show More</button>
                 <hr className='sidebarHr'/>
                 <ul className="sidebarFriendList">
                    {Users.map((u)=>(
                        <CloseFd key={u.id} user={u} />
                    ))}
                 </ul>
            </div>
 
        </div>
    )
}

export default Sidebar
