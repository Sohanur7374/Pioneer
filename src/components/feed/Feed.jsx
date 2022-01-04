import { Posts } from "../../dummyData";
import Post from "../post/Post";
import Share from "../Share/Share";
import "./feed.css";

export const Feed = () => {
    return (
        <div className="feedbar">
            <div className="feedWapper">
                <Share />
                {
                    Posts.map((p)=>(
                        <Post key={p.id} post={p} />
                    ))
                }
            </div>
        </div>
    )
}
