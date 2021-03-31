const axios = require('axios')
require('dotenv').config()

module.exports = async function() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines\?country\=fr\&category\=science\&pageSize\=3\&apiKey\=${process.env.newsapi_api_key}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }