const bcrypt = require("bcrypt");

const generatePassword = async (password, key) => {
    const salt = await bcrypt.genSalt(key);
    const hash = await bcrypt.hash(password, salt);

    return await hash;
};

module.exports = generatePassword;
