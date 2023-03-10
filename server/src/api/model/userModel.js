const database = require("../../config/database");

const getUser = async (username) => {
    const [rows] = await database.query(
        `SELECT * FROM user WHERE user_name = '${username}' LIMIT 1`
    );

    if (rows[0].length > 0 || rows[0] != null || rows[0] != undefined) {
        return rows[0];
    }

    return null;
};

module.exports = {
    getUser,
};
