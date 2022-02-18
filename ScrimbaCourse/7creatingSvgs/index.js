//javascript
var svgWidth = 700,
    svgHeight = 500;

var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container")

// var ida = svg.append("line")
//     .attr("x1", 20)
//     .attr("x2", 270)
//     .attr("y1", 450)
//     .attr("y2", 50)
//     .attr("stroke", "red")
//     .attr("stroke-width", 3)

// var volta = svg.append("line")
//     .attr("x1", 580)
//     .attr("x2", 330)
//     .attr("y1", 450)
//     .attr("y2", 50)
//     .attr("stroke", "red")
//     .attr("stroke-width", 3)

// var tempo_terminal_b = svg.append("line")
//     .attr("x1", 330)
//     .attr("x2", 270)
//     .attr("y1", 50)
//     .attr("y2", 50)
//     .attr("stroke", "red")
//     .attr("stroke-width", 3)

// var tempo_terminal_a = svg.append("line")
//     .attr("x1", 650)
//     .attr("x2", 580)
//     .attr("y1", 450)
//     .attr("y2", 450)
//     .attr("stroke", "red")
//     .attr("stroke-width", 3)

var top = svg.append("line")
    .attr("x1", 700)
    .attr("x2", 0)
    .attr("y1", 50)
    .attr("y2", 50)
    .attr("stroke", "black")
    .attr("stroke-width", 1)

var bottom = svg.append("line")
    .attr("x1", 700)
    .attr("x2", 0)
    .attr("y1", 450)
    .attr("y2", 450)
    .attr("stroke", "black")
    .attr("stroke-width", 1)

var data = [
    //carro 1
    { car: 1, xpoint: 100, ypoint: 450 },
    { car: 1, xpoint: 200, ypoint: 50 },

    { car: 1, xpoint: 200, ypoint: 50 },
    { car: 1, xpoint: 300, ypoint: 450 },

    { car: 1, xpoint: 300, ypoint: 450 },
    { car: 1, xpoint: 400, ypoint: 50 },

    { car: 1, xpoint: 430, ypoint: 50 },
    { car: 1, xpoint: 530, ypoint: 450 },

    { car: 1, xpoint: 560, ypoint: 450 },
    { car: 1, xpoint: 660, ypoint: 50 },

    //carro 2
    { car: 2, xpoint: 150, ypoint: 450 },
    { car: 2, xpoint: 250, ypoint: 50 },

    { car: 2, xpoint: 250, ypoint: 50 },
    { car: 2, xpoint: 350, ypoint: 450 },

    { car: 2, xpoint: 350, ypoint: 450 },
    { car: 2, xpoint: 450, ypoint: 50 },

    { car: 2, xpoint: 480, ypoint: 50 },
    { car: 2, xpoint: 580, ypoint: 450 },

    { car: 2, xpoint: 610, ypoint: 450 },
    { car: 2, xpoint: 710, ypoint: 50 },

    //carro 3
    { car: 3, xpoint: 150, ypoint: 50 },
    { car: 3, xpoint: 250, ypoint: 450 },

    { car: 3, xpoint: 250, ypoint: 450 },
    { car: 3, xpoint: 350, ypoint: 50 },

    { car: 3, xpoint: 350, ypoint: 50 },
    { car: 3, xpoint: 450, ypoint: 450 },

    { car: 3, xpoint: 480, ypoint: 450 },
    { car: 3, xpoint: 580, ypoint: 50 },

    { car: 3, xpoint: 610, ypoint: 50 },
    { car: 3, xpoint: 710, ypoint: 450 },
];

var sumstat = d3.groups(data, d => d.car);
var mediaName = sumstat.map(d => d[0])

var color = d3.scaleOrdinal().domain(mediaName).range(['#984EA3', '#FF7F00', '#E41A1C', '#377EB8', '#999999', '#FFFF33', '#A65628', '#4DAF4A', ])

var line = d3.line()
    .x((p) => p.xpoint)
    .y((p) => p.ypoint)
    .curve(d3.curveCatmullRom.alpha(0.29))

const lines = svg.selectAll("lines")
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