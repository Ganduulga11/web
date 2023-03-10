const database = require("../../config/database");

const getUser = async (username) => {
    const result = await database.query(
        `SELECT * FROM user WHERE user_name = '${username}' LIMIT 1`,
        (err, res) => {
            if (err) {
                const error = {
                    err: err.message,
                };
                return error;
            }

            if (res[0].length > 0 || res[0] != null || res[0] != undefined) {
                return res[0];
            }

            return null;
        }
    );

    return result;
};

module.exports = {
    getUser,
};
