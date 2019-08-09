import React from "react";
import { images } from "../../config";
import "./styles.css";

const ListItemDev = props => {
    const { item, handleLike, handleDislike } = props;

    return (
        <li>
            <img src={item.avatar} alt={item.avatar} />
            <footer>
                <strong>{item.name}</strong>
                <p>{item.bio}</p>
            </footer>
            <div className="buttons">
                <button type="button" onClick={() => handleDislike(item._id)}>
                    <img src={images.dislike} alt="dislike" />
                </button>
                <button type="button" onClick={() => handleLike(item._id)}>
                    <img src={images.like} alt="like" />
                </button>
            </div>
        </li>
    );
};

export default ListItemDev;
