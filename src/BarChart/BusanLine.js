import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import "./BusanLine.css";


class BusanLine extends React.Component {
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
    
    let before = [607723, 610167, 619988, 	823712, 	804415, 	686190, 	748572, 	814009, 	665646, 	813307, 	689957, 	744434, 	917697, 	1045113, 	996700, 	1098262, 	1143570, 	1013866, 	1029676, 	1118210, 	849391, 	
        998427, 	871168, 	881010 ];
    let after = [823387 ,422468 ,130312 ,	143918 	,269162 ,	273258 	,310828 ,	335688 	,94319 	,216442 ,	244150 	,92445 ,	155422 ,
        	284059 ,	296140 ,	269984 ,	366228 ,	341327 ,	346521 	,319276 	,281426 	,350640 	,378615 	,373480 
    ];
    let culture_before = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let natural_before = [0,0,0,0,0,0,0,0,0,0,0,0,9730,	8453,	9425,	10221,13711,	12433,	11127,	9087,	10211,	12071,	11204,	6112];
    let tourism_before = [607723 ,	610167 ,	619988 ,	823712 ,	804415 ,	686190 	,748572 	,814009 	,665646 	,813307 ,	689957 	,744434 , 	
        907967 	,1036660 ,987275 ,	1088041 ,	1129859 ,	1001433 ,	1018549 ,	1109123 ,	839180 ,	986356, 	859964 ,	874898 ];

        let culture_after = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let natural_after = [1482	,2330	,5049	,6011	,17806,	7800	,17200,	8400,	4600	,13000	,8200	,4400	,	7000,	9900
            ,	10200	,14400	,18000	,20170	,13166	,17838	,16280	,23617	,19002,	12405
        ];
        let tourism_after = [821905 ,	420138, 	125263, 	137907 	,251356 ,	265458 ,	293628 ,	327288 ,
              89719 ,	203442 ,235950 ,	88045  ,	148422 ,	274159 ,	285940, 	255584 ,
                  348228, 	321157 ,	333355 	,301438 ,	265146 ,	327023 	,359613 	,361075 ];
    let before_all = 0;
    let after_all = 0;
    let before_culture = 0;
    let after_culture = 0;
    let before_natural = 0;
    let after_natural = 0;
    let before_tourism = 0;
    let after_tourism = 0;


    for (let i = 0; i < 24; i++){
      before_all += before[i];
      after_all += after[i];
      before_culture += culture_before[i];
      before_natural += natural_before[i];
      before_tourism += tourism_before[i];
      after_culture += culture_after[i];
      after_natural += natural_after[i];
      after_tourism += tourism_after[i];
    }

  
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

    const bar_margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 460 - bar_margin.left - bar_margin.right,
    bar_height = 400 - bar_margin.top - bar_margin.bottom;

// append the svg object to the body of the page
const bar_svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + bar_height.left + bar_height.right)
    .attr("height", height + bar_height.top + bar_height.bottom)
  .append("g")
    .attr("transform",`translate(${bar_margin.left},${bar_margin.top})`);

// Parse the Data
d3.csv("C:/Users/revol/react/term-project/src/data.csv").then( function(data) {

  // List of subgroups = header of the csv files = soil condition here
  const subgroups = data.columns.slice(1)

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = data.map(d => d.group)

  console.log(groups)

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
    .domain([0, 40])
    .range([ height, 0 ]);
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
    .range(['#e41a1c','#377eb8','#4daf4a'])

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .join("g")
      .attr("transform", d => `translate(${x(d.group)}, 0)`)
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .join("rect")
      .attr("x", d => xSubgroup(d.key))
      .attr("y", d => y(d.value))
      .attr("width", xSubgroup.bandwidth())
      .attr("height", d => height - y(d.value))
      .attr("fill", d => color(d.key));

})

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

    let yScale = d3.scaleLinear().domain([0, 2800000]).range([449, 50]);

    /* Add SVG */
    let svg = d3
      .select("#`chart`")
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
      .attr("transform", "translate(" + 600 + "," + 380 + ")")
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
    let culture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let natural = [0,0,0,0,0,0,0,0,0,0,0,0,9730,	8453,	9425,	10221,13711,	12433,	11127,	9087,	10211,	12071,	11204,	6112    ];
    let tourism = [607723 ,	610167 ,	619988 ,	823712 ,	804415 ,	686190 	,748572 	,814009 	,665646 	,813307 ,	689957 	,744434 , 	
        907967 	,1036660 ,987275 ,	1088041 ,	1129859 ,	1001433 ,	1018549 ,	1109123 ,	839180 ,	986356, 	859964 ,	874898 ];
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

  let yScale = d3.scaleLinear().domain([0, 2500000]).range([449, 50]);

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
    .attr("transform", "translate(" + 615 + "," + 180 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 448 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill",d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 430 + ")")
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
    let culture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let natural = [1482	,2330	,5049	,6011	,17806,	7800	,17200,	8400,	4600	,13000	,8200	,4400	,	7000,	9900
        ,	10200	,14400	,18000	,20170	,13166	,17838	,16280	,23617	,19002,	12405
    ];
    let tourism = [821905 ,	420138, 	125263, 	137907 	,251356 ,	265458 ,	293628 ,	327288 ,
        	89719 ,	203442 ,235950 ,	88045  ,	148422 ,	274159 ,	285940, 	255584 ,
            	348228, 	321157 ,	333355 	,301438 ,	265146 ,	327023 	,359613 	,361075 ];
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

  let yScale = d3.scaleLinear().domain([0, 1500000]).range([449, 50]);

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
    .attr("transform", "translate(" + 615 + "," + 330 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 448 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill",d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 430 + ")")
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
export default BusanLine;
