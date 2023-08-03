import './App.css';
import React, { useEffect, useState } from "react";
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

  const testElement = d3.select('body')
                        .append('h2')
                        .text('United States GDP');

  
     
  return (
    <div className="App">
      <body>
        {testElement}
        <div id="test">
        </div>
      </body>
    </div>
  );
}

export default App;
