import React, { Component } from "react";
import NavTabs from "../components/NavTabs";
import Peopledata from "../components/Peopledata";
import API from "../util/API";


class Home extends Component{
  state={
    results:[],
    error:"",
    key:"",
    direction:""
  };

    
componentDidMount() {
  this.getpeople()
}
getpeople = () => {
  API.people()
    .then(res =>
      this.setState({
        results: res.data.results
       })
    )
    .catch(err => console.log(err));
};

render() {
  return (
<div>
 <NavTabs/>
 <Peopledata results={this.state.results}/>
</div>
  )}



};
export default Home;
