import React from 'react';
import TuitItem from '../tuits/tuit-item';
import { useSelector } from "react-redux";

const TuitsList = () => {
    const postsArray = useSelector((state) => state.tuits);

    return (
        <ul className="list-group">
            { postsArray.map((post) => (
                <TuitItem key={ post._id } post={ post }/>
            )) }
        </ul>
    );
};

export default TuitsList;