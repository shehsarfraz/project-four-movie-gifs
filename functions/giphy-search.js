
const axios = require('axios');
const handler = async (event) => {
    const giphy_key = 'eQ4TwuU0VsAbLctRXychU3MD9aPSRmtr';
    const endpoint = `https://api.giphy.com/v1/gifs/search?`;
    const {keyword, limit, offset, rating, lang} = event.queryStringParameters ;
    const params = `&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`;
    const giphy_url = `${endpoint}api_key=${giphy_key}${params}`
  
 try{
  const { data } = await axios.get(giphy_url);
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
 }catch(error){
  const { status, statusText, headers, data } = error.response;
  return {
    statusCode: status,
    body: JSON.stringify({status, statusText, headers, data})
  }
 }
}

module.exports = { handler }