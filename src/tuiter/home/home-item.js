import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
	faRetweet,
	faArrowUpFromBracket,
	faCertificate,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';

const HomeItem = ({ post }) => {
	return (
		<div className="list-group-item d-flex flex-row">
			<img
				src={`/images/${post.userAvatar}`}
				alt=""
				height="48px"
				width="48px"
				className="rounded-circle"
			/>
			<div className="d-flex flex-column ms-2">
				<div className="d-flex flex-row align-items-center">
					<div className="fw-bold">{post.userName}</div>
					<div className="fa-stack fa-2x wd-check-size">
						<FontAwesomeIcon
							icon={faCertificate}
							className="fa-stack-2x text-primary"
						/>
						<FontAwesomeIcon
							icon={faCheck}
							className="fa-stack-1x fa-inverse"
						/>
					</div>
					<div className="ms-2 text-secondary">@{post.handle}</div>
					<div className="ms-2 text-secondary">· {post.time}</div>
				</div>
				<div>{post.title}</div>
				<div className="card mb-3 mt-1">
					<img
						src={`/images/${post.image}`}
						className="card-img-top"
					/>
					<div className="card-body">
						<p className="card-text mb-1">{post.linkTitle}</p>
						<p className="card-text text-secondary">
							{post.linkText}
						</p>
					</div>
				</div>
				<div className="d-flex flex-row align-items-center justify-content-between text-secondary">
					<div>
						<FontAwesomeIcon icon={faComment} />
						<span className="ms-1">{post.comments}</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faRetweet} />
						<span className="ms-1">{post.retweets}</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faHeart} />
						<span className="ms-1">{post.likes}</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faArrowUpFromBracket} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeItem;
