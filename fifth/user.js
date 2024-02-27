const axios = require('axios');

const getUser = async (username) => {
	const url = `https://api.github.com/users/${username}`;
	const response = await axios.get(url);
	return response.data;
};

module.exports = getUser;