import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import {
  select,
  scaleBand,
  axisBottom,
  axisLeft,
  scaleLinear,
  stack,
  max
} from "d3";

export const GraphJejuAfter = ({ colors, data1, data2}) => {

  const svgRef = useRef();
  const wrapperRef = useRef();

    useEffect(() => {
      const svg = select(svgRef.current);

      data1.forEach((d) => {
        d.name = +d.name;
        d.value = +d.value;
      });

      data2.forEach((d) => {
        d.name = +d.name;
        d.value = +d.value;
      });

      var margin = { top: 10, right: 10, bottom: 0, left: 10 },
      width = 440 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;
    
      var x = d3.scaleLinear().range([margin.left, width-margin.right]);
      var y = d3.scaleLinear().range([height-margin.bottom, margin.top]);
  
      x.domain(d3.extent(data1, (d) => { return d.name; }));
      y.domain([150, 200]);

    
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));
  
      svg.append("g")
        .attr("transform", `translate(${0+410}, 0 )`)
        .call(d3.axisRight(y));
        
      var valueLine = d3.line()
      .x((d) => { return x(d.name); })
      .y((d) => { return y(d.value); });
    
      svg.append("path")
        .data([data1])
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", colors[0])
        .attr("stroke-width", 2)
        .attr("d", valueLine);

        svg.append("path")
        .data([data2])
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", colors[1])
        .attr("stroke-width", 2)
        .attr("d", valueLine);
  
    
    }, [colors]);
  
    return (
      <>
      <div
        ref={wrapperRef}
        style={{ width: "110%", height: "110%"}}
      >
        <svg className="LL" ref={svgRef}>
        </svg>
      </div>
      </>
    );
  };
  
