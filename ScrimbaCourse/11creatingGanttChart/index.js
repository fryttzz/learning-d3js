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
]

var rectTransform = function(d) {
    return "translate(" + x1(d.saida) + "," + y(d.linha) + ")";
};

var cars = d3.groups(data, d => d.linha);

var mediaName = cars.map(d => d[0])

var color = d3.scaleOrdinal().domain(mediaName).range(['#984EA3', '#FF7F00', '#E41A1C', '#377EB8', '#999999', '#FFFF33', '#A65628', '#4DAF4A', ])

const svgHeight = 600,
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
    .nice()
    .range([15, width]);

var x2 = d3.scaleTime()
    .domain(xDomain)
    .nice()
    .range([15, width]);

var y = d3.scaleBand()
    .domain(data.map(function(x) { return x.linha }))
    .range([0, height])
    .paddingInner(0.3)

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

d3.gantt = function() {
    var FIT_TIME_DOMAIN_MODE = "fit";
    var FIXED_TIME_DOMAIN_MODE = "fixed";

    var margin = {
        top: 20,
        right: 40,
        bottom: 20,
        left: 150
    };
    var timeDomainStart = d3.time.day.offset(new Date(), -3);
    var timeDomainEnd = d3.time.hour.offset(new Date(), +3);
    var timeDomainMode = FIT_TIME_DOMAIN_MODE; // fixed or fit
    var taskTypes = [];
    var taskStatus = [];
    var height = document.body.clientHeight - margin.top - margin.bottom - 5;
    var width = document.body.clientWidth - margin.right - margin.left - 5;

    var tickFormat = "%H:%M";

    var keyFunction = function(d) {
        return d.startDate + d.taskName + d.endDate;
    };

    var rectTransform = function(d) {
        return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
    };

    var x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width]).clamp(true);

    var y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], .1);

    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
        .tickSize(8).tickPadding(8);

    var yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);

    var initTimeDomain = function() {
        if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
            if (tasks === undefined || tasks.length < 1) {
                timeDomainStart = d3.time.day.offset(new Date(), -3);
                timeDomainEnd = d3.time.hour.offset(new Date(), +3);
                return;
            }
            tasks.sort(function(a, b) {
                return a.endDate - b.endDate;
            });
            timeDomainEnd = tasks[tasks.length - 1].endDate;
            tasks.sort(function(a, b) {
                return a.startDate - b.startDate;
            });
            timeDomainStart = tasks[0].startDate;
        }
    };

    var initAxis = function() {
        x = d3.time.scale().domain([timeDomainStart, timeDomainEnd]).range([0, width]).clamp(true);
        y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([0, height - margin.top - margin.bottom], .1);
        xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
            .tickSize(8).tickPadding(8);

        yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);
    };

    function gantt(tasks) {

        initTimeDomain();
        initAxis();

        var svg = d3.select("body")
            .append("svg")
            .attr("class", "chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("class", "gantt-chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

        svg.selectAll(".chart")
            .data(tasks, keyFunction).enter()
            .append("rect")
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("class", function(d) {
                if (taskStatus[d.status] == null) { return "bar"; }
                return taskStatus[d.status];
            })
            .attr("y", 0)
            .attr("transform", rectTransform)
            .attr("height", function(d) { return y.rangeBand(); })
            .attr("width", function(d) {
                return (x(d.endDate) - x(d.startDate));
            });


        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + (height - margin.top - margin.bottom) + ")")
            .transition()
            .call(xAxis);

        svg.append("g").attr("class", "y axis").transition().call(yAxis);

        return gantt;

    };

    gantt.redraw = function(tasks) {

        initTimeDomain();
        initAxis();

        var svg = d3.select("svg");

        var ganttChartGroup = svg.select(".gantt-chart");
        var rect = ganttChartGroup.selectAll("rect").data(tasks, keyFunction);

        rect.enter()
            .insert("rect", ":first-child")
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("class", function(d) {
                if (taskStatus[d.status] == null) { return "bar"; }
                return taskStatus[d.status];
            })
            .transition()
            .attr("y", 0)
            .attr("transform", rectTransform)
            .attr("height", function(d) { return y.rangeBand(); })
            .attr("width", function(d) {
                return (x(d.endDate) - x(d.startDate));
            });

        rect.transition()
            .attr("transform", rectTransform)
            .attr("height", function(d) { return y.rangeBand(); })
            .attr("width", function(d) {
                return (x(d.endDate) - x(d.startDate));
            });

        rect.exit().remove();

        svg.select(".x").transition().call(xAxis);
        svg.select(".y").transition().call(yAxis);

        return gantt;
    };

    gantt.margin = function(value) {
        if (!arguments.length)
            return margin;
        margin = value;
        return gantt;
    };

    gantt.timeDomain = function(value) {
        if (!arguments.length)
            return [timeDomainStart, timeDomainEnd];
        timeDomainStart = +value[0], timeDomainEnd = +value[1];
        return gantt;
    };

    /**
     * @param {string}
     *                vale The value can be "fit" - the domain fits the data or
     *                "fixed" - fixed domain.
     */
    gantt.timeDomainMode = function(value) {
        if (!arguments.length)
            return timeDomainMode;
        timeDomainMode = value;
        return gantt;

    };

    gantt.taskTypes = function(value) {
        if (!arguments.length)
            return taskTypes;
        taskTypes = value;
        return gantt;
    };

    gantt.taskStatus = function(value) {
        if (!arguments.length)
            return taskStatus;
        taskStatus = value;
        return gantt;
    };

    gantt.width = function(value) {
        if (!arguments.length)
            return width;
        width = +value;
        return gantt;
    };

    gantt.height = function(value) {
        if (!arguments.length)
            return height;
        height = +value;
        return gantt;
    };

    gantt.tickFormat = function(value) {
        if (!arguments.length)
            return tickFormat;
        tickFormat = value;
        return gantt;
    };



    return gantt;
};