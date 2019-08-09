import React, { useState } from "react";
//import { routes } from "../../config";

import { images } from "../../config";
import "./styles.css";

import { devService } from "../../services/api";

const Login = ({ history }) => {
    const [userName, setUserName] = useState("");

    const _onHandleChange = event => {
        setUserName(event.target.value);
    };

    const _onHandleSubmit = async event => {
        event.preventDefault();

        const response = await devService.create(userName);
        const { _id } = response;

        history.push(`/dev/${_id}`);
    };

    return (
        <div className="login-container">
            <form onSubmit={_onHandleSubmit}>
                <img src={images.logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário no Github"
                    value={userName}
                    onChange={_onHandleChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Login;
