import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"

const Topbar = () => {
    return (
        <div className='topbarContainer'>
         <div className="topbarLeft">
             <span className='logo'>SohSo</span>
         </div>
         <div className="topbarCenter">
             <div className="searchbar">
                 <Search className='searchIcon' />
                 <input placeholder='Search for friends, post or video' className="searchinput"  />

             </div>
         </div>
         <div className="topbarRight">
             <div className="topbarlinks">
                 <span className='topbarlink'>Home</span>
                 <span className='topbarlink'>TimeLine</span>
             </div>
             <div className="topbarIcons">
                 <div className="topbariconItem">
                     <Person />
                     <span className='topbarIconBadge'>1</span>
                 </div>
                 <div className="topbariconItem">
                     <Chat />
                     <span className='topbarIconBadge'>3</span>
                 </div>
                 <div className="topbariconItem">
                     <Notifications />
                     <span className='topbarIconBadge'>2</span>
                 </div>
             </div>
             <img src="./asset/images/pic.jpg" alt="" className='topbarImage' />
         </div>
            
        </div>
    )
}

export default Topbar
