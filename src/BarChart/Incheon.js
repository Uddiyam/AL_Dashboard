import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import "./BusanLine.css";


class Incheon extends React.Component {
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
    let before = [339421 	,357958 ,	478106 ,	785604 	,948418 ,	793245 	,643670 	,724284 ,	811287 ,	875715 ,	601584, 	572595 	,
         	444910 ,	430492, 	606577 ,	794676, 	915371 ,	751939, 	541602 ,	726147, 	648485, 	760773 ,	578296 ,	446373 ];
    let after = [450482,206694 ,	210213 ,	282989 ,	352014 ,	338238, 	311409, 	294545 ,	302931, 	421113 ,	292151, 	155075 ,	 	
        169044 ,	288365, 	247940 ,	386037 	,507143 ,	382353 	,248701 	,376706 	,417455 ,	440740 	,355486 ,	226323 
    ];
    let culture_before = [57931, 	55608 ,	88948 ,	139661 ,	154483 	,109978 ,	64892 ,	67675 	,141478 ,	187848 ,	110162 ,	75268 ,	 	
      72164 ,	81825 ,	110564 ,138400 	,156125 ,	126040 ,	78937 	,93517 ,	127896 ,	156499 ,	100154 ,	73751 ];
  let natural_before = [54825 	,80325 	,100001 ,	139015 	,180836 ,	204516 ,	209081 ,
        232379 ,	206892 	,169911 ,	105642 ,	61097 	, 	67209 ,	64243 ,	106608 ,	131681 	,167871 ,	154938 	,110289 	,170826 ,	154012 	,151276,
             93889 ,	52404  ];
  let tourism_before = [217196 	,208597 	,272429 ,	479818 ,	572714 	,440067 ,	338572 ,	390415 ,	420725 ,	484635 ,	364510 ,	420529 	, 	
      292948 ,	282498 	,369907 ,	499821 	,591375 	,470961 ,	352376 	,461804 ,	366577 ,	452998 ,	384253 ,320218];
      let culture_after = [79713 	,50746 	,80213 ,	100660, 	108870, 	55196 ,	56235 	,50647 	,67525 ,	106852, 	75562 ,	
        49211 ,	 	55104 ,	78756 	,70911 ,	72731 ,	95172 	,79099 	,34170 ,	57206, 	104847 	,120977 	,83358 	,56932 ];
    let natural_after = [75069, 	63752 ,	105607 	,142840 ,	168692 	,244990 ,	202856 	,171231 ,	194192 ,	213055 ,	114290 ,
        	72720 ,		81431 ,	152093 ,	114537, 	208675 ,	254298, 	173043, 	153133, 	254638 ,	227938 ,	166254, 	117616 ,	70241 ];
    let tourism_after = [295700 ,	92196 	,24393 ,	39489 ,	74452 	,38052 ,	52318 ,	72667 	,41214 	,101206 	,102299 ,	33144 	,
         	32509 ,	57516 ,	62492 	,104631 	,157673 ,	130211 ,	61398 ,	64862 ,	84670 	,153509 ,	154512 ,	99150 ];

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
      .attr("transform", "translate(" + 600 + "," + 370 + ")")
      .attr("dy", ".500em")
      .attr("text-anchor", "start")
      .style("fill", "blue")
      .text("코로나 후");

    lines
      .append("text")
      .style("font-size", "0.8em")
      .attr("transform", "translate(" + 600 + "," + 225 + ")")
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
    let culture = [57931, 	55608 ,	88948 ,	139661 ,	154483 	,109978 ,	64892 ,	67675 	,141478 ,	187848 ,	110162 ,	75268 ,	 	
        72164 ,	81825 ,	110564 ,138400 	,156125 ,	126040 ,	78937 	,93517 ,	127896 ,	156499 ,	100154 ,	73751 ];
    let natural = [54825 	,80325 	,100001 ,	139015 	,180836 ,	204516 ,	209081 ,
        	232379 ,	206892 	,169911 ,	105642 ,	61097 	, 	67209 ,	64243 ,	106608 ,	131681 	,167871 ,	154938 	,110289 	,170826 ,	154012 	,151276,
             	93889 ,	52404  ];
    let tourism = [217196 	,208597 	,272429 ,	479818 ,	572714 	,440067 ,	338572 ,	390415 ,	420725 ,	484635 ,	364510 ,	420529 	, 	
        292948 ,	282498 	,369907 ,	499821 	,591375 	,470961 ,	352376 	,461804 ,	366577 ,	452998 ,	384253 ,320218];
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
    .attr("transform", "translate(" + 615 + "," + 200 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 400 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill",d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 420 + ")")
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
    let culture = [79713 	,50746 	,80213 ,	100660, 	108870, 	55196 ,	56235 	,50647 	,67525 ,	106852, 	75562 ,	
        49211 ,	 	55104 ,	78756 	,70911 ,	72731 ,	95172 	,79099 	,34170 ,	57206, 	104847 	,120977 	,83358 	,56932 ];
    let natural = [75069, 	63752 ,	105607 	,142840 ,	168692 	,244990 ,	202856 	,171231 ,	194192 ,	213055 ,	114290 ,
        	72720 ,		81431 ,	152093 ,	114537, 	208675 ,	254298, 	173043, 	153133, 	254638 ,	227938 ,	166254, 	117616 ,	70241 ];
    let tourism = [295700 ,	92196 	,24393 ,	39489 ,	74452 	,38052 ,	52318 ,	72667 	,41214 	,101206 	,102299 ,	33144 	,
         	32509 ,	57516 ,	62492 	,104631 	,157673 ,	130211 ,	61398 ,	64862 ,	84670 	,153509 ,	154512 ,	99150 ];
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

  let yScale = d3.scaleLinear().domain([0, d3.max(natural) * 2]).range([449, 50]);

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
    .attr("transform", "translate(" + 615 + "," + 350 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 370 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill",d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 333 + ")")
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
export default Incheon;
