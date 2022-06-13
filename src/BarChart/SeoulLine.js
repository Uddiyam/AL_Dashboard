import * as d3 from "d3";
import { schemeGnBu } from "d3";
import {useState, useEffect, useRef} from "react";

function SeoulLine(){
    const [data, setData] = useState([1632310, 1812262, 1656214, 2127928, 2617655, 
        1862754,1819941,2279798,2685066,2866015,2103343,2019979,1797570,2182656,1937749,
        2477251,2874800,2089196,2211359,2777538,2534950,3002455,2242111,2045002
    ]);

    const [naturalData, setNaturalData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    
    const [cultureData, setCultureData] = useState([412451,647006,757435,1110729,1239388,856042,580459,599483,1554114,1416434,1081318,705133,583501,858179,890328,1381402 
        ,1453265,1040164,751698,979568,1412371,1576249,1224760,727659 ])
    
    const [tourData, setTourData] = useState([1219859, 	1165256, 	898779, 	1017199, 	1378267, 	1006712, 	1239482, 	1680315, 	
        1130952, 	1449581, 	1022025, 	1314846,  1214069, 	1324477, 	1047421, 	1095849, 	1421535, 	1049032, 	1459661, 	1797970, 	1122579, 	1426206, 	
        1017351, 	1317343 
    ])


    
    const svgRef = useRef(null);
    const months = [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    useEffect(
        () => {
            const svg = d3.select(svgRef.current);

            const xScale = d3.scaleLinear()
                        .domain([0, data.length - 1])
                        .range([100, 800]);

            const yScale = d3.scaleLinear()
                        .domain([0, d3.max(data) * 1.2])
                        .range([600, 100]);
            
            const xAxis = d3.axisBottom(xScale).tickValues(months);
            svg.select(".x-axis").style("transform", "translateY(600px)").call(xAxis);


            const yAxis = d3.axisLeft(yScale);
            svg.select(".y-axis").style("transform", "translateX(100px)").call(yAxis)

            const myLine = d3
                    .line()
                    .x((v, i) => xScale(i))
                    .y(yScale)

            const myLine2 = d3.line().x((v, i) => xScale(i)).y(yScale)

            const myLine3 = d3.line().x((v, i) => xScale(i)).y(yScale)

            const myLine4 = d3.line().x((v, i) => xScale(i)).y(yScale)

            svg.selectAll(".line")
                .data([data])
                .join("path")
                .attr("class", "line")
                .attr("d", (v) => myLine(v))
                .attr("fill", "none")
                .attr("stroke", "blue");

            svg.append("path")
                .data([naturalData])
                .attr("class", "line")
                .attr("d", (v) => myLine2(v))
                .attr("fill", "none")
                .attr("stroke", "red");

                svg.append("path")
                .data([cultureData])
                .attr("class", "line")
                .attr("d", (v) => myLine3(v))
                .attr("fill", "none")
                .attr("stroke", "green");

                svg.append("path")
                .data([tourData])
                .attr("class", "line")
                .attr("d", (v) => myLine4(v))
                .attr("fill", "none")
                .attr("stroke", "orange");

            svg.append('text')
                .attr('class', 'title')
                .attr('x', 500)
                .attr('y', 100)
                .attr('text-anchor', 'middle')
                .style('color', 'orange')
                .text('Seoul Tourist chart');

    

        }, [data]);

        

    return(
        <>
        <svg ref = {svgRef} width = {1000} height = {1000}>
            <g className = "x-axis"></g>
            <g className = "y-axis"></g>
        </svg>
        </>
    );
}

export default SeoulLine;