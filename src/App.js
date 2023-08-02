import './App.css';
import React, { useEffect, useState } from "react"
import * as d3 from 'd3';

const App = () => {
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data[0])

  /*let jsondata;    
  .then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
        }
      )

  console.log(jsondata)*/

     
  return (
    <div className="App">
      <body>
        <h1>United States GDP</h1>
        <div id="test">
        </div>
      </body>
    </div>
  );
}

export default App;
