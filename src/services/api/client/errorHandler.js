const errorHandler = error => {
    // check for errorHandle config
    if (
        error.config.hasOwnProperty("errorHandle") &&
        error.config.errorHandle === false
    ) {
        return Promise.reject(error);
    }

    if (error.response) {
        // Request was made but server responded with something
        // other than 2xx
        switch (error.response.status) {
            case 400:
                alert("Bad Request", "Bad Request (400)");
                break;
            case 401:
                alert(
                    "Não autorizado",
                    "Sua sessão expirou tente novamente mais tarde! (401)"
                );
                break;
            case 404:
                alert("Não encontrado", "Recurso não encontrado! (404)");

                break;
            case 500:
                alert("Servidor", "Ocorreu um erro no servidor! (500)");

                break;
            case 503:
                alert("Servidor", "Servidor indisponível! (503)");
                break;
            default:
                break;
        }

        console.log("STATUS CODE:", error.response.status);
        // console.log("Data:", error.response.data);
        // console.log("Headers:", error.response.headers);
    } else {
        // Something else happened while setting up the request
        // triggered the error
        // NetInfo.isConnected.fetch().then(isConnected => {
        //     if (!isConnected) {
        //         alert(
        //             'Conexão',
        //             'Ops, não há conexão com a internet, verifique a conexão e tente novamente mais tarde...'
        //         );
        //     } else {
        //         if (showError) {
        //             alert(
        //                 'Conexão',
        //                 'Ops, não há conexão com a internet ou o servidor está indisponível no momento, tente novamente mais tarde...'
        //             );
        //         }
        //     }
        // });
    }

    return Promise.reject(error);
};

export default errorHandler;
