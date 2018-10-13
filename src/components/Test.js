import React from "react";
 
const Test = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);
 
export default Test;