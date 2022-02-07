//javascript
var data = [
    { "platform": "Android", "percentage": 20.11 },
    { "platform": "macOS", "percentage": 20 },
    { "platform": "Windows", "percentage": 36.69 },
    { "platform": "iOS", "percentage": 13.06 },
    { "platform": "Linux", "percentage": 11.08 },
]

var svgWidth = 600,
    svgHeight = 500,
    radius = Math.min(svgWidth, svgHeight) / 2;

var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//Create group element to hold pie chart
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")")

var color = d3.scaleOrdinal(d3.schemeCategory10)

var pie = d3.pie().value((d) => d.percentage)

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")

arc.append("path")
    .attr("d", path)
    .attr("fill", (d) => color(d.data.percentage))

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

arc.append("text")
    .attr("transform", (d) => (
        "translate(" + label.centroid(d) + ")"
    ))
    .attr("text-anchor", "middle")
    .text((d) => d.data.platform + ":" + d.data.percentage + "%")
    .attr("fill", "#ffffff")
    .attr("font-weight", "bolder")