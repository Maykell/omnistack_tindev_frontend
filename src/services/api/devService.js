import client from "./client";

const create = username => {
    return client(
        {
            url: "devs",
            method: "POST",
            data: {
                username: username
            }
        }
        //{ errorHandle: false }
    );
};

const findAll = id => {
    return client({
        url: `devs/${id}`,
        method: "GET"
    });
};

const like = (from, to) => {
    return client({
        url: "devs-likes",
        method: "POST",
        data: {
            from: from,
            to: to
        }
    });
};

const dislike = (from, to) => {
    return client({
        url: "devs-dislikes",
        method: "POST",
        data: {
            from: from,
            to: to
        }
    });
};

export default { create, findAll, like, dislike };
