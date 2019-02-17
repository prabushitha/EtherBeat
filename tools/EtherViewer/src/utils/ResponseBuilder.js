const handleResponse = (response, data, status) => {
    response.status(status).send(data);
};

module.exports = {handleResponse};