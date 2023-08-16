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

    d3.select(svgRef.current)
      .enter()
      .append("h1")
      .join("h1")
      .text("United States GDP")
  }, []);
     
  return (
    <div ref={svgRef} className="App">
    </div>
  );
}

export default App;
