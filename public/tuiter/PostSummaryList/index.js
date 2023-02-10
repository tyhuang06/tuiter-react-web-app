import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';

const PostSummaryList = () => {
	return `
        <div class="card bg-light mb-3">
            <div class="card-body p-0">
                <ul class="list-group list-group-flush">
                    ${posts
						.map((post) => {
							return PostSummaryItem(post);
						})
						.join('')}
                </ul>
            </div>
        </div>
    `;
};

export default PostSummaryList;
