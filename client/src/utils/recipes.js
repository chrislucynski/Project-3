import axios from "axios";

export default {
  getStoredRecipes: function() {
    console.log('grabbing recipes from the database')
    return axios
      .get('/api/recipes');
  }
};

