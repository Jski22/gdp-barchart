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
    let displayDate = d3.timeFormat("%B %Y");
    let formatDate = d3.timeFormat("%Y-%m-%d");
    let dates = [];
    for (let d of data) {
      dates.push(parseDate(d[0]));
    }

    let domain = d3.extent(dates);

    const maxY = d3.max(data, (d) => d[1]);

    const xScale = d3.scaleTime()
                    .domain(domain)
                    .range([40, w - p]);

    const yScale = d3.scaleLinear()
                    .domain([0, maxY])
                    .range([h, p]);
                  
    const svg = d3.select(".chart-svg");

      svg.append("text")
         .attr("x", 405)
         .attr("y", 60)
         .attr("id", "title")
         .style("font-size", "2.5rem")
         .style("font-family", "Courier")
         .text("United States GDP");

      svg.selectAll("rect")
         .data(data)
         .enter()
         .append("rect")
         .attr("x", (d) => xScale(parseDate(d[0])))
         .attr("data-date", (d) => formatDate(parseDate(d[0])))
         .attr("y", (d) => yScale(d[1]))
         .attr("data-gdp", (d) => d[1])
         .attr("width", 3)
         .attr("height", (d) => yScale(maxY - d[1]) - p)
         .attr("class", "bar")
    
    const yAxis = d3.axisLeft(yScale);
    const xAxis = d3.axisBottom(xScale);

      svg.append("g")
         .attr("id", "y-axis")
         .attr("transform", "translate(40,0)")
         .call(yAxis);

      svg.append("text")
         .attr("transform", "rotate(-90 100 100)")
         .attr("x", 35)
         .attr("y", 65)
         .style("text-anchor", "middle")
         .style("font-size", "1rem")
         .text("Gross Domestic Product")

      svg.append("g")
         .attr("id", "x-axis")
         .attr("transform", "translate(0," + h + ")")
         .call(xAxis);

    let tooltip = d3
         .select("svg")
         .append("div")
         .attr("class", "tooltip")
         .attr("id", "tooltip")
         .style("opacity", 0);
      
  }, [data]); 

     
  return (
    <div ref={svgRef} className="App">
      <svg className="chart-svg" width="1200px">
      </svg>
    </div>
  );
}

export default App;
