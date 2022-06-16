import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

class GangwonLine extends React.Component {
  componentDidMount() {
    this.renderMultiChart();
  }
  render() {
    return (
      <div className="App">
        <div id="chart" />
        <div id="Before_After1" />
      </div>
    );
  }

  renderMultiChart() {
    let before = [
      3019206, 2159451, 2072021, 3048139, 4056030, 3332135, 3834049, 4559689,
      3283643, 4739476, 2948645, 2901310, 3609820, 2995672, 2502090, 2722069,
      3692170, 3594189, 3565731, 5041598, 2953056, 5002100, 3000688, 2881902,
    ];
    let after = [
      3302356, 1970976, 1173559, 1274825, 2218805, 2069803, 2404946, 2993446,
      1453406, 3358761, 2196059, 1070537, 926161, 1572448, 1233143, 1918700,
      2595576, 2464226, 2624307, 3070485, 2199859, 3351482, 2368324, 1745784,
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
      .range([0, 580]);

    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(before) * 2])
      .range([449, 50]);

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
            d3.select(".aa").remove();
            cl = true;
            Before();
          } else Before();
          cl = true;
        } else if (i.name === "코로나 후") {
          if (cl) {
            d3.select(".aa").remove();
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
      .attr("transform", "translate(" + 580 + "," + 330 + ")")
      .attr("dy", ".500em")
      .attr("text-anchor", "start")
      .style("fill", "blue")
      .text("코로나 후");

    lines
      .append("text")
      .style("font-size", "0.8em")
      .attr("transform", "translate(" + 580 + "," + 210 + ")")
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
  let culture = [
    134447, 102304, 125273, 192688, 253947, 177033, 172070, 231370, 195938,
    340645, 194582, 166054, 169721, 180975, 193704, 222431, 243043, 251388,
    188277, 270055, 183900, 332317, 199260, 170902,
  ];
  let natural = [
    129133, 97102, 141046, 226512, 407126, 282751, 344212, 531980, 256391,
    356522, 145707, 150792, 271616, 235893, 210204, 247840, 412989, 399183,
    400579, 661171, 305284, 580035, 354809, 261997,
  ];
  let tourism = [
    2755626, 1960045, 1805702, 2628939, 3394957, 2872351, 3317767, 3796339,
    2831314, 4042309, 2608356, 2584464, 3168483, 2578804, 2098182, 2251798,
    3036138, 2943618, 2976875, 4110372, 2463872, 4079748, 2446619, 2449003,
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
    .range([0, 580]);

  let yScale = d3
    .scaleLinear()
    .domain([0, d3.max(tourism) * 2])
    .range([449, 50]);

  let color = d3.scaleOrdinal(d3.schemeCategory10);

  /* Add SVG */
  let svg = d3
    .select("#Before_After1")
    .append("svg")
    .attr("class", "aa")
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
    .attr("transform", "translate(" + 590 + "," + 200 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 434 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 425 + ")")
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
    .attr("x", 400)
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
  let culture = [
    180950, 112264, 119077, 130639, 205575, 170111, 196961, 243276, 162807,
    308182, 209506, 127844, 111041, 163764, 111556, 154231, 206363, 177136,
    164551, 218181, 181550, 258258, 214276, 140863,
  ];
  let natural = [
    337210, 270216, 206335, 185691, 337543, 282955, 309536, 381219, 187681,
    481101, 279020, 80253, 95435, 188910, 138646, 208780, 332004, 282978,
    345887, 410993, 253919, 488838, 250244, 147192,
  ];
  let tourism = [
    2784196, 1588496, 848147, 958495, 1675687, 1616737, 1898449, 2368951,
    1102918, 2569478, 1707533, 862440, 719685, 1219774, 982941, 1555689,
    2057209, 2004112, 2113869, 2441311, 1764390, 2604386, 1903804, 1457729,
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
    .range([0, 580]);

  let yScale = d3
    .scaleLinear()
    .domain([0, d3.max(tourism) * 2])
    .range([449, 50]);

  let color = d3.scaleOrdinal(d3.schemeCategory10);

  /* Add SVG */
  let svg = d3
    .select("#Before_After1")
    .append("svg")
    .attr("class", "aa")
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
    .attr("transform", "translate(" + 590 + "," + 280 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 424 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 435 + ")")
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
export default GangwonLine;
