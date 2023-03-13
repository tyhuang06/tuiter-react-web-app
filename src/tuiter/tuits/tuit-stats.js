import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faHeart as faHeartSolid, faShareNodes } from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ post }) => {
    return (
        <div className="d-flex flex-row align-items-center justify-content-between text-secondary">
            <div>
                <FontAwesomeIcon icon={ faComment }/>
                <span className="ms-1">{ post.comments }</span>
            </div>
            <div>
                <FontAwesomeIcon icon={ faRetweet }/>
                <span className="ms-1">{ post.retweets }</span>
            </div>
            <div>
                { post.liked ? (
                    <FontAwesomeIcon icon={ faHeartSolid } className="text-danger"/>
                ) : (
                    <FontAwesomeIcon icon={ faHeart }/>
                ) }
                <span className="ms-1">{ post.likes }</span>
            </div>
            <div>
                <FontAwesomeIcon icon={ faShareNodes }/>
            </div>
        </div>
    )
}

export default TuitStats;