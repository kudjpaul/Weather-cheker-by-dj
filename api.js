const axios = require('axios');

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return null;
  }
};

module.exports = fetchData;
