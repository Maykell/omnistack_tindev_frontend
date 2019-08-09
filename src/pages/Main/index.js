import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../config";
import { ListDev, ListEmpty } from "../../components";

import "./styles.css";

import { devService } from "../../services/api";

const Main = ({ match }) => {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        _loadDevs(match.params.id);
    }, [match.params.id]);

    const _loadDevs = async id => {
        const devs = await devService.findAll(id);
        setDevs(devs);
    };

    const _handleLike = async id => {
        const response = await devService.like(match.params.id, id);
        if (response !== null) {
            setDevs(devs.filter(dev => dev._id !== id));
        }
    };

    const _handleDislike = async id => {
        const response = await devService.dislike(match.params.id, id);
        if (response !== null) {
            setDevs(devs.filter(dev => dev._id !== id));
        }
    };

    return (
        <div className="main-container">
            <Link to="/">
                <img src={images.logo} alt="Tindev" />
            </Link>
            {devs.length > 0 ? (
                <ListDev
                    items={devs}
                    handleLike={_handleLike}
                    handleDislike={_handleDislike}
                />
            ) : (
                <ListEmpty message="Por hoje é só! :(" />
            )}
        </div>
    );
};

export default Main;
