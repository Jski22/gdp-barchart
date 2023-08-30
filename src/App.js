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
  const w = 1200;

  useEffect(() => {
    const h = 500;
    const p = 15;

    //const minX = d3.min(data, (d) => parseInt(d[0]));
    const maxX = d3.count(data, (d) => d[1]);

    const minY = d3.min(data, (d) => d[1]);
    const maxY = d3.max(data, (d) => d[1]);

    console.log(maxY)

    const xScale = d3.scaleLinear()
                    .domain([0, maxX])
                    .range([p, w - p]);

    const yScale = d3.scaleLinear()
                    .domain([minY, maxY])
                    .range([h - p, p]);
                  
    const svg = d3.select(".chart-svg");

      svg.selectAll("rect")
         .data(data)
         .enter()
         .append("rect")
         .attr("x", (d, i) => xScale(i))
         .attr("y", (d) => yScale(d[1]))
         .attr("width", 3)
         .attr("height", (d) => d[1]);

    const yAxis = d3.axisLeft(yScale);

      svg.append("g")
         .attr("transform", "translate(" + 20 + ",0)")
         .style("padding-left", "20px")
         .call(yAxis);
    
  }, [data]); 

     
  return (
    <div ref={svgRef} className="App">
      <svg className="chart-svg" width={w} />
    </div>
  );
}

export default App;
