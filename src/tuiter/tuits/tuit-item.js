import React from 'react';
import '../home/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faRetweet,
    faArrowUpFromBracket,
    faCertificate,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import TuitStats from "./tuit-stats";

const TuitItem = ({ post }) => {
    return (
        <div className="list-group-item d-flex flex-row">
            <img
                src={ `/images/${ post.image }` }
                alt=""
                height="48px"
                width="48px"
                className="rounded-circle"
            />
            <div className="d-flex flex-column ms-2">
                <div className="d-flex flex-row align-items-center">
                    <div className="fw-bold">{ post.userName }</div>
                    <div className="fa-stack fa-2x wd-check-size">
                        <FontAwesomeIcon
                            icon={ faCertificate }
                            className="fa-stack-2x text-primary"
                        />
                        <FontAwesomeIcon
                            icon={ faCheck }
                            className="fa-stack-1x fa-inverse"
                        />
                    </div>
                    <div className="ms-2 text-secondary">@{ post.handle }</div>
                    <div className="ms-2 text-secondary">· { post.time }</div>
                </div>
                <div>{ post.tuit }</div>
                <TuitStats post={ post }/>
            </div>
        </div>
    );
};

export default TuitItem;
