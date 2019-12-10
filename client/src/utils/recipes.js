import axios from "axios";
// const BASEURL = "https://api.edamam.com/search";
// const APIID = "31e044be"
// const APIKEY = "d6ebdc1885479c059c6cf874379dd687";

export default {
  search: function() {
    return axios.get('https://api.edamam.com/search?q=cookies&app_id=31e044be&app_key=d6ebdc1885479c059c6cf874379dd687&from=0&to=3&calories=591-722&health=alcohol-free');
  }
};

