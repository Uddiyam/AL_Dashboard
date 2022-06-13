import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

import { range } from "d3";

class Korea extends React.Component {
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
    let before1 = [
      1056622, 797732, 1095941, 1569030, 1631587, 1314610, 1185848, 1367337,
      1258796, 1468313, 1125304, 942948, 1056617, 1073447, 1245805, 1567542,
      1705503, 1371798, 1244689, 1458130, 1145241, 1500131, 1163821, 1020070,
    ];
    let after1 = [
      1074240, 503406, 349325, 360698, 633295, 576131, 708163, 894655, 446553,
      859877, 884541, 385229, 261648, 448631, 564074, 761500, 896070, 776636,
      739610, 676274, 607290, 943937, 1007776, 787214,
    ];

    let before2 = [
      339421, 357958, 478106, 785604, 948418, 793245, 643670, 724284, 811287,
      875715, 601584, 572595, 444910, 430492, 606577, 794676, 915371, 751939,
      541602, 726147, 648485, 760773, 578296, 446373,
    ];
    let after2 = [
      450482, 206694, 210213, 282989, 352014, 338238, 311409, 294545, 302931,
      421113, 292151, 155075, 169044, 288365, 247940, 386037, 507143, 382353,
      248701, 376706, 417455, 440740, 355486, 226323,
    ];

    let before3 = [
      3266058, 3383708, 4685724, 6420163, 8663663, 7192358, 6112136, 6942948,
      7491753, 9251992, 5879490, 4551657, 3779908, 4008625, 5060154, 7598617,
      9310923, 7731101, 6118629, 7843706, 6409503, 9116533, 6071822, 3983079,
    ];
    let after3 = [
      3681540, 2041007, 2701194, 3300995, 4317158, 3185247, 3686682, 2870067,
      3066783, 5860594, 3684283, 1756180, 1644204, 2647869, 2954437, 4226577,
      5276869, 4521663, 3289838, 4143429, 4924688, 5830133, 4380053, 2654787,
    ];

    let before4 = [
      3019206, 2159451, 2072021, 3048139, 4056030, 3332135, 3834049, 4559689,
      3283643, 4739476, 2948645, 2901310, 3609820, 2995672, 2502090, 2722069,
      3692170, 3594189, 3565731, 5041598, 2953056, 5002100, 3000688, 2881902,
    ];
    let after4 = [
      3302356, 1970976, 1173559, 1274825, 2218805, 2069803, 2404946, 2993446,
      1453406, 3358761, 2196059, 1070537, 926161, 1572448, 1233143, 1918700,
      2595576, 2464226, 2624307, 3070485, 2199859, 3351482, 2368324, 1745784,
    ];

    let before5 = [
      669641, 600817, 769283, 907919, 1220718, 1038716, 596203, 699277, 774753,
      829356, 691846, 461216, 574108, 625113, 734885, 835448, 910152, 712538,
      734325, 855111, 672784, 980455, 964800, 707390,
    ];
    let after5 = [
      765209, 365068, 405579, 537740, 618457, 559274, 612862, 672390, 495617,
      771827, 601927, 375426, 415868, 573640, 606787, 719442, 883084, 588631,
      571549, 639343, 637627, 825052, 795614, 571168,
    ];

    let before6 = [
      607723, 610167, 619988, 823712, 804415, 686190, 748572, 814009, 665646,
      813307, 689957, 744434, 917697, 1045113, 996700, 1098262, 1143570,
      1013866, 1029676, 1118210, 849391, 998427, 871168, 881010,
    ];
    let after6 = [
      823387, 422468, 130312, 143918, 269162, 273258, 310828, 335688, 94319,
      216442, 244150, 92445, 155422, 284059, 296140, 269984, 366228, 341327,
      346521, 319276, 281426, 350640, 378615, 373480,
    ];

    let before7 = [
      1632310, 1812262, 1656214, 2127928, 2617655, 1862754, 1819941, 2279798,
      2685066, 2866015, 2103343, 2019979, 1797570, 2182656, 1937749, 2477251,
      2874800, 2089196, 2211359, 2777538, 2534950, 3002455, 2242111, 2045002,
    ];
    let after7 = [
      2038139, 652112, 415108, 530714, 633883, 146638, 536364, 805426, 408908,
      1330186, 1140425, 344234, 359147, 698763, 870114, 1030737, 1174854,
      933884, 633235, 759989, 982752, 1365174, 1464338, 942838,
    ];

    let before = [];
    let after = [];
    for (let i = 0; i < 24; i++) {
      before[i] =
        before1[i] +
        before2[i] +
        before3[i] +
        before4[i] +
        before5[i] +
        before6[i] +
        before7[i];
      after[i] =
        after1[i] +
        after2[i] +
        after3[i] +
        after4[i] +
        after5[i] +
        after6[i] +
        after7[i];
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

    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(before) * 2])
      .range([449, 50]);

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
      .attr("transform", "translate(" + 600 + "," + 350 + ")")
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
  let culture = [];
  let natural = [];
  let tourism = [];
  let culture1 = [
    33445, 27578, 32418, 42439, 51466, 42867, 39435, 40462, 45722, 53558, 46697,
    34857, 28646, 38667, 27159, 38033, 42036, 37605, 38482, 35767, 47900, 51580,
    42252, 35119,
  ];
  let natural1 = [
    557352, 446243, 660958, 949413, 962960, 791537, 694277, 764362, 707979,
    823958, 624993, 520129, 546474, 579702, 703626, 855394, 847389, 749950,
    629053, 720881, 565535, 802283, 621649, 561505,
  ];
  let tourism1 = [
    465825, 323911, 402565, 577178, 617161, 480206, 452136, 562513, 505095,
    590797, 453614, 387962, 481497, 455078, 515020, 674115, 816078, 584243,
    577154, 701482, 531806, 646268, 499920, 423446,
  ];

  let natural2 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let culture2 = [
    412451, 647006, 757435, 1110729, 1239388, 856042, 580459, 599483, 1554114,
    1416434, 1081318, 705133, 583501, 858179, 890328, 1381402, 1453265, 1040164,
    751698, 979568, 1412371, 1576249, 1224760, 727659,
  ];
  let tourism2 = [
    1219859, 1165256, 898779, 1017199, 1378267, 1006712, 1239482, 1680315,
    1130952, 1449581, 1022025, 1314846, 1214069, 1324477, 1047421, 1095849,
    1421535, 1049032, 1459661, 1797970, 1122579, 1426206, 1017351, 1317343,
  ];

  let culture3 = [
    57931, 55608, 88948, 139661, 154483, 109978, 64892, 67675, 141478, 187848,
    110162, 75268, 72164, 81825, 110564, 138400, 156125, 126040, 78937, 93517,
    127896, 156499, 100154, 73751,
  ];
  let natural3 = [
    54825, 80325, 100001, 139015, 180836, 204516, 209081, 232379, 206892,
    169911, 105642, 61097, 67209, 64243, 106608, 131681, 167871, 154938, 110289,
    170826, 154012, 151276, 93889, 52404,
  ];
  let tourism3 = [
    217196, 208597, 272429, 479818, 572714, 440067, 338572, 390415, 420725,
    484635, 364510, 420529, 292948, 282498, 369907, 499821, 591375, 470961,
    352376, 461804, 366577, 452998, 384253, 320218,
  ];
  let culture4 = [
    201408, 234775, 392422, 550489, 741481, 551743, 347935, 375402, 672702,
    708796, 404912, 218406, 397982, 252390, 349836, 540436, 886960, 532989,
    358177, 428933, 467387, 731837, 464179, 273341,
  ];
  let natural4 = [
    120869, 175613, 228159, 311192, 451189, 508253, 607684, 474397, 540422,
    543328, 256373, 191687, 337270, 399433, 556823, 719669, 917218, 930563,
    714911, 770007, 760933, 888486, 552826, 320502,
  ];
  let tourism4 = [
    2943781, 2973320, 4065143, 5558482, 7470993, 6132362, 5156517, 6093149,
    6278629, 7999868, 5218205, 4141564, 3044656, 3356802, 4153495, 6338512,
    7506745, 6267549, 5045541, 6644766, 5181183, 7496210, 5054817, 3389236,
  ];

  let culture5 = [
    134447, 102304, 125273, 192688, 253947, 177033, 172070, 231370, 195938,
    340645, 194582, 166054, 169721, 180975, 193704, 222431, 243043, 251388,
    188277, 270055, 183900, 332317, 199260, 170902,
  ];
  let natural5 = [
    129133, 97102, 141046, 226512, 407126, 282751, 344212, 531980, 256391,
    356522, 145707, 150792, 271616, 235893, 210204, 247840, 412989, 399183,
    400579, 661171, 305284, 590035, 354809, 261997,
  ];
  let tourism5 = [
    2755626, 1960045, 1805702, 2628939, 3394957, 2872351, 3317767, 3796339,
    2831314, 4042309, 2608356, 2584464, 3168483, 2578804, 2098182, 2251798,
    3036138, 2943618, 2976875, 4110372, 2463872, 4079748, 2446619, 2449003,
  ];
  let natural6 = [
    112130, 92459, 136307, 163714, 356790, 332129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let culture6 = [
    18332, 26155, 53895, 47956, 27099, 50468, 14709, 51840, 53650, 72780, 48129,
    33977, 48708, 42792, 52934, 48454, 52545, 51714, 90206, 86276, 78380,
    110218, 95838, 92532,
  ];
  let tourism6 = [
    537757, 490617, 605835, 710992, 831909, 675546, 574651, 674687, 742498,
    768632, 640134, 442464, 544726, 590998, 689523, 787904, 862021, 665024,
    670839, 792493, 611569, 874585, 862923, 663129,
  ];
  let culture7 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let natural7 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9730, 8453, 9425, 10221, 13711, 12433,
    11127, 9087, 10211, 12071, 11204, 6112,
  ];
  let tourism7 = [
    607723, 610167, 619988, 823712, 804415, 686190, 748572, 814009, 665646,
    813307, 689957, 744434, 907967, 1036660, 987275, 1088041, 1129859, 1001433,
    1018549, 1109123, 839180, 986356, 859964, 874898,
  ];

  for (let i = 0; i < 24; i++) {
    culture[i] =
      culture1[i] +
      culture2[i] +
      culture3[i] +
      culture4[i] +
      culture5[i] +
      culture6[i] +
      culture7[i];
    natural[i] =
      natural1[i] +
      natural2[i] +
      natural3[i] +
      natural4[i] +
      natural5[i] +
      natural6[i] +
      natural7[i];
    tourism[i] =
      tourism1[i] +
      tourism2[i] +
      tourism3[i] +
      tourism4[i] +
      tourism5[i] +
      tourism6[i] +
      tourism7[i];
  }
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
    .attr("transform", "translate(" + 615 + "," + 210 + ")")
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
    .style("fill", d3.schemeCategory10[0])
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
  let culture = [];
  let natural = [];
  let tourism = [];

  let culture1 = [
    33799, 13590, 7404, 10667, 15575, 12873, 17960, 15474, 1155, 18674, 20702,
    8168, 5826, 10784, 15353, 19006, 20071, 15203, 14162, 12709, 10883, 16796,
    16200, 9569,
  ];
  let natural1 = [
    552172, 266075, 219524, 203062, 362438, 334431, 403550, 484982, 262383,
    476372, 479039, 213178, 131342, 226401, 303871, 387401, 479956, 428141,
    408781, 357310, 325484, 503573, 546886, 440093,
  ];
  let tourism1 = [
    488269, 223741, 122397, 146969, 255282, 228827, 286653, 394199, 183015,
    364831, 384800, 163883, 124480, 211446, 244850, 355093, 396043, 333292,
    316667, 306255, 270923, 423568, 444690, 337552,
  ];
  let culture2 = [
    811883, 293522, 291454, 415345, 402882, 58249, 126155, 192525, 296788,
    686958, 568491, 189838, 193040, 331045, 474236, 597167, 554551, 382670,
    197053, 244399, 512574, 722664, 843086, 334705,
  ];
  let natural2 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let tourism2 = [
    1226256, 358590, 123654, 115369, 231001, 88389, 410209, 612901, 112120,
    643228, 571934, 154396, 166107, 367718, 395878, 433570, 620303, 551214,
    436182, 515590, 470178, 642510, 621252, 608133,
  ];

  let culture3 = [
    79713, 50746, 80213, 100660, 108870, 55196, 56235, 50647, 67525, 106852,
    75562, 49211, 55104, 78756, 70911, 72731, 95172, 79099, 34170, 57206,
    104847, 120977, 83358, 56932,
  ];
  let natural3 = [
    75069, 63752, 105607, 142840, 168692, 244990, 202856, 171231, 194192,
    213055, 114290, 72720, 81431, 152093, 114537, 208675, 254298, 173043,
    153133, 254638, 227938, 166254, 117616, 70241,
  ];
  let tourism3 = [
    295700, 92196, 24393, 39489, 74452, 38052, 52318, 72667, 41214, 101206,
    102299, 33144, 32509, 57516, 62492, 104631, 157673, 130211, 61398, 64862,
    84670, 153509, 154512, 99150,
  ];

  let culture4 = [
    272777, 169056, 298162, 407729, 442589, 117913, 252494, 265331, 366884,
    627336, 378523, 213040, 214514, 312148, 291220, 442786, 580326, 563896,
    237700, 337276, 624832, 628423, 471232, 245109,
  ];
  let natural4 = [
    381858, 405065, 808504, 696997, 803562, 698327, 895936, 490384, 562470,
    950564, 643945, 482413, 412703, 483487, 522874, 719327, 779839, 718442,
    645167, 892924, 1051441, 921798, 644183, 451198,
  ];
  let tourism4 = [
    3026905, 1466886, 1594528, 2196269, 3071007, 2369007, 2538252, 2114352,
    2137429, 4282694, 2661815, 1060727, 1016987, 1852234, 2140343, 3064464,
    3916704, 3239325, 2406971, 2913229, 3248415, 4279912, 3264638, 1958480,
  ];

  let culture5 = [
    180950, 112264, 119077, 130639, 205575, 170111, 196961, 243276, 162807,
    308182, 209506, 127844, 111041, 163764, 111556, 154231, 206363, 177136,
    164551, 218181, 181550, 258258, 214276, 140863,
  ];
  let natural5 = [
    337210, 270216, 206335, 185691, 337543, 282955, 309536, 381219, 187681,
    481101, 279020, 80253, 95435, 188910, 138646, 208780, 332004, 282978,
    345887, 410993, 253919, 488838, 250244, 147192,
  ];
  let tourism5 = [
    2784196, 1588496, 848147, 958495, 1675687, 1616737, 1898449, 2368951,
    1102918, 2569478, 1707533, 862440, 719685, 1219774, 982941, 1555689,
    2057209, 2004112, 2113869, 2441311, 1764390, 2604386, 1903804, 1457729,
  ];

  let culture6 = [
    16112, 13670, 14389, 33565, 31655, 29565, 39360, 35172, 28692, 15647, 14897,
    11135, 13046, 15040, 15623, 15063, 16368, 14586, 29728, 32231, 36498, 16358,
    13895, 10884,
  ];
  let natural6 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9377, 7996, 11744, 14174, 8472, 6190,
    7681, 3340, 4495, 3017, 2734, 1411,
  ];
  let tourism6 = [
    749078, 351329, 391190, 504175, 586490, 529497, 573294, 637119, 466595,
    755778, 586766, 364245, 393383, 550426, 579167, 689654, 857855, 567621,
    534023, 603652, 596349, 805237, 778750, 558840,
  ];

  let culture7 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  let natural7 = [
    1482, 2330, 5049, 6011, 17806, 7800, 17200, 8400, 4600, 13000, 8200, 4400,
    7000, 9900, 10200, 14400, 18000, 20170, 13166, 17838, 16280, 23617, 19002,
    12405,
  ];
  let tourism7 = [
    821905, 420138, 125263, 137907, 251356, 265458, 293628, 327288, 89719,
    203442, 235950, 88045, 148422, 274159, 285940, 255584, 348228, 321157,
    333355, 301438, 265146, 327023, 359613, 361075,
  ];

  for (let i = 0; i < 24; i++) {
    culture[i] =
      culture1[i] +
      culture2[i] +
      culture3[i] +
      culture4[i] +
      culture5[i] +
      culture6[i] +
      culture7[i];
    natural[i] =
      natural1[i] +
      natural2[i] +
      natural3[i] +
      natural4[i] +
      natural5[i] +
      natural6[i] +
      natural7[i];
    tourism[i] =
      tourism1[i] +
      tourism2[i] +
      tourism3[i] +
      tourism4[i] +
      tourism5[i] +
      tourism6[i] +
      tourism7[i];
  }
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
    .attr("transform", "translate(" + 615 + "," + 280 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[2])
    .text("관광 시설");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 420 + ")")
    .attr("dy", ".500em")
    .attr("text-anchor", "start")
    .style("fill", d3.schemeCategory10[0])
    .text("문화");

  lines
    .append("text")
    .style("font-size", "0.7em")
    .attr("transform", "translate(" + 615 + "," + 405 + ")")
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
export default Korea;
