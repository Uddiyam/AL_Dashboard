import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

class Line_busan extends React.Component {
  componentDidMount() {
    this.renderMultiChart();
  }
  render() {
    return (
      <div className="App">
        <div id="chart" />
        <div id="Before_After" />
      </div>
    );
  }

  renderMultiChart() {
    let data = [
      {
        name: "코로나 후",
        values: [
          { date: "January", price: "4.20E+11" },
          { date: "February", price: "3.76E+11" },
          { date: "March", price: "3.78E+11" },
          { date: "April", price: "3.83E+11" },
          { date: "May", price: "4.61E+11" },
          { date: "June", price: "4.23E+11" },
          { date: "July", price: "4.24E+11" },
          { date: "August", price: "4.05E+11" },
          { date: "September", price: "3.96E+11" },
          { date: "October", price: "4.50E+11" },
          { date: "November", price: "4.42E+11" },
          { date: "December", price: "3.71E+11" },
        ],
      },
      {
        name: "코로나 전",
        values: [
          { date: "January", price: "5.37E+11" },
          { date: "February", price: "5.20E+11" },
          { date: "March", price: "5.65E+11" },
          { date: "April", price: "5.28E+11" },
          { date: "May", price: "5.68E+11" },
          { date: "June", price: "5.36E+11" },
          { date: "July", price: "5.45E+11" },
          { date: "August", price: "5.63E+11" },
          { date: "September", price: "5.40E+11" },
          { date: "October", price: "5.45E+11" },
          { date: "November", price: "5.39E+11" },
          { date: "December", price: "5.90E+11" },
        ],
      },
    ];

    let height = 500;
    let margin = 50;
    let duration = 250;

    let lineOpacity = "0.25";
    let lineOpacityHover = "0.85";
    let otherLinesOpacityHover = "0.1";
    let lineStroke = "5.5px";
    let lineStrokeHover = "6.5px";

    let circleOpacity = "0.85";
    let circleOpacityOnLineHover = "0.25";
    let circleRadius = 3;
    let circleRadiusHover = 9;
    let color = ["red", "blue"];
    /* Format Data */
    let parseDate = d3.timeParse("%B");
    data.forEach(function (d) {
      d.values.forEach(function (d) {
        d.date = parseDate(d.date);
        d.price = +d.price;
      });
    });

    /* Scale */
    let xScale = d3
      .scaleTime()
      .domain(d3.extent(data[0].values, (d) => d.date))
      .range([0, 580]);

    let yScale = d3.scaleLinear().domain([0, 700000000000]).range([449, 50]);

    /* Add SVG */
    let svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", 800 + "px")
      .attr("height", 500 + "px")
      .attr("fill", "none")
      .append("g")
      .attr("transform", `translate(90,20)`);
    /* Add line into SVG */
    let line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.price));
    let lines = svg.append("g").attr("class", "lines");
    let cl = false;
    lines
      .selectAll(".line-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "line-group")
      .append("path")
      .attr("class", "line")
      .style("stroke-width", lineStroke)
      .attr("d", (d) => line(d.values))
      .style("stroke", (d, i) => {
        if (i === 1) return color[0];
        else return color[1];
      })
      .style("opacity", lineOpacity)
      .on("click", (d, i) => {
        if (i.name === "코로나 전") {
          if (cl) {
            d3.select(".aaa").remove();
            cl = true;
            Before();
          } else Before();
          cl = true;
        } else if (i.name === "코로나 후") {
          if (cl) {
            d3.select(".aaa").remove();
            cl = true;
            After();
          } else After();
          cl = true;
        }
      })
      .on("mouseover", function (d) {
        d3.selectAll(".line").style("opacity", otherLinesOpacityHover);
        d3.selectAll(".circle").style("opacity", circleOpacityOnLineHover);
        d3.select(this)
          .style("opacity", lineOpacityHover)
          .style("stroke-width", lineStrokeHover)
          .style("cursor", "pointer");
      })
      .on("mouseout", function (d) {
        d3.selectAll(".line").style("opacity", lineOpacity);
        d3.selectAll(".circle").style("opacity", circleOpacity);
        d3.select(this)
          .style("stroke-width", lineStroke)
          .style("cursor", "none");
      });

    /* Add circles in the line */
    lines
      .selectAll("circle-group")
      .data(data)
      .enter()
      .append("g")
      .style("fill", (d, i) => {
        if (i === 1) return color[0];
        else return color[1];
      })
      .selectAll("circle")
      .data((d) => d.values)
      .enter()
      .append("g")
      .attr("class", "circle")
      .on("mouseover", function (d, i) {
        d3.select(this)
          .style("cursor", "pointer")
          .append("text")
          .attr("class", "text")
          .style("font-size", "0.9em")
          .text(`${i.price}`)
          .attr("x", (d) => xScale(d.date) + 5)
          .attr("y", (d) => yScale(d.price) - 10);
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("cursor", "none")
          .transition()
          .duration(duration)
          .selectAll(".text")
          .remove();
      })
      .append("circle")
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yScale(d.price))
      .attr("r", circleRadius)
      .style("opacity", circleOpacity)
      .on("mouseover", function (d) {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadiusHover);
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().duration(duration).attr("r", circleRadius);
      });

    lines
      .append("text")
      .style("font-size", "0.8em")
      .attr("transform", "translate(" + 590 + "," + 235 + ")")
      .attr("dy", ".500em")
      .attr("text-anchor", "start")
      .style("fill", "blue")
      .text("코로나 후");

    lines
      .append("text")
      .style("font-size", "0.8em")
      .attr("transform", "translate(" + 590 + "," + 110 + ")")
      .attr("dy", ".500em")
      .attr("text-anchor", "start")
      .style("fill", "red")
      .text("코로나 전");

    /* Add Axis into SVG */
    let xAxis = d3.axisBottom(xScale).ticks(12);
    let yAxis = d3.axisLeft(yScale).ticks(8);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${height - margin})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("class", "x axis")
      .call(yAxis)
      .append("text")
      .style("font-size", "2em")
      .attr("y", 15)
      .attr("x", 400)
      .attr("fill", "#000")
      .text("유형별 소비");
    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("y", 15)
      .attr("x", -45)
      .attr("transform", "rotate(-90)")
      .attr("fill", "#000")
      .text("소비금액");
  }
}
function Before() {
  let data = [
    {
      name: "여행업",
      values: [
        { date: "January", price: "5.92E+08" },
        { date: "February", price: "6.25E+08" },
        { date: "March", price: "6.09E+08" },
        { date: "April", price: "6.73E+08" },
        { date: "May", price: "6.58E+08" },
        { date: "June", price: "5.51E+08" },
        { date: "July", price: "7.43E+08" },
        { date: "August", price: "5.72E+08" },
        { date: "September", price: "4.87E+08" },
        { date: "October", price: "7.35E+08" },
        { date: "November", price: "6.19E+08" },
        { date: "December", price: "8.10E+08" },
      ],
    },
    {
      name: "운송업",
      values: [
        { date: "January", price: "1.36E+10" },
        { date: "February", price: "1.00E+10" },
        { date: "March", price: "1.08E+10" },
        { date: "April", price: "1.13E+10" },
        { date: "May", price: "1.16E+10" },
        { date: "June", price: "1.06E+10" },
        { date: "July", price: "1.28E+10" },
        { date: "August", price: "1.06E+10" },
        { date: "September", price: "8.99E+09" },
        { date: "October", price: "1.14E+10" },
        { date: "November", price: "1.01E+10" },
        { date: "December", price: "1.05E+10" },
      ],
    },
    {
      name: "쇼핑업",
      values: [
        { date: "January", price: "2.31E+11" },
        { date: "February", price: "2.32E+11" },
        { date: "March", price: "2.51E+11" },
        { date: "April", price: "2.28E+11" },
        { date: "May", price: "2.43E+11" },
        { date: "June", price: "2.25E+11" },
        { date: "July", price: "2.23E+11" },
        { date: "August", price: "2.20E+11" },
        { date: "September", price: "2.44E+11" },
        { date: "October", price: "2.41E+11" },
        { date: "November", price: "2.42E+11" },
        { date: "December", price: "2.51E+11" },
      ],
    },
    {
      name: "여가서비스업",
      values: [
        { date: "January", price: "1.82E+10" },
        { date: "February", price: "1.84E+10" },
        { date: "March", price: "1.96E+10" },
        { date: "April", price: "1.94E+10" },
        { date: "May", price: "2.18E+10" },
        { date: "June", price: "2.19E+10" },
        { date: "July", price: "2.23E+10" },
        { date: "August", price: "2.45E+10" },
        { date: "September", price: "2.09E+10" },
        { date: "October", price: "2.10E+10" },
        { date: "November", price: "1.83E+10" },
        { date: "December", price: "1.80E+10" },
      ],
    },
    {
      name: "식음료업",
      values: [
        { date: "January", price: "2.52E+11" },
        { date: "February", price: "2.39E+11" },
        { date: "March", price: "2.64E+11" },
        { date: "April", price: "2.50E+11" },
        { date: "May", price: "2.71E+11" },
        { date: "June", price: "2.57E+11" },
        { date: "July", price: "2.64E+11" },
        { date: "August", price: "2.81E+11" },
        { date: "September", price: "2.47E+11" },
        { date: "October", price: "2.52E+11" },
        { date: "November", price: "2.49E+11" },
        { date: "December", price: "2.86E+11" },
      ],
    },
    {
      name: "숙박업",
      values: [
        { date: "January", price: "2.13E+10" },
        { date: "February", price: "2.03E+10" },
        { date: "March", price: "1.85E+10" },
        { date: "April", price: "1.84E+10" },
        { date: "May", price: "2.00E+10	" },
        { date: "June", price: "2.07E+10" },
        { date: "July", price: "2.26E+10" },
        { date: "August", price: "2.64E+10" },
        { date: "September", price: "1.85E+10" },
        { date: "October", price: "1.88E+10" },
        { date: "November", price: "1.88E+10" },
        { date: "December", price: "2.40E+10" },
      ],
    },
  ];

  let height = 500;
  let margin = 50;
  let duration = 250;

  let lineOpacity = "0.25";
  let lineOpacityHover = "0.85";
  let otherLinesOpacityHover = "0.1";
  let lineStroke = "2.5px";
  let lineStrokeHover = "3.5px";

  let circleOpacity = "0.85";
  let circleOpacityOnLineHover = "0.25";
  let circleRadius = 3;
  let circleRadiusHover = 9;

  /* Format Data */
  let parseDate = d3.timeParse("%B");
  data.forEach(function (d) {
    d.values.forEach(function (d) {
      d.date = parseDate(d.date);
      d.price = +d.price;
    });
  });

  /* Scale */
  let xScale = d3
    .scaleTime()
    .domain(d3.extent(data[0].values, (d) => d.date))
    .range([0, 580]);

  let yScale = d3.scaleLinear().domain([0, 1500000000000]).range([449, 50]);

  let color = d3.scaleOrdinal(d3.schemeCategory10);

  /* Add SVG */
  let svg = d3
    .select("#Before_After")
    .append("svg")
    .attr("class", "aaa")
    .attr("width", 800 + "px")
    .attr("height", 520 + "px")
    .attr("fill", "none")
    .append("g")
    .attr("transform", `translate(90,20)`);

  /* Add line into SVG */
  let line = d3
    .line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.price));
  let lines = svg.append("g").attr("class", "lines");

  lines
    .selectAll(".line-group")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "line-group")
    .append("path")
    .attr("class", "line")
    .style("stroke-width", lineStroke)
    .attr("d", (d) => line(d.values))
    .style("stroke", (d, i) => color(i))
    .style("opacity", lineOpacity)
    .on("mouseover", function (d) {
      d3.selectAll(".line").style("opacity", otherLinesOpacityHover);
      d3.selectAll(".circle").style("opacity", circleOpacityOnLineHover);
      d3.select(this)
        .style("opacity", lineOpacityHover)
        .style("stroke-width", lineStrokeHover)
        .style("cursor", "pointer");
    })
    .on("mouseout", function (d) {
      d3.selectAll(".line").style("opacity", lineOpacity);
      d3.selectAll(".circle").style("opacity", circleOpacity);
      d3.select(this).style("stroke-width", lineStroke).style("cursor", "none");
    });
  /* Add circles in the line */
  lines
    .selectAll("circle-group")
    .data(data)
    .enter()
    .append("g")
    .style("fill", (d, i) => color(i))
    .selectAll("circle")
    .data((d) => d.values)
    .enter()
    .append("g")
    .attr("class", "circle")
    .on("mouseover", function (d, i) {
      d3.select(this)
        .style("cursor", "pointer")
        .append("text")
        .attr("class", "text")
        .style("font-size", "0.9em")
        .text(`${i.price}`)
        .attr("x", (d) => xScale(d.date) + 5)
        .attr("y", (d) => yScale(d.price) - 10);
    })
    .on("mouseout", function (d) {
      d3.select(this)
        .style("cursor", "none")
        .transition()
        .duration(duration)
        .selectAll(".text")
        .remove();
    })
    .append("circle")
    .attr("cx", (d) => xScale(d.date))
    .attr("cy", (d) => yScale(d.price))
    .attr("r", circleRadius)
    .style("opacity", circleOpacity)
    .on("mouseover", function (d) {
      d3.select(this)
        .transition()
        .duration(duration)
        .attr("r", circleRadiusHover);
    })
    .on("mouseout", function (d) {
      d3.select(this).transition().duration(duration).attr("r", circleRadius);
    });

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 270 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "green")
    .text("쇼핑업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 100 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "purple")
    .text("식음료업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 402 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "orange")
    .text("운송업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 427 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "red")
    .text("여가서비스업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 440 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "skyblue")
    .text("여행업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 418 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "brown")
    .text("숙박업");

  /* Add Axis into SVG */
  let xAxis = d3.axisBottom(xScale).ticks(12);
  let yAxis = d3.axisLeft(yScale).ticks(12);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height - margin})`)
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "x axis")
    .call(yAxis)
    .append("text")
    .style("font-size", "2em")
    .attr("y", 15)
    .attr("x", 400)
    .attr("fill", "#000")
    .text("유형별 소비");

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("y", 15)
    .attr("x", -45)
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .text("소비금액");
}

function After() {
  let data = [
    {
      name: "여행업",
      values: [
        { date: "January", price: "3.21E+08" },
        { date: "February", price: "9.23E+10" },
        { date: "March", price: "7.25E+10" },
        { date: "April", price: "1.69E+08" },
        { date: "May", price: "1.17E+11" },
        { date: "June", price: "1.09E+11" },
        { date: "July", price: "1.17E+11" },
        { date: "August", price: "1.65E+08" },
        { date: "September", price: "8.79E+10" },
        { date: "October", price: "1.03E+11" },
        { date: "November", price: "1.04E+11" },
        { date: "December", price: "1.73E+08" },
      ],
    },
    {
      name: "운송업",
      values: [
        { date: "January", price: "5.57E+09" },
        { date: "February", price: "2.32E+09" },
        { date: "March", price: "2.75E+09" },
        { date: "April", price: "4.07E+09" },
        { date: "May", price: "3.07E+09" },
        { date: "June", price: "2.92E+09" },
        { date: "July", price: "2.22E+09" },
        { date: "August", price: "4.32E+09" },
        { date: "September", price: "2.49E+09" },
        { date: "October", price: "3.43E+09" },
        { date: "November", price: "3.46E+09" },
        { date: "December", price: "3.67E+09" },
      ],
    },
    {
      name: "쇼핑업",
      values: [
        { date: "January", price: "1.97E+11" },
        { date: "February", price: "8.84E+10" },
        { date: "March", price: "9.56E+10" },
        { date: "April", price: "1.83E+11" },
        { date: "May", price: "1.01E+11" },
        { date: "June", price: "9.09E+10" },
        { date: "July", price: "8.99E+10" },
        { date: "August", price: "1.69E+11" },
        { date: "September", price: "9.57E+10" },
        { date: "October", price: "1.07E+11" },
        { date: "November", price: "9.77E+10" },
        { date: "December", price: "1.82E+11" },
      ],
    },
    {
      name: "여가서비스업",
      values: [
        { date: "January", price: "1.15E+10" },
        { date: "February", price: "9.21E+10" },
        { date: "March", price: "9.15E+10" },
        { date: "April", price: "1.35E+10" },
        { date: "May", price: "1.21E+11" },
        { date: "June", price: "9.67E+10" },
        { date: "July", price: "9.38E+10" },
        { date: "August", price: "1.64E+10" },
        { date: "September", price: "9.92E+10" },
        { date: "October", price: "1.06E+11" },
        { date: "November", price: "1.04E+11" },
        { date: "December", price: "1.19E+10" },
      ],
    },
    {
      name: "식음료업",
      values: [
        { date: "January", price: "1.90E+11" },
        { date: "February", price: "8.58E+10" },
        { date: "March", price: "1.04E+11" },
        { date: "April", price: "1.70E+11" },
        { date: "May", price: "1.03E+11" },
        { date: "June", price: "1.07E+11" },
        { date: "July", price: "1.01E+11" },
        { date: "August", price: "1.94E+11" },
        { date: "September", price: "9.63E+10" },
        { date: "October", price: "1.13E+11" },
        { date: "November", price: "1.15E+11" },
        { date: "December", price: "1.58E+11" },
      ],
    },
    {
      name: "숙박업",
      values: [
        { date: "January", price: "1.59E+10" },
        { date: "February", price: "1.47E+10" },
        { date: "March", price: "1.13E+10" },
        { date: "April", price: "1.23E+10" },
        { date: "May", price: "1.58E+10" },
        { date: "June", price: "1.68E+10" },
        { date: "July", price: "1.97E+10" },
        { date: "August", price: "2.07E+10" },
        { date: "September", price: "1.40E+10" },
        { date: "October", price: "1.74E+10" },
        { date: "November", price: "1.74E+10" },
        { date: "December", price: "1.54E+10" },
      ],
    },
  ];

  let height = 500;
  let margin = 50;
  let duration = 250;

  let lineOpacity = "0.25";
  let lineOpacityHover = "0.85";
  let otherLinesOpacityHover = "0.1";
  let lineStroke = "2.5px";
  let lineStrokeHover = "3.5px";

  let circleOpacity = "0.85";
  let circleOpacityOnLineHover = "0.25";
  let circleRadius = 3;
  let circleRadiusHover = 9;

  /* Format Data */
  let parseDate = d3.timeParse("%B");
  data.forEach(function (d) {
    d.values.forEach(function (d) {
      d.date = parseDate(d.date);
      d.price = +d.price;
    });
  });

  /* Scale */
  let xScale = d3
    .scaleTime()
    .domain(d3.extent(data[0].values, (d) => d.date))
    .range([0, 580]);

  let yScale = d3.scaleLinear().domain([0, 1400000000000]).range([449, 50]);

  let color = d3.scaleOrdinal(d3.schemeCategory10);

  /* Add SVG */
  let svg = d3
    .select("#Before_After")
    .append("svg")
    .attr("class", "aaa")
    .attr("width", 800 + "px")
    .attr("height", 520 + "px")
    .attr("fill", "none")
    .append("g")
    .attr("transform", `translate(90,20)`);

  /* Add line into SVG */
  let line = d3
    .line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.price));
  let lines = svg.append("g").attr("class", "lines");

  lines
    .selectAll(".line-group")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "line-group")
    .append("path")
    .attr("class", "line")
    .style("stroke-width", lineStroke)
    .attr("d", (d) => line(d.values))
    .style("stroke", (d, i) => color(i))
    .style("opacity", lineOpacity)
    .on("mouseover", function (d) {
      d3.selectAll(".line").style("opacity", otherLinesOpacityHover);
      d3.selectAll(".circle").style("opacity", circleOpacityOnLineHover);
      d3.select(this)
        .style("opacity", lineOpacityHover)
        .style("stroke-width", lineStrokeHover)
        .style("cursor", "pointer");
    })
    .on("mouseout", function (d) {
      d3.selectAll(".line").style("opacity", lineOpacity);
      d3.selectAll(".circle").style("opacity", circleOpacity);
      d3.select(this).style("stroke-width", lineStroke).style("cursor", "none");
    });
  /* Add circles in the line */
  lines
    .selectAll("circle-group")
    .data(data)
    .enter()
    .append("g")
    .style("fill", (d, i) => color(i))
    .selectAll("circle")
    .data((d) => d.values)
    .enter()
    .append("g")
    .attr("class", "circle")
    .on("mouseover", function (d, i) {
      d3.select(this)
        .style("cursor", "pointer")
        .append("text")
        .attr("class", "text")
        .style("font-size", "0.9em")
        .text(`${i.price}`)
        .attr("x", (d) => xScale(d.date) + 5)
        .attr("y", (d) => yScale(d.price) - 10);
    })
    .on("mouseout", function (d) {
      d3.select(this)
        .style("cursor", "none")
        .transition()
        .duration(duration)
        .selectAll(".text")
        .remove();
    })
    .append("circle")
    .attr("cx", (d) => xScale(d.date))
    .attr("cy", (d) => yScale(d.price))
    .attr("r", circleRadius)
    .style("opacity", circleOpacity)
    .on("mouseover", function (d) {
      d3.select(this)
        .transition()
        .duration(duration)
        .attr("r", circleRadiusHover);
    })
    .on("mouseout", function (d) {
      d3.select(this).transition().duration(duration).attr("r", circleRadius);
    });

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 295 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "green")
    .text("쇼핑업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 230 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "purple")
    .text("식음료업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 432 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "orange")
    .text("운송업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 440 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "red")
    .text("여가서비스업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 450 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "skyblue")
    .text("여행업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 423 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "brown")
    .text("숙박업");

  /* Add Axis into SVG */
  let xAxis = d3.axisBottom(xScale).ticks(12);
  let yAxis = d3.axisLeft(yScale).ticks(12);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height - margin})`)
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "x axis")
    .call(yAxis)
    .append("text")
    .style("font-size", "2em")
    .attr("y", 15)
    .attr("x", 400)
    .attr("fill", "#000")
    .text("유형별 소비");

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("y", 15)
    .attr("x", -45)
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .text("소비금액");
}
export default Line_busan;
