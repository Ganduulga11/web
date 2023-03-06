const errorHandling = (err, requeust, response, next) => {
    console.log(err.message);

    response.status(500).json({ error: err.message });
};

module.exports = errorHandling;
