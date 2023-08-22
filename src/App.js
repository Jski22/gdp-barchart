import './App.css';
import React, { useEffect, useState, useRef } from "react";
import * as d3 from 'd3';

const App = () => {
  const [data, setData] = useState([]);

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

  const svgRef = useRef();

  useEffect(() => {

    const minX = d3.min(data, (d) => d[1]);
    const maxX = d3.max(data, (d) => d[1]);

    const scale = d3.scaleLinear()
                    .domain([minX, maxX])
                   
    console.log(scale)
    
  }, [data]); 

  //console.log(data[0][1])
     
  return (
    <div ref={svgRef} className="App">
    </div>
  );
}

export default App;
