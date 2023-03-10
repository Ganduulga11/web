const errorHandling = (err, request, response, next) => {
    console.log(err.message);

    response.status(500).json({ error: err.message });
};

module.exports = errorHandling;
