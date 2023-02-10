const NavigationSidebar = () => {
	return `
    <div class="list-group">
        <a href="../home.html" class="list-group-item list-group-item-action">
            <i class="fa-sharp fa-solid fa-house-chimney"></i>
            <span class="ms-1 d-none d-xl-inline">Home</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            <i class="fa-regular fa-hashtag"></i>
            <span class="ms-1 d-none d-xl-inline">Explore</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-regular fa-bell"></i>
            <span class="ms-1 d-none d-xl-inline">Notifications</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-regular fa-envelope"></i>
            <span class="ms-1 d-none d-xl-inline">Messages</span>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
            <i class="fa-regular fa-bookmark"></i>
            <span class="ms-1 d-none d-xl-inline">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-fire"></i>
            <span class="ms-1 d-none d-xl-inline">Top Articles</span>
        </a>
        <a href="../profile.html" class="list-group-item list-group-item-action">
            <i class="fa-regular fa-user"></i>
            <span class="ms-1 d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-ellipsis"></i>
            <span class="ms-1 d-none d-xl-inline">More</span>
        </a>
    </div>
    <div class="d-grid mt-2">
        <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
    </div>
    `;
};
export default NavigationSidebar;
