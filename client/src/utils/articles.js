import axios from "axios";

export default {
  getArticles: function(req, res) {
    console.log('returning articles from database')
    return axios
      .get('/api/articles')
    
  } 
};

