import React, { Component } from "react";
import NavTabs from "../components/NavTabs";
import Peopledata from "../components/Peopledata";
import API from "../util/API";

class Home extends Component{
  state={
    results:[],
    error:"",
    currentSort:"default"
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

  onSort(event, sortKey){
    const results = this.state.results;
    results.sort((a,b) => a.name.first.localeCompare(b.name.first))
    this.setState({results})
  }


render() {

  return (
<div>
 <NavTabs/>
 <table className="ml-5">
    <caption> Our Team!</caption>
    <thead>
        <th>Image</th>
        <th > <button type="button"onClick={e => this.onSort(e, 'name')} >
          Name
        </button></th>
        <th>Email</th>
        <th>Phone number</th>
   </thead>
    <tbody>
{this.state.results.map(result =>(
   <tr key={result.id.value}>   
  <img className="mr-5"alt="" src={result.picture.thumbnail}></img>
  <td className="ml-5">{result.name.first} {result.name.last}</td>
  <td className="ml-5">{result.email}</td>
  <td className="ml-5">{result.phone}</td>
  </tr>))}
</tbody>
</table>
</div>
)}

  }
export default Home;
