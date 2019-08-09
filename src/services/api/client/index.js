import axios from "axios";
import { constants } from "../../../config";
import errorHandler from "./errorHandler";

const instance = axios.create({
    baseURL: constants.BASE_URL
});

instance.interceptors.response.use(response => response.data, errorHandler);

export default instance;
