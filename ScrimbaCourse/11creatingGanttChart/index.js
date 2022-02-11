var data = [{
        "linha": "101",
        "saida": 385,
        "entrada": 425
    },
    {
        "linha": "101",
        "saida": 435,
        "entrada": 475
    },
    {
        "linha": "101",
        "saida": 480,
        "entrada": 505
    },
    {
        "linha": "104",
        "saida": 430,
        "entrada": 480
    },
    {
        "linha": "104",
        "saida": 490,
        "entrada": 540
    },
    {
        "linha": "104",
        "saida": 723,
        "entrada": 760
    },
    {
        "linha": "108",
        "saida": 770,
        "entrada": 810
    }
]

var cars = d3.group(data,
    d => d.linha)

var res = Array.from(cars.keys()); // list of group names
var color = d3.scaleOrdinal()
    .domain(res)
    .range(['#984ea3', '#ff7f00', '#e41a1c', '#377eb8', '#999999', '#ffff33', '#a65628', '#4daf4a', ])

const svgHeight = 600,
    svgWidth = 1100;

var margin = { top: 30, right: 55, bottom: 60, left: 90 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//x axes with stale
var x = d3.scaleTime()
    .domain(d3.extent(data, (d) => d.entrada))
    .nice()
    .range([15, width]);

//y axis width scale
var y = d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.linha))
    .nice()
    .range([height, 15]);

var xGenerator = d3.axisBottom(x)

var yGenerator = d3.axisLeft(y)

let xTickLabels = e => `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, '0')}`;
// x1Generator.ticks(29)
xGenerator.tickFormat((d) => xTickLabels(d));

//x1 axis tick labels
yGenerator.ticks(res.length)
let yTickLabels = e => e;
yGenerator.tickFormat((d) => yTickLabels(d));

g.append("g")
    .attr("transform", "translate(0," + (height + 10) + ")")
    .call(xGenerator);

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

// g.selectAll('rect').data(data)
//     .enter()
//     .append('rect')
//     .attr('y', 0)
//     .attr('height', 50)
//     .attr('width', d => d.entrada - d.saida)
//     .attr('transform', (d, i) => {
//         var translate = [d.entrada - d.saida - i, height - d.linha];
//         return 'translate(' + translate + ')';
//     });