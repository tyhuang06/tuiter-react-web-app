import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateProfile } from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const profileInfo = useSelector(state => state.profile);

    let [firstName, setFirstName] = useState(profileInfo.firstName);
    let [lastName, setLastName] = useState(profileInfo.lastName);
    let [bio, setBio] = useState(profileInfo.bio);
    let [website, setWebsite] = useState(profileInfo.website);
    let [location, setLocation] = useState(profileInfo.location);
    let [dateOfBirth, setDateOfBirth] = useState(profileInfo.dateOfBirth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveHandler = () => {
        const updatedProfile = {
            ...profileInfo,
            firstName,
            lastName,
            bio,
            website,
            location,
            dateOfBirth
        }

        dispatch(updateProfile(updatedProfile));

        navigate('/tuiter/profile', { replace: true });
    }

    return (
        <div className="border-start border rounded-1">
            <form className="">
                <div className="d-flex flex-row align-items-center my-2">
                    <Link to={ `/tuiter/profile` }>
                        <FontAwesomeIcon icon={ faXmark } className="mx-3 my-auto text-black"/>
                    </Link>
                    <div className="d-flex flex-column ms-2">
                        <div className="fs-5 fw-bold">Edit Profile</div>
                    </div>
                    <button type="button" className="btn btn-dark ms-auto me-2 rounded-pill px-3"
                            onClick={ saveHandler }>
                        Save
                    </button>
                </div>

                <div className="position-relative bg-black">
                    <img src={ `/images/${ profileInfo.bannerPicture }` } alt="" width="100%" height="300px"
                         className="opacity-75"/>
                    <div className="position-absolute overlay top-50 start-50 translate-middle">
                        <button type="button" className="btn btn-dark rounded-circle opacity-50">
                            <FontAwesomeIcon icon={ faCameraRetro } className="text-white"/>
                        </button>
                        <button type="button" className="btn btn-dark rounded-circle opacity-50 ms-2 ">
                            <FontAwesomeIcon icon={ faXmark } className="text-white"/>
                        </button>
                    </div>
                </div>
                <div className="position-relative mb-5">
                    <div className="profile_pic position-absolute rounded-circle bg-black">
                        <img src={ `/images/${ profileInfo.profilePicture }` } alt="" width="150px" height="150px"
                             className="rounded-circle opacity-75"/>
                        <div className="position-absolute overlay top-50 start-50 translate-middle">
                            <button type="button" className="btn btn-dark rounded-circle opacity-50">
                                <FontAwesomeIcon icon={ faCameraRetro } className="text-white"/>
                            </button>
                        </div>
                    </div>

                </div>


                <div className="edit-profile-form mx-3">
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingInput" value={ firstName }
                               onChange={ event => setFirstName(event.target.value) }/>
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingInput" value={ lastName }
                               onChange={ event => setLastName(event.target.value) }/>
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating mb-2">
                        <textarea className="form-control" id="floatingInput" value={ bio }
                                  onChange={ event => setBio(event.target.value) }></textarea>
                        <label htmlFor="floatingInput">Bio</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingInput" value={ location }
                               onChange={ event => setLocation(event.target.value) }/>
                        <label htmlFor="floatingInput">Location</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingInput" value={ website }
                               onChange={ event => setWebsite(event.target.value) }/>
                        <label htmlFor="floatingInput">Website</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="date" className="form-control" id="floatingInput" value={ dateOfBirth }
                               onChange={ event => setDateOfBirth(event.target.value) }/>
                        <label htmlFor="floatingInput">Birth date</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfileComponent;