import * as d3 from "d3";
import React, { Component } from 'react';
import input_data from "../../전국검색_후기준.csv";

class CountrySearch2 extends React.Component {
    componentDidMount() {
        this.barChart();
    }
    render() {

        return (
            <div>
                <h3 style={{marginLeft:'10px'}}>검색건수</h3>
                <div id="my_dataviz"></div>
            </div>
        );
    }
    barChart() {
        const margin = { top: 20, right: 30, bottom: 80, left: 50 },
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
            const groups = data.map(d => d.시도명)

            //console.log(groups) //시도명

            // Add X axis
            const x = d3.scaleLinear()
                .domain([0, d3.max(data, d => +d['코로나 전'])])
                .range([0, width])
            svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x).tickSize(0))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end")

            // Add Y axis
            const y = d3.scaleBand()
                .domain(groups)
                .range([height, 0])
                .padding([0.2]);
            svg.append("g")
                .call(d3.axisLeft(y));

            // Another scale for subgroup position?
            const ySubgroup = d3.scaleBand()
                .domain(subgroups)
                .range([0, y.bandwidth()])
                .padding([0.05])

            // color palette = one color per subgroup
            const color = d3.scaleOrdinal()
                .domain(subgroups)
                .range(['#A4A4A4', '#084B8A'])

            // Show the bars
            svg.append("g")
                .selectAll("g")
                // Enter in data = loop group per group
                .data(data)
                .join("g")
                .attr("transform", d => `translate(0,${y(d.시도명)})`)
                .selectAll("rect")
                .data(function (d) { return subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
                .join("rect")
                .transition()
                .duration(1000)
                .attr("x", x(0))
                .attr("y", d => ySubgroup(d.key))
                .attr("width", d => x(d.value))
                .attr("height", d => ySubgroup.bandwidth())
                .attr("fill", d => color(d.key));

        })


    }
}

export default CountrySearch2;