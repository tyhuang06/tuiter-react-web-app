import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faComment,
	faHeart,
	faThumbsDown as faThumbsDownRegular,
} from '@fortawesome/free-regular-svg-icons';
import {
	faHeart as faHeartSolid,
	faRetweet,
	faShareNodes,
	faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import { updateTuitThunk } from '../../services/tuits-thunks';
import { useDispatch } from 'react-redux';

const TuitStats = ({ post }) => {
	const dispatch = useDispatch();

	const likeHandler = () => {
		if (post.liked) {
			dispatch(
				updateTuitThunk({
					...post,
					liked: false,
					likes: post.likes - 1,
				})
			);
		} else {
			dispatch(
				updateTuitThunk({ ...post, liked: true, likes: post.likes + 1 })
			);
		}
	};

	const dislikeHandler = () => {
		if (post.disliked) {
			dispatch(
				updateTuitThunk({
					...post,
					disliked: false,
					dislikes: post.dislikes - 1,
				})
			);
		} else {
			dispatch(
				updateTuitThunk({
					...post,
					disliked: true,
					dislikes: post.dislikes + 1,
				})
			);
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
			<div onClick={likeHandler}>
				{post.liked ? (
					<FontAwesomeIcon
						icon={faHeartSolid}
						className="text-danger"
					/>
				) : (
					<FontAwesomeIcon icon={faHeart} />
				)}
				<span className="ms-1">{post.likes}</span>
			</div>
			<div onClick={dislikeHandler}>
				{post.disliked ? (
					<FontAwesomeIcon icon={faThumbsDown} />
				) : (
					<FontAwesomeIcon icon={faThumbsDownRegular} />
				)}
				<span className="ms-1">{post.dislikes}</span>
			</div>
			<div>
				<FontAwesomeIcon icon={faShareNodes} />
			</div>
		</div>
	);
};

export default TuitStats;
