import React, { useState } from "react";
import input_data from "./seoul.csv";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import "./BusanLine.css";


class SeoulBar_After extends React.Component {
  componentDidMount() {
    this.renderMultiChart();
  }
  render() {
    return (
      <>
        <div className="App">
          <h3>유형별 코로나 전후 비교</h3>
          <div id="my_dataviz" />
        </div>
      </>
    );
  }
  renderMultiChart() {
    // set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 80, left: 80 },
      width = 460 - margin.left - margin.right,
      height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("class", "test")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Parse the Data
    d3.csv(input_data).then(function (data) {

      // List of subgroups = header of the csv files = soil condition here
      const subgroups = data.columns.slice(1)

      // List of groups = species here = value of the first column called group -> I show them on the X axis
      const groups = data.map(d => d.group)


      // Add X axis
      const x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSize(0));

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d['before'])])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // Another scale for subgroup position?
      const xSubgroup = d3.scaleBand()
        .domain(subgroups)
        .range([0, x.bandwidth()])
        .padding([0.05])

      // color palette = one color per subgroup
      const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#A4A4A4', 'blue'])

      // Show the bars
      svg.append("g")
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => `translate(${x(d.group)}, 0)`)
        .selectAll("rect")
        .data(function (d) { return subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
        .join("rect")
        .transition()
        .duration(1000)
        .attr("x", d => xSubgroup(d.key))
        .attr("y", d => y(d.value))
        .attr("width", xSubgroup.bandwidth())
        .attr("height", d => height - y(d.value))
        .attr("fill", d => color(d.key));


    })


  }
}

export default SeoulBar_After;