import WhoToFollowListItem from './WhoToFollowListItem.js';
import who from './who.js';

const WhoToFollowList = () => {
	return `
        <ul class="wd-follow-list list-group rounded-2">
            <li class="list-group-item fw-bold">
                Who to follow
            </li>
            ${who
				.map((who) => {
					return WhoToFollowListItem(who);
				})
				.join('')}
        </ul>
    `;
};

export default WhoToFollowList;
