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
    const w = 1200;
    const h = 450;
    const p = 15;

    let parseDate = d3.timeParse("%Y-%m-%d");
    let dates = [];
    for (let d of data) {
      dates.push(parseDate(d[0]));
    }

    let domain = d3.extent(dates);

    const testX = d3.min(data, (d) => parseDate(d[0]));

    //const minX = d3.min(data, (d) => parseInt(d[0]));
    const maxX = d3.count(data, (d) => parseInt(d[0]));

    //const minY = d3.min(data, (d) => d[1]);
    const maxY = d3.max(data, (d) => d[1]);

    const xScale = d3.scaleTime()
                    .domain(domain)
                    .range([40, w - p]);

    const yScale = d3.scaleLinear()
                    .domain([0, maxY])
                    .range([h, p]);
                  
    const svg = d3.select(".chart-svg");

      svg.selectAll("rect")
         .data(data)
         .enter()
         .append("rect")
         .attr("x", (d) => xScale(parseDate(d[0])))
         .attr("y", (d) => yScale(d[1]))
         .attr("width", 3)
         .attr("height", (d) => yScale(maxY - d[1]) - p);

    const yAxis = d3.axisLeft(yScale);
    const xAxis = d3.axisBottom(xScale);

      svg.append("g")
         .attr("transform", "translate(40,0)")
         .call(yAxis);

      svg.append("g")
         .attr("transform", "translate(0," + h + ")")
         .call(xAxis);
    
  }, [data]); 

     
  return (
    <div ref={svgRef} className="App">
      <h1>US GDP</h1>
      <svg className="chart-svg" width="1200px" />
    </div>
  );
}

export default App;
