var data = [{
        "id": 1,
        "carro": 3,
        "linha": "101",
        "saida": 385,
        "entrada": 425
    },
    {
        "id": 2,
        "carro": 3,
        "linha": "101",
        "saida": 435,
        "entrada": 475
    },
    {
        "id": 3,
        "carro": 3,
        "linha": "101",
        "saida": 480,
        "entrada": 505
    },
    {
        "id": 4,
        "carro": 3,
        "linha": "104",
        "saida": 515,
        "entrada": 570
    },
    {
        "id": 5,
        "carro": 3,
        "linha": "104",
        "saida": 580,
        "entrada": 630
    },
    {
        "id": 6,
        "carro": 3,
        "linha": "104",
        "saida": 645,
        "entrada": 700
    },
    {
        "id": 7,
        "carro": 3,
        "linha": "109",
        "saida": 709,
        "entrada": 750
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
console.log([d3.min(data, d => d.saida), d3.max(data, d => d.entrada)]);

var x1 = d3.scaleTime()
    .domain(xDomain)
    .range([15, width]);

var x2 = d3.scaleTime()
    .domain(xDomain)
    .range([15, width]);

var y = d3.scaleBand()
    .domain(data.map(function(x) { return x.linha }))
    .range([0, height])
    .paddingInner(0.62)
    .paddingOuter(2)

var x1Generator = d3.axisBottom(x1)

var x2Generator = d3.axisTop(x2)

var yGenerator = d3.axisLeft(y)

let xTickLabels = e => `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, '0')}`;
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
    .style("fill", d => color(d.carro))
    .attr('transform', rectTransform);