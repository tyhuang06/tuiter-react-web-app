import React from 'react';
import postsArray from './posts.json';
import HomeItem from './home-item';

const HomeComponentOld = () => {
	return (
		<ul className="list-group list-group-flush">
			{postsArray.map((post) => (
				<HomeItem key={post._id} post={post} />
			))}
		</ul>
	);
};

export default HomeComponentOld;
