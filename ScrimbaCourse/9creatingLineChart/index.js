// 1 = AB
// 2 = BA

const data = [
    { id: 1, linha: "101", direcao: 2, horario: 385 },
    { id: 2, linha: "101", direcao: 1, horario: 425 },
    { id: 3, linha: "101", direcao: 2, horario: 440 },
    { id: 4, linha: "101", direcao: 1, horario: 480 },
    { id: 5, linha: "101", direcao: 2, horario: 480 },
    { id: 6, linha: "101", direcao: 1, horario: 545 },
    { id: 7, linha: "101", direcao: 2, horario: 565 },
    { id: 8, linha: "101", direcao: 1, horario: 605 },
    { id: 9, linha: "101", direcao: 2, horario: 665 },
    { id: 10, linha: "101", direcao: 2, horario: 675 },
    { id: 11, linha: "101", direcao: 1, horario: 725 },
    { id: 12, linha: "101", direcao: 2, horario: 785 },
    { id: 14, linha: "101", direcao: 1, horario: 805 },
]

var svgWidth = 800,
    svgHeight = 600;
var margin = { top: 20, right: 20, bottom: 30, left: 50 };
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
var x1 = d3.scaleTime()
    .rangeRound([2, width]);

var x2 = d3.scaleTime()
    .rangeRound([2, width]);

//y axis width scale
var y = d3.scaleLinear()
    .rangeRound([height, 0]);

//creating the line
var line = d3.line()
    .x(function(d) { return x1(d.horario) })
    .y(function(d) { return y(d.direcao) })

x1.domain(d3.extent(data, function(d) { return d.horario }));
x2.domain(d3.extent(data, function(d) { return d.horario }));
y.domain(d3.extent(data, function(d) { return d.direcao }));

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x1))

g.append("g")
    .attr("transform", "translate(0,0)")
    .call(d3.axisBottom(x2))

g.append("g")
    .call(d3.axisLeft(y))

g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#059451")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 2)
    .attr("d", line);