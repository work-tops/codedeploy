import React from "react";
import '../CSS/post.css'
function PostPage() {
    return (
        <div className="project_post">
            <small className="descr">Jobs</small>
            <p className="offer_desc">Get High Quality Freelance Services & Offers</p>
            <small className="descr">Looking for Offers and servies ? People per Hour has you covered.</small>
            <input id="search" placeholder="Search" type='text' /><i class="ri-search-line"></i>
        </div>
    )
}
export default PostPage