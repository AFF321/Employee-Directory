import React, { Component } from "react";

function Peopledata(props) {
   
    
  return (
    <table className="ml-5">
    <caption> Our Team!</caption>
    <thead>
        <th>Image</th>
        <th > <button type="button" >
          Name
        </button></th>
        <th>Email</th>
        <th>Phone number</th>
   </thead>
    <tbody>
{props.results.map(result =>(
   <tr key={result.id.value}>   
  <img className="mr-5"alt="" src={result.picture.thumbnail}></img>
  <td className="ml-5">{result.name.first} {result.name.last}</td>
  <td className="ml-5">{result.email}</td>
  <td className="ml-5">{result.phone}</td>
  </tr>))}
</tbody>
</table>
  );
}

export default Peopledata;
