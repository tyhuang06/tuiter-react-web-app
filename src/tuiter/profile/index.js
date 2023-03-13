import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCakeCandles, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const profileInfo = useSelector(state => state.profile);
    const navigate = useNavigate();

    return (
        <div className="border-start border rounded-1">
            <div className="d-flex flex-row align-items-center mb-2">
                <Link to={ `/tuiter` }>
                    <FontAwesomeIcon icon={ faArrowLeft } className="mx-3 my-auto text-black"/>
                </Link>
                <div className="d-flex flex-column ms-2">
                    <div className="fs-5 fw-bold">{ profileInfo.firstName } { profileInfo.lastName }</div>
                    <div className="text-secondary small_font">6, 114 tweets</div>
                </div>
            </div>

            <img src={ `/images/${ profileInfo.bannerPicture }` } alt="" width="100%" height="300px"/>
            <div className="position-relative">
                <img src={ `/images/${ profileInfo.profilePicture }` } alt="" width="150px" height="150px"
                     className="profile_pic rounded-circle position-absolute"/>
            </div>

            <div className="d-flex flex-row justify-content-end my-2 w-100">
                <button type="button"
                        className="btn border border-secondary-subtle text-black rounded-pill me-2">
                    Edit Profile
                </button>
            </div>
            <div className="d-flex flex-column mx-3 mt-5 mb-3">
                <div>
                    <div className="fw-bold lh-sm">{ profileInfo.firstName } { profileInfo.lastName }</div>
                    <div className="text-secondary small_font lh-sm">{ profileInfo.handle }</div>
                </div>
                <div className="mt-2">
                    { profileInfo.bio }
                </div>
                <div className="mt-2 text-secondary d-flex flex-row align-items-center">
                    <div className="me-4">
                        <FontAwesomeIcon icon={ faLocationDot }/>
                        <span className="ms-1">{ profileInfo.location }</span>
                    </div>
                    <div className="me-4">
                        <FontAwesomeIcon icon={ faCakeCandles }/>
                        <span className="ms-1">Born { profileInfo.dateOfBirth }</span>
                    </div>
                    <div className="me-4">
                        <FontAwesomeIcon icon={ faCalendar }/>
                        <span className="ms-1">Joined { profileInfo.dateJoined }</span>
                    </div>
                </div>
                <div className="mt-2 text-secondary d-flex flex-row align-items-center">
                    <div className="me-4">
                        <span className="fw-bold text-black">{ profileInfo.following }</span> Following
                    </div>
                    <div className="me-4">
                        <span className="fw-bold text-black">{ profileInfo.followers }</span> Followers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;