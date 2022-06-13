import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import "./BusanLine.css";


class Daegu extends React.Component {
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
    let before = [669641 	,600817 ,	769283 ,	907919 ,	1220718, 	1038716 ,
        	596203 ,	699277, 	774753, 	829356 ,	691846 	,461216 	,574108 ,	625113 	,734885 ,	835448 	,910152 
            ,	712538 ,	734325, 	855111, 	672784 ,	980455, 	964800, 	707390 
  ];
    let after = [765209 	,365068 ,	405579 	,537740 	,618457 ,	559274, 	612862 ,	672390 	,
        495617, 	771827 ,	601927 ,	375426 ,	415868 ,	573640 ,	606787, 	719442 	,883084 	,588631 ,	571549 ,	639343 ,	637627
        , 	825052 ,	795614 ,	571168 
    ];
    let data = [
        {
            name: "코로나 후",
            values: [
                { date: "January", price: after[0] + after[12] },
                { date: "February", price: after[1] + after[13] },
                { date: "March", price: after[2] + after[14] },
                { date: "April", price: after[3] + after[15] },
                { date: "May", price: after[4] + after[16] },
                { date: "June", price: after[5] + after[17] },
                { date: "July", price: after[6] + after[18] },
                { date: "August", price: after[7] + after[19] },
                { date: "September", price: after[8] + after[20] },
                { date: "October", price: after[9] + after[21] },
                { date: "November", price: after[10] + after[22] },
                { date: "December", price: after[11] + after[23] },
              ],
          },
      {
        name: "코로나 전",
        values: [
          { date: "January", price: before[0] + before[12] },
          { date: "February", price: before[1] + before[13] },
          { date: "March", price: before[2] + before[14] },
          { date: "April", price: before[3] + before[15] },
          { date: "May", price: before[4] + before[16] },
          { date: "June", price: before[5] + before[17] },
          { date: "July", price: before[6] + before[18] },
          { date: "August", price: before[7] + before[19] },
          { date: "September", price: before[8] + before[20] },
          { date: "October", price: before[9] + before[21] },
          { date: "November", price: before[10] + before[22] },
          { date: "December", price: before[11] + before[23] },
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

    let yScale = d3.scaleLinear().domain([0, d3.max(before) * 2]).range([449, 50]);

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
      .attr("transform", "translate(" + 600 + "," + 290 + ")")
      .attr("dy", ".500em")
      .attr("text-anchor", "start")
      .style("fill", "blue")
      .text("코로나 후");

    lines
      .append("text")
      .style("font-size", "0.8em")
      .attr("transform", "translate(" + 600 + "," + 245 + ")")
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
      .text("전체 관광객 수");
    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("y", 15)
      .attr("x", -45)
      .attr("transform", "rotate(-90)")
      .attr("fill", "#000")
      .text("관광객 수");
  }
}
function Before() {
    let natural = [112130, 92459, 136307, 163714, 356790, 332129, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let culture = [18332 ,26155 	,53895 	,47956 ,	27099 ,	50468 ,	14709 ,	51840 	,53650 	,72780 ,	48129 ,	
        33977  ,	48708 	,42792 ,	52934 ,	48454 ,	52545 ,51714 ,	90206 ,	86276 ,	78380 	,110218 ,	95838 ,	92532 ];
    let tourism = [537757 ,	490617 ,	605835, 	710992 ,	831909 ,	675546 ,	574651 ,	674687, 	742498 ,	768632 ,	640134 ,	442464,  
        	544726 	,590998 ,	689523 ,	787904, 	862021 	,665024 	,670839 ,	792493 	,611569 ,	874585 	,862923 	,663129 
  ];
  let data = [
    {
        name: "문화",
        values: [
          { date: "January", price: culture[0] + culture[12] },
          { date: "February", price: culture[1] + culture[13] },
          { date: "March", price: culture[2] + culture[14] },
          { date: "April", price: culture[3] + culture[15] },
          { date: "May", price: culture[4] + culture[16] },
          { date: "June", price: culture[5] + culture[17] },
          { date: "July", price: culture[6] + culture[18] },
          { date: "August", price: culture[7] + culture[19] },
          { date: "September", price: culture[8] + culture[20] },
          { date: "October", price: culture[9] + culture[21] },
          { date: "November", price: culture[10] + culture[22] },
          { date: "December", price: culture[11] + culture[23] },
        ],
      },
      {
        name: "자연 및 생태환경",
        values: [
          { date: "January", price: natural[0] + natural[12] },
          { date: "February", price: natural[1] + natural[13] },
          { date: "March", price: natural[2] + natural[14] },
          { date: "April", price: natural[3] + natural[15] },
          { date: "May", price: natural[4] + natural[16] },
          { date: "June", price: natural[5] + natural[17] },
          { date: "July", price: natural[6] + natural[18] },
          { date: "August", price: natural[7] + natural[19] },
          { date: "September", price: natural[8] + natural[20] },
          { date: "October", price: natural[9] + natural[21] },
          { date: "November", price: natural[10] + natural[22] },
          { date: "December", price: natural[11] + natural[23] },
        ],
      },
      {
        name: "관광 시설",
        values: [
          { date: "January", price: tourism[0] + tourism[12] },
          { date: "February", price: tourism[1] + tourism[13] },
          { date: "March", price: tourism[2] + tourism[14] },
          { date: "April", price: tourism[3] + tourism[15] },
          { date: "May", price: tourism[4] + tourism[16] },
          { date: "June", price: tourism[5] + tourism[17] },
          { date: "July", price: tourism[6] + tourism[18] },
          { date: "August", price: tourism[7] + tourism[19] },
          { date: "September", price: tourism[8] + tourism[20] },
          { date: "October", price: tourism[9] + tourism[21] },
          { date: "November", price: tourism[10] + tourism[22] },
          { date: "December", price: tourism[11] + tourism[23] },
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

  let yScale = d3.scaleLinear().domain([0, d3.max(tourism) * 2]).range([449, 50]);

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
    .attr("transform", "translate(" + 615 + "," + 190 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 415 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill",d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 450 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[1])
    .text("자연 및 생태환경");

  

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
    .text("시기별 관광객 수");

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("y", 15)
    .attr("x", -45)
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .text("관광객 수");
}

function After() {
    let culture = [16112 ,	13670 ,	14389 ,	33565 	,31655 ,	29565 ,	39360 ,	35172 	,28692 ,	15647 ,	14897 
        	,11135  ,	13046 ,	15040 ,	15623 ,	15063 ,	16368 ,	14586 ,	29728 ,	32231 ,	36498 	,16358 	,13895 ,	10884 ];
    let natural = [0,0,0,0,0,0,0,0,0,0,0,0,9377,7996,11744,14174,8472,6190,7681,3340,4495,3017,2734,1411];
    let tourism = [749078 ,	351329 	,391190 ,	504175 ,	586490 ,	529497, 	573294 ,	637119 ,	466595 ,	755778 	,586766 ,	364245  ,
        	393383 ,	550426, 	579167 ,	689654 ,	857855 	,567621 ,	534023 ,	603652, 	596349, 	805237 	,778750 ,	558840 ];
    let data = [
        {
            name: "문화",
            values: [
              { date: "January", price: culture[0] + culture[12] },
              { date: "February", price: culture[1] + culture[13] },
              { date: "March", price: culture[2] + culture[14] },
              { date: "April", price: culture[3] + culture[15] },
              { date: "May", price: culture[4] + culture[16] },
              { date: "June", price: culture[5] + culture[17] },
              { date: "July", price: culture[6] + culture[18] },
              { date: "August", price: culture[7] + culture[19] },
              { date: "September", price: culture[8] + culture[20] },
              { date: "October", price: culture[9] + culture[21] },
              { date: "November", price: culture[10] + culture[22] },
              { date: "December", price: culture[11] + culture[23] },
            ],
          },
          {
            name: "자연 및 생태환경",
            values: [
              { date: "January", price: natural[0] + natural[12] },
              { date: "February", price: natural[1] + natural[13] },
              { date: "March", price: natural[2] + natural[14] },
              { date: "April", price: natural[3] + natural[15] },
              { date: "May", price: natural[4] + natural[16] },
              { date: "June", price: natural[5] + natural[17] },
              { date: "July", price: natural[6] + natural[18] },
              { date: "August", price: natural[7] + natural[19] },
              { date: "September", price: natural[8] + natural[20] },
              { date: "October", price: natural[9] + natural[21] },
              { date: "November", price: natural[10] + natural[22] },
              { date: "December", price: natural[11] + natural[23] },
            ],
          },
          {
            name: "관광 시설",
            values: [
              { date: "January", price: tourism[0] + tourism[12] },
              { date: "February", price: tourism[1] + tourism[13] },
              { date: "March", price: tourism[2] + tourism[14] },
              { date: "April", price: tourism[3] + tourism[15] },
              { date: "May", price: tourism[4] + tourism[16] },
              { date: "June", price: tourism[5] + tourism[17] },
              { date: "July", price: tourism[6] + tourism[18] },
              { date: "August", price: tourism[7] + tourism[19] },
              { date: "September", price: tourism[8] + tourism[20] },
              { date: "October", price: tourism[9] + tourism[21] },
              { date: "November", price: tourism[10] + tourism[22] },
              { date: "December", price: tourism[11] + tourism[23] },
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

  let yScale = d3.scaleLinear().domain([0, d3.max(tourism) * 2]).range([449, 50]);

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
    .attr("transform", "translate(" + 615 + "," + 230 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 435 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill",d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 450 + ")")
    .attr("dy", ".530em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[1])
    .text("자연 및 생태환경");



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
    .text("시기별 관광객 수");

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("y", 15)
    .attr("x", -45)
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .text("관광객 수");
}
export default Daegu;
