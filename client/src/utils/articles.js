import axios from "axios";

export default {
  getArticles: function() {
    console.log('accessing articles from api route')
    return axios
      .get('/api/articles')
    
  } 
};

