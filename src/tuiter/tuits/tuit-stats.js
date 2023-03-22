import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
	faHeart as faHeartSolid,
	faRetweet,
	faShareNodes,
} from '@fortawesome/free-solid-svg-icons';

const TuitStats = ({ post }) => {
	let [likes, setLikes] = useState(post.likes);
	let [liked, setLiked] = useState(post.liked);

	const likeHandler = () => {
		if (liked) {
			setLiked(false);
			setLikes(likes - 1);
		} else {
			setLiked(true);
			setLikes(likes + 1);
		}
	};

	return (
		<div className="d-flex flex-row align-items-center justify-content-between text-secondary">
			<div>
				<FontAwesomeIcon icon={faComment} />
				<span className="ms-1">{post.replies}</span>
			</div>
			<div>
				<FontAwesomeIcon icon={faRetweet} />
				<span className="ms-1">{post.retuits}</span>
			</div>
			<div>
				{liked ? (
					<FontAwesomeIcon
						icon={faHeartSolid}
						className="text-danger"
						onClick={likeHandler}
					/>
				) : (
					<FontAwesomeIcon icon={faHeart} onClick={likeHandler} />
				)}
				<span className="ms-1">{likes}</span>
			</div>
			<div>
				<FontAwesomeIcon icon={faShareNodes} />
			</div>
		</div>
	);
};

export default TuitStats;
