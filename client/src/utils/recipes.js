import axios from "axios";

export default {
  displayRecipes: function() {
    console.log('grabbing recipes from the database')
    return axios
      .get('/api/recipes');
  }
};

