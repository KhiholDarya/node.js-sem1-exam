const axios = require('axios');

const getReposInfo = async (username) => {
	const url = `https://api.github.com/users/${username}/repos`;
	const response = await axios.get(url);
	return response.data;
};



module.exports = getReposInfo;