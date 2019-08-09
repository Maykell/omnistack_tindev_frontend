import React from "react";

import ListItemDev from "../ListItemDev";

import "./styles.css";

const ListDev = props => {
    const { items, handleLike, handleDislike } = props;

    return (
        <ul>
            {items.map(item => (
                <ListItemDev
                    key={item._id}
                    item={item}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                />
            ))}
        </ul>
    );
};

export default ListDev;
