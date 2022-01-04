import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Users } from "../../dummyData";
import './post.css';

const Post = ({post}) => {
    const [like, setliked]= useState(post.like);
    const [islike, setIsliked]= useState(false);
    const likeHandle =()=>{
    setliked(islike ? like -1 : like +1);
    setIsliked(!islike);
    }

    
    return (

        <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postleft">
                    <img className='postImg' src={Users.filter((u)=> u.id === post.userId)[0].profilepic} alt="" />
                    <span className='postUserName'>{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postRight">
                    <MoreVert  className="morevert"/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postBigImg" src={post.photo}  alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img  className="like" src="./asset/images/like.png" onClick={likeHandle} alt="" />
                <img  className="like" src="./asset/images/heart.png"  onClick={likeHandle} alt="" />
                
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComment">{post.comment} comments</span>
                </div>
            </div>
        </div>
           
        </div>
    )
}

export default Post
