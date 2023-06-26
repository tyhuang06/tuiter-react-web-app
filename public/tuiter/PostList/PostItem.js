const PostItem = (post) => {
	return `
        <div class="list-group-item bg-black d-flex flex-row">
            <img src="${post.userAvatar}" alt="" height="48px" width="48px" class="rounded-circle">
            <div class="d-flex flex-column ms-2">
                <div class="d-flex flex-row align-items-center">
                    <div class="fw-bold">${post.userName}</div>
                    <div class="fa-stack fa-2x small">
                        <i class="fa-solid fa-certificate fa-stack-2x"></i>
                        <i class="fa-solid fa-check fa-inverse fa-stack-1x"></i>
                    </div>
                    <div class="ms-2 text-secondary">@${post.handle}</div>
                    <div class="ms-2 text-secondary">· ${post.time}</div>
                </div>
                <div>${post.title}</div>
                <div class="card border-light bg-black mb-3 mt-1">
                    <img src="${post.img}" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text mb-1">${post.linkTitle}</p>
                        <p class="card-text text-secondary">${post.linkText}</p>
                    </div>
                </div>
                <div class="d-flex flex-row align-items-center justify-content-between text-secondary">
                    <div>
                        <i class="fa-regular fa-comment"></i>
                        <span class="ms-1">${post.comments}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-retweet"></i>
                        <span class="ms-1">${post.retweets}</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-heart"></i>
                        <span class="ms-1">${post.likes}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export default PostItem;
