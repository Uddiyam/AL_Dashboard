import * as d3 from "d3";
import { useEffect, useRef} from "react";
import input_data from "../../서울.csv";

function SeoulVisit() {
  //const [mydata, setMydata] = useState([82199741,1.28E+09]);
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 30, right: 30, bottom: 70, left: 70 },
            width = 360 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select(svgRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Initialize the X axis
        const x = d3.scaleBand()
            .range([0, width])
            .padding(0.4);
        const xAxis = svg.append("g")
            .attr("transform", `translate(0,${height})`);

        // Initialize the Y axis
        const y = d3.scaleLinear()
            .range([height, 0]);
        const yAxis = svg.append("g")
            .attr("class", "myYaxis");

        d3.csv(input_data).then(function (data) {
            // X axis
            x.domain(data.map(d => d.time));
            xAxis.call(d3.axisBottom(x));

            // Add Y axis
            y.domain([0, d3.max(data, d => +d['visit'])]);
            yAxis.call(d3.axisLeft(y));

            svg.selectAll("rect")
                .data(data)
                .join("rect")
                .transition()
                .duration(1000)
                .attr("x", d => x(d.time))
                .attr("y", d => y(d['visit']))
                .attr("width", x.bandwidth())
                .attr("height", d => height - y(d['visit']))
                .style("fill", function(d){ if(d.time=='코로나 전'){return "#DF3A01"} else {return "#A4A4A4"}}); //코로나 전일때
                //.style("fill", function (d) { if (d.time == '코로나 후') { return "#084B8A" } else { return "#A4A4A4" } });    //코로나 후일때
        })
  }, []);

  return (
    <div>
      <h3 align= "center">방문자수</h3>
      <svg ref={svgRef} width={300} height={460}></svg>
    </div>
  );
}

export default SeoulVisit;
