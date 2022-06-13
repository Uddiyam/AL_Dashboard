import React, { useState } from "react";
import * as d3 from "d3";

class Line_gyeonggi extends React.Component {
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
          { date: "January", price: "1.52E+11" },
          { date: "February", price: "1.42E+11" },
          { date: "March", price: "1.33E+11" },
          { date: "April", price: "1.61E+11" },
          { date: "May", price: "2.05E+11" },
          { date: "June", price: "1.98E+11" },
          { date: "July", price: "2.26E+11" },
          { date: "August", price: "2.57E+11" },
          { date: "September", price: "1.81E+11" },
          { date: "October", price: "2.26E+11" },
          { date: "November", price: "1.80E+11" },
          { date: "December", price: "1.46E+11" },
        ],
      },
      {
        name: "코로나 전",
        values: [
          { date: "January", price: "1.90E+11" },
          { date: "February", price: "1.71E+11" },
          { date: "March", price: "1.73E+11" },
          { date: "April", price: "1.71E+11" },
          { date: "May", price: "2.08E+11" },
          { date: "June", price: "2.04E+11" },
          { date: "July", price: "2.29E+11" },
          { date: "August", price: "2.94E+11" },
          { date: "September", price: "1.97E+11" },
          { date: "October", price: "2.11E+11" },
          { date: "November", price: "1.78E+11" },
          { date: "December", price: "1.96E+11" },
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
      .range([0, 590]);

    let yScale = d3.scaleLinear().domain([0, 350000000000]).range([449, 50]);

    /* Add SVG */
    let svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", 1000 + "px")
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
      .attr("transform", "translate(" + 600 + "," + 280 + ")")
      .attr("dy", ".500em")
      .attr("text-anchor", "start")
      .style("fill", "blue")
      .text("코로나 후");

    lines
      .append("text")
      .style("font-size", "0.8em")
      .attr("transform", "translate(" + 600 + "," + 220 + ")")
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
      .attr("x", 450)
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
        { date: "January", price: "1.29e10" },
        { date: "February", price: "4.33e09" },
        { date: "March", price: "3.18e09" },
        { date: "April", price: "2.87e09" },
        { date: "May", price: "2.54e09" },
        { date: "June", price: "2.61e09" },
        { date: "July", price: "2.74e09" },
        { date: "August", price: "2.97e09" },
        { date: "September", price: "2.50e09" },
        { date: "October", price: "3.07e09" },
        { date: "November", price: "2.84e09" },
        { date: "December", price: "2.15e09" },
      ],
    },
    {
      name: "운송업",
      values: [
        { date: "January", price: "8.48e10" },
        { date: "February", price: "5.68e10" },
        { date: "March", price: "5.05E10" },
        { date: "April", price: "5.27E10" },
        { date: "May", price: "6.22E10" },
        { date: "June", price: "6.12E10" },
        { date: "July", price: "6.07E10" },
        { date: "August", price: "5.64E10" },
        { date: "September", price: "5.21E10" },
        { date: "October", price: "6.63E10" },
        { date: "November", price: "6.56E10" },
        { date: "December", price: "4.93E10" },
      ],
    },
    {
      name: "쇼핑업",
      values: [
        { date: "January", price: "4.9e11" },
        { date: "February", price: "4.38e11" },
        { date: "March", price: "4.67E11" },
        { date: "April", price: "4.93E11" },
        { date: "May", price: "5.63E11" },
        { date: "June", price: "5.11E11" },
        { date: "July", price: "4.84E11" },
        { date: "August", price: "4.65E11" },
        { date: "September", price: "5.00E11" },
        { date: "October", price: "5.71E11" },
        { date: "November", price: "5.41E11" },
        { date: "December", price: "5.34E11" },
      ],
    },
    {
      name: "여가서비스업",
      values: [
        { date: "January", price: "5.09e10" },
        { date: "February", price: "4.14e10" },
        { date: "March", price: "4.05E+10" },
        { date: "April", price: "4.07E+10" },
        { date: "May", price: "4.87E+10" },
        { date: "June", price: "4.74E+10" },
        { date: "July", price: "4.92E+10" },
        { date: "August", price: "5.11E+10" },
        { date: "September", price: "4.05E+10" },
        { date: "October", price: "5.23E+10" },
        { date: "November", price: "4.67E10" },
        { date: "December", price: "3.43E10" },
      ],
    },
    {
      name: "식음료업",
      values: [
        { date: "January", price: "8.71e11" },
        { date: "February", price: "8.19e11" },
        { date: "March", price: "8.55E11" },
        { date: "April", price: "8.85E11" },
        { date: "May", price: "9.57E11" },
        { date: "June", price: "9.30E11" },
        { date: "July", price: "9.09E11" },
        { date: "August", price: "8.10E11" },
        { date: "September", price: "7.62E11" },
        { date: "October", price: "9.36E11" },
        { date: "November", price: "9.52E11" },
        { date: "December", price: "7.68E11" },
      ],
    },
    {
      name: "숙박업",
      values: [
        { date: "January", price: "5.73e10" },
        { date: "February", price: "4.92e10" },
        { date: "March", price: "4.23E10" },
        { date: "April", price: "4.40E10" },
        { date: "May", price: "5.58E10" },
        { date: "June", price: "5.40E10" },
        { date: "July", price: "5.27E10" },
        { date: "August", price: "5.49E10" },
        { date: "September", price: "4.25E10" },
        { date: "October", price: "5.56E10" },
        { date: "November", price: "5.79E10" },
        { date: "December", price: "5.50E10" },
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
    .range([0, 600]);

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
    .attr("transform", "translate(" + 615 + "," + 270 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "green")
    .text("쇼핑업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 100 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "purple")
    .text("식음료업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 402 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "orange")
    .text("운송업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 427 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "red")
    .text("여가서비스업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 440 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "skyblue")
    .text("여행업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 418 + ")")
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
    .attr("x", 450)
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
        { date: "January", price: "2.29E+08" },
        { date: "February", price: "2.75E+08" },
        { date: "March", price: "1.95E+08" },
        { date: "April", price: "1.55E+08" },
        { date: "May", price: "5.69E+10" },
        { date: "June", price: "2.65E+08" },
        { date: "July", price: "6.36E+10" },
        { date: "August", price: "4.01E+08" },
        { date: "September", price: "2.95E+08" },
        { date: "October", price: "6.03E+10" },
        { date: "November", price: "3.39E+08" },
        { date: "December", price: "2.11E+08" },
      ],
    },
    {
      name: "운송업",
      values: [
        { date: "January", price: "1.46E+08" },
        { date: "February", price: "1.33E+08" },
        { date: "March", price: "9.58E+07" },
        { date: "April", price: "1.55E+08" },
        { date: "May", price: "2.07E+08" },
        { date: "June", price: "1.62E+08" },
        { date: "July", price: "1.87E+08" },
        { date: "August", price: "1.94E+08" },
        { date: "September", price: "1.21E+08" },
        { date: "October", price: "3.85E+08" },
        { date: "November", price: "1.74E+08" },
        { date: "December", price: "7.37E+07" },
      ],
    },
    {
      name: "쇼핑업",
      values: [
        { date: "January", price: "2.61E+10" },
        { date: "February", price: "2.31E+10" },
        { date: "March", price: "2.31E+10" },
        { date: "April", price: "2.58E+10" },
        { date: "May", price: "1.51E+10" },
        { date: "June", price: "2.68E+10" },
        { date: "July", price: "1.38E+10" },
        { date: "August", price: "2.73E+10" },
        { date: "September", price: "2.76E+10" },
        { date: "October", price: "1.58E+10" },
        { date: "November", price: "2.78E+10" },
        { date: "December", price: "2.60E+10" },
      ],
    },
    {
      name: "여가서비스업",
      values: [
        { date: "January", price: "1.20E+10" },
        { date: "February", price: "1.45E+10" },
        { date: "March", price: "2.18E+10" },
        { date: "April", price: "3.06E+10" },
        { date: "May", price: "3.76E+10" },
        { date: "June", price: "3.76E+10" },
        { date: "July", price: "3.43E+10" },
        { date: "August", price: "3.81E+10" },
        { date: "September", price: "3.50E+10" },
        { date: "October", price: "3.79E+10" },
        { date: "November", price: "3.07E+10" },
        { date: "December", price: "1.48E+10" },
      ],
    },
    {
      name: "식음료업",
      values: [
        { date: "January", price: "8.57E+10" },
        { date: "February", price: "8.13E+10" },
        { date: "March", price: "7.32E+10" },
        { date: "April", price: "8.64E+10" },
        { date: "May", price: "7.12E+10" },
        { date: "June", price: "1.08E+11" },
        { date: "July", price: "7.85E+10" },
        { date: "August", price: "1.45E+11" },
        { date: "September", price: "9.47E+10" },
        { date: "October", price: "8.14E+10" },
        { date: "November", price: "9.80E+10" },
        { date: "December", price: "8.09E+10" },
      ],
    },
    {
      name: "숙박업",
      values: [
        { date: "January", price: "2.76E+10" },
        { date: "February", price: "2.29E+10" },
        { date: "March", price: "1.45E+10" },
        { date: "April", price: "1.74E+10" },
        { date: "May", price: "2.44E+10" },
        { date: "June", price: "2.56E+10" },
        { date: "July", price: "3.53E+10" },
        { date: "August", price: "4.59E+10" },
        { date: "September", price: "2.29E+10" },
        { date: "October", price: "3.03E+10" },
        { date: "November", price: "2.26E+10" },
        { date: "December", price: "2.43E+10" },
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
    .range([0, 600]);

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
    .attr("transform", "translate(" + 615 + "," + 295 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "green")
    .text("쇼핑업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 230 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", "purple")
    .text("식음료업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 432 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "orange")
    .text("운송업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 440 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "red")
    .text("여가서비스업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 450 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", "skyblue")
    .text("여행업");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 423 + ")")
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
    .attr("x", 450)
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
export default Line_gyeonggi;
