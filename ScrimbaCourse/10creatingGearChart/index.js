// 1 = AB
// 2 = BA
const data = [
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 385 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 425 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 440 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 480 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 495 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 545 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 565 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 605 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 620 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 665 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 680 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 725 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 745 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 785 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 805 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 840 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 855 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 905 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 920 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 965 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 980 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 1025 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 1040 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 1090 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 1100 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 2, horario: 1118 },
    { linha: "101", dia_operacao: "Seg a Sex", sentido: 1, horario: 1135 },
    { linha: "104", dia_operacao: "Seg a Sex", sentido: 1, horario: 430 },
    { linha: "104", dia_operacao: "Seg a Sex", sentido: 1, horario: 480 },
    { linha: "104", dia_operacao: "Seg a Sex", sentido: 2, horario: 723 },
    { linha: "104", dia_operacao: "Seg a Sex", sentido: 1, horario: 745 },
    { linha: "104", dia_operacao: "Seg a Sex", sentido: 2, horario: 780 },
    { linha: "104", dia_operacao: "Seg a Sex", sentido: 1, horario: 805 },
    { linha: "107", dia_operacao: "Seg a Sex", sentido: 2, horario: 1090 },
    { linha: "107", dia_operacao: "Seg a Sex", sentido: 1, horario: 1120 },
    { linha: "109", dia_operacao: "Seg a Sex", sentido: 1, horario: 1150 },
];

var sumstat = d3.groups(data, d => d.linha);

//set color pallete for different vairables
var mediaName = sumstat.map(d => d[0])

var color = d3.scaleOrdinal().domain(mediaName).range(['#984EA3', '#FF7F00', '#E41A1C', '#377EB8', '#999999', '#FFFF33', '#A65628', '#4DAF4A', ])

var svgWidth = 1100,
    svgHeight = 600;

// var svgWidth = 3300,
//     svgHeight = 600;

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
    .domain(d3.extent(data, (d) => {
        return d.sentido
    }))
    .range([height, 0]);

//axies generator
var x1Generator = d3.axisBottom(x1)

var x2Generator = d3.axisTop(x2)

var yGenerator = d3.axisLeft(y)

let xTickLabels = e => `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, '0')}`;
//x1 axis tick labels
// x1Generator.ticks(29)
x1Generator.tickFormat((d) => xTickLabels(d));

//x2 axis tick labels
// x2Generator.ticks(29)
x2Generator.tickFormat((d) => xTickLabels(d));

//y axis tick labels
let yTickLabels = ["AB", "BA"]
yGenerator.ticks(1)
yGenerator.tickFormat((d, i) => yTickLabels[i])

//components
g.append("g")
    .attr("transform", "translate(0," + (height + 10) + ")")
    .call(x1Generator);

g.append("g")
    .attr("transform", "translate(0,-10)")
    .call(x2Generator);

g.append("g")
    .call(yGenerator);

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

//path and lines
var line = d3.line()
    .x((d) => x1(d.horario))
    .y((d) => y(d.sentido))
    // .curve(d3.curveCardinal);

const lines = g.selectAll("lines")
    .data(sumstat)
    .enter()
    .append("g");

lines.append("path")
    .attr('fill', 'none')
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr('stroke', d => color(d[0]))
    .attr('stroke-width', 3)
    .attr("d", function(d) {
        return line(d[1]);
    });

g.selectAll("circle")
    .append("g")
    .data(data)
    .enter()
    .append("circle")
    .attr("stroke", "#c3f3c3")
    .attr("stroke-width", 2)
    .attr("r", 6)
    .attr("cx", d => x1(d.horario))
    .attr("cy", d => y(d.sentido))
    .style("fill", d => color(d.linha))

//array of cars
// const carsNames = data.map((element, index, array) => {
//     let ax = array[index]
//     if (element.linha === ax.linha)
//         return element.linha
// })

//reduce the objects for each car 
// const carsCount = Object.keys(carsNames.reduce((obj, linha) => {
//     if (!obj[linha]) {
//         obj[linha] = 1;
//     } else {
//         obj[linha]++;
//     }
//     return obj;
// }, {}));

//create a array for each car
// const cars = []
// for (let index = 0; index < carsCount.length; index++) {
//     const element = carsCount[index];
//     const linhas = data.filter((data) => {
//         return data.linha === element
//     })
//     cars.push(linhas)
// }