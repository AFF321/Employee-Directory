import axios from "axios";


export default {
    people: function(){
        console.log('hello')
        return axios.get('https://randomuser.me/api/?results=20')
    }
  };

