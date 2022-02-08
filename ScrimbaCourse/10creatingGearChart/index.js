// 1 = AB
// 2 = BA
const data = [
    { id: 1, linha: "101", direcao: 2, horario: 360 },
    { id: 2, linha: "101", direcao: 1, horario: 390 },
    { id: 3, linha: "101", direcao: 2, horario: 420 },
    { id: 4, linha: "101", direcao: 1, horario: 450 },
    { id: 5, linha: "101", direcao: 2, horario: 480 },
    { id: 6, linha: "101", direcao: 1, horario: 510 },
    { id: 7, linha: "101", direcao: 2, horario: 540 },
    { id: 8, linha: "101", direcao: 1, horario: 570 },
    { id: 12, linha: "101", direcao: 2, horario: 600 },
    { id: 13, linha: "101", direcao: 1, horario: 630 },
    { id: 14, linha: "101", direcao: 2, horario: 660 },
    { id: 15, linha: "101", direcao: 1, horario: 690 },
    { id: 16, linha: "101", direcao: 2, horario: 705 },
    { id: 17, linha: "101", direcao: 1, horario: 735 },
    { id: 18, linha: "101", direcao: 2, horario: 760 },
    { id: 19, linha: "101", direcao: 1, horario: 790 },
]

// const data2 = [
//     ...data.filter(e => e.linha != data[0].linha)
// ]

var svgWidth = 1000,
    svgHeight = 600;

var margin = { top: 60, right: 70, bottom: 60, left: 70 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");

//components group position
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//x axis width scale
var x1 = d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.horario))
    .nice()
    .range([15, width]);

var x2 = d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.horario))
    .nice()
    .range([15, width]);

//y axis width scale
var y = d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.direcao))
    .range([height, 0]);

//axies generator
var x1Generator = d3.axisBottom(x1)
    // .scale(x1)

var x2Generator = d3.axisTop(x2)
    // .scale(x2)

var yGenerator = d3.axisLeft(y)

let xTickLabels = e => `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, '0')}`

//x1 axis tick labels
x1Generator.tickFormat((d) => xTickLabels(d));
//x2 axis tick labels
x2Generator.tickFormat((d) => xTickLabels(d));

//y axis tick labels
let yTickLabels = ["AB", "BA"]
yGenerator.ticks(1)
yGenerator.tickFormat((d, i) => yTickLabels[i])

//creating the line container
var line1 = d3.line()
    .x((d) => x1(d.horario))
    .y((d) => y(d.direcao))

//components
g.append("g")
    .attr("transform", "translate(0," + (height + 10) + ")")
    .call(x1Generator)

g.append("g")
    .attr("transform", "translate(0,-10)")
    .call(x2Generator)

g.append("g")
    .call(yGenerator)

g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#FFA900")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 3)
    .attr("d", line1)

//ticks text style
g.selectAll(".tick text")
    .attr("font-size", 22)
    .attr("font-family", "Roboto")
    .attr("color", "#059451")

//domains style
g.selectAll(".domain")
    .attr("stroke-width", "2")
    .attr("opacity", ".6")
    .attr("color", "#059451");

//dots
g.selectAll("firstCircles")
    .data(data)
    .join("circle")
    .attr("fill", "#FFA900")
    .attr("stroke", "#c3f3c3")
    .attr("stroke-width", 2)
    .attr("cx", function(d) { return x1(d.horario) })
    .attr("cy", function(d) { return y(d.direcao) })
    .attr("r", 7)