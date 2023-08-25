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
    /*const minX = d3.min(data, (d) => parseInt(d[0]));
    const maxX = d3.max(data, (d) => parseInt(d[0]));

    const minY = d3.min(data, (d) => d[1]);
    const maxY = d3.max(data, (d) => d[1]);

    const scale = d3.scaleLinear()
                    .domain([minY, maxY])
                    .range([20, 200]) */
                  

    const svg = d3.select(".chart-svg")

      svg.selectAll("rect")
         .data(data, (d) => d[1])
         .enter()
         .append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("width", 25)
         .attr("height", 100)
    
  }, [data]); 

     
  return (
    <div ref={svgRef} className="App">
      <svg className="chart-svg" />
    </div>
  );
}

export default App;
