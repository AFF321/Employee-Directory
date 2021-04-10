import React, { Component } from "react";
import NavTabs from "../components/NavTabs";
import Peopledata from "../components/Peopledata";
import API from "../util/api";


class Home extends Component{
  state={
    results:[],
    error:""};

    
componentDidMount() {
  this.getpeople()
}
getpeople = () => {
  API.people()
    .then(res =>
      this.setState({
        results: res.data.message
       })
    )
    .catch(err => console.log(err));
};
render() {
  return (
<div>
 <NavTabs/>
 <Peopledata />
</div>
  )}



};
export default Home;
