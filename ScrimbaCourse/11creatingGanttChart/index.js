var data = [{
        "id": 1,
        "linha": "101",
        "saida": 385,
        "entrada": 425
    },
    {
        "id": 2,
        "linha": "101",
        "saida": 435,
        "entrada": 475
    },
    {
        "id": 3,
        "linha": "101",
        "saida": 480,
        "entrada": 505
    },
    {
        "id": 4,
        "linha": "104",
        "saida": 385,
        "entrada": 425
    },
    {
        "id": 5,
        "linha": "104",
        "saida": 435,
        "entrada": 487
    },
    {
        "id": 6,
        "linha": "104",
        "saida": 723,
        "entrada": 760
    },
    {
        "id": 7,
        "linha": "109",
        "saida": 770,
        "entrada": 810
    },
    {
        "id": 8,
        "linha": "110",
        "saida": 385,
        "entrada": 425
    },
    {
        "id": 9,
        "linha": "110",
        "saida": 435,
        "entrada": 490
    },
    {
        "id": 10,
        "linha": "110",
        "saida": 500,
        "entrada": 550
    },
    {
        "id": 11,
        "linha": "110",
        "saida": 560,
        "entrada": 607
    },
    {
        "id": 12,
        "linha": "110",
        "saida": 615,
        "entrada": 660
    },
    {
        "id": 13,
        "linha": "110",
        "saida": 670,
        "entrada": 720
    },
    {
        "id": 14,
        "linha": "110",
        "saida": 730,
        "entrada": 789
    },
    {
        "id": 14,
        "linha": "110",
        "saida": 1000,
        "entrada": 1063
    },
    {
        "id": 14,
        "linha": "110",
        "saida": 1300,
        "entrada": 1355
    },
]

var rectTransform = function(d) {
    return "translate(" + x1(d.saida) + "," + y(d.linha) + ")";
};

var cars = d3.groups(data, d => d.linha);

var mediaName = cars.map(d => d[0])

var color = d3.scaleOrdinal().domain(mediaName).range(['#984EA3', '#FF7F00', '#E41A1C', '#377EB8', '#999999', '#FFFF33', '#A65628', '#4DAF4A', ])

const svgHeight = 500,
    svgWidth = 1100;

var margin = { top: 60, right: 55, bottom: 60, left: 90 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xDomain = [d3.min(data, d => d.saida), d3.max(data, d => d.entrada)]

var x1 = d3.scaleTime()
    .domain(xDomain)
    .range([15, width]);

var x2 = d3.scaleTime()
    .domain(xDomain)
    .range([15, width]);

var y = d3.scaleBand()
    .domain(data.map(function(x) { return x.linha }))
    .range([0, height])
    .paddingInner(0.20)
    .paddingOuter(1)

var x1Generator = d3.axisBottom(x1)

var x2Generator = d3.axisTop(x2)

var yGenerator = d3.axisLeft(y)

let xTickLabels = e => `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, '0')}`;
// xGenerator.ticks(29)
x1Generator.tickFormat((d) => xTickLabels(d));
x2Generator.tickFormat((d) => xTickLabels(d));

//x1 axis tick labels
yGenerator.ticks(mediaName.length)
let yTickLabels = e => e;
yGenerator.tickFormat((d) => {
    return yTickLabels(d)
});

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

const rects = g.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', 0)
    .attr('height', y.bandwidth())
    .attr('width', d => x1(d.entrada) - x1(d.saida))
    .attr("rx", 6)
    .attr("ry", 6)
    .style("fill", d => color(d.linha))
    .attr('transform', rectTransform);