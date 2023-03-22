import React from 'react';
import '../home/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCertificate,
	faCheck,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import TuitStats from './tuit-stats';
import { useDispatch } from 'react-redux';
import { deleteTuit } from '../reducers/tuits-reducer';

const TuitItem = ({ post }) => {
	const dispatch = useDispatch();

	const deleteTuitHandler = (id) => {
		dispatch(deleteTuit(id));
	};

	return (
		<div className="list-group-item d-flex flex-row w-100">
			<img
				src={`/images/${post.image}`}
				alt=""
				height="48px"
				width="48px"
				className="rounded-circle"
			/>
			<div className="d-flex flex-column ms-2 w-100">
				<div className="d-flex flex-row align-items-center">
					<div className="fw-bold">{post.username}</div>
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
					<div className="ms-2 text-secondary">{post.handle}</div>
					<div className="ms-2 text-secondary">· {post.time}</div>
					<FontAwesomeIcon
						icon={faXmark}
						className="ms-auto text-secondary"
						onClick={() => deleteTuitHandler(post._id)}
					/>
				</div>
				<div>{post.tuit}</div>
				<TuitStats post={post} />
			</div>
		</div>
	);
};

export default TuitItem;
