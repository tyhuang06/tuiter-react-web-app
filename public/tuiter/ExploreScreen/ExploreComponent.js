import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
	return `
        <div class="wd-searchbar mb-2">
            <i class="fa-solid fa-magnifying-glass wd-search-icon text-secondary ms-2"></i>
            <input type="text" placeholder="Search Twitter" class="form-control rounded-5 ps-5">
            <i class="fa-solid fa-gear fa-xl mx-3 text-primary"></i>
        </div>
        <ul class="nav nav-tabs mb-2 d-flex justify-content-between">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-flex">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative mb-2">
            <img src="../assets/starship.jpg" class="card-img-top rounded-0">
            <div class="position-absolute bottom-0 fs-3 ms-2">
                <p class="mb-1 wd-overlay-text">SpaceX's Starship</p>
            </div>
        </div>
        ${PostSummaryList()}
    `;
};

export default ExploreComponent;
