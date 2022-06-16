import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

class GyeonggiLine extends React.Component {
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
      3266058, 3383708, 4685724, 6420163, 8663663, 7192358, 6112136, 6942948,
      7491753, 9251992, 5879490, 4551657, 3779908, 4008625, 5060154, 7598617,
      9310923, 7731101, 6118629, 7843706, 6409503, 9116533, 6071822, 3983079,
    ];
    let after = [
      3681540, 2041007, 2701194, 3300995, 4317158, 3185247, 3686682, 2870067,
      3066783, 5860594, 3684283, 1756180, 1644204, 2647869, 2954437, 4226577,
      5276869, 4521663, 3289838, 4143429, 4924688, 5830133, 4380053, 2654787,
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
      .attr("transform", "translate(" + 590 + "," + 350 + ")")
      .attr("dy", ".500em")
      .attr("text-anchor", "start")
      .style("fill", "blue")
      .text("코로나 후");

    lines
      .append("text")
      .style("font-size", "0.8em")
      .attr("transform", "translate(" + 590 + "," + 260 + ")")
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
    201408, 234775, 392422, 550489, 741481, 551743, 347935, 375402, 672702,
    708796, 404912, 218406, 397982, 252390, 349836, 540436, 886960, 532989,
    358177, 428933, 467387, 731837, 464179, 273341,
  ];
  let natural = [
    120869, 175613, 228159, 311192, 451189, 508253, 607684, 474397, 540422,
    543328, 256373, 191687, 337270, 399433, 556823, 719669, 917218, 930563,
    714911, 770007, 760933, 888486, 552826, 320502,
  ];
  let tourism = [
    2943781, 2973320, 4065143, 5558482, 7470993, 6132362, 5156517, 6093149,
    6278629, 7999868, 5218205, 4141564, 3044656, 3356802, 4153495, 6338512,
    7506745, 6267549, 5045541, 6644766, 5181183, 7496210, 5054817, 3389236,
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
    .attr("transform", "translate(" + 590 + "," + 260 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 430 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 440 + ")")
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
    272777, 169056, 298162, 407729, 442589, 117913, 252494, 265331, 366884,
    627336, 378523, 213040, 214514, 312148, 291220, 442786, 580326, 563896,
    237700, 337276, 624832, 628423, 471232, 245109,
  ];
  let natural = [
    381858, 405065, 808504, 696997, 803562, 698327, 895936, 490384, 562470,
    950564, 643945, 482413, 412703, 483487, 522874, 719327, 779839, 718442,
    645167, 892924, 1051441, 921798, 644183, 451198,
  ];
  let tourism = [
    3026905, 1466886, 1594528, 2196269, 3071007, 2369007, 2538252, 2114352,
    2137429, 4282694, 2661815, 1060727, 1016987, 1852234, 2140343, 3064464,
    3916704, 3239325, 2406971, 2913229, 3248415, 4279912, 3264638, 1958480,
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
    .attr("transform", "translate(" + 590 + "," + 300 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 430 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 590 + "," + 400 + ")")
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
export default GyeonggiLine;
