const data = [{
        "id": "1",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 545, //09:05
        "saida": 549,
        "diferenca": 4,
        "entrada": 584,
        "tempo_viagem1": 35,
        "tempo_planejado1": 40,
        "tempo_parado1": 2,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 0
    },
    {
        "id": "2",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 585, //09:45
        "saida": 586,
        "diferenca": 1,
        "entrada": 619,
        "tempo_viagem": 33,
        "tempo_planejado1": 35,
        "tempo_parado1": 2,
        "tempo_volta": 68,
        "tempo_planejado2": 75,
        "tempo_parado2": 7,
        "sentido": 1
    },
    {
        "id": "3",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 620,
        "saida": 621,
        "diferenca": 1,
        "entrada": 657,
        "tempo_viagem": 36,
        "tempo_planejado1": 40,
        "tempo_parado1": 3,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 0
    },
    {
        "id": "4",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 660,
        "saida": 660,
        "diferenca": 0,
        "entrada": 692,
        "tempo_viagem": 32,
        "tempo_planejado1": 35,
        "tempo_parado1": 2,
        "tempo_volta": 68,
        "tempo_planejado2": 75,
        "tempo_parado2": 7,
        "sentido": 1
    },
    {
        "id": "5",
        "itinerario": "Ref.Mal.Floriano/Trav.Leopoldina/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 695,
        "saida": 694,
        "diferenca": -1,
        "entrada": 724,
        "tempo_viagem": 30,
        "tempo_planejado1": 45,
        "tempo_parado1": 16,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 0
    },
    {
        "id": "6",
        "itinerario": "Serrano/Eldorado/Mal.Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 740,
        "saida": 740,
        "diferenca": 0,
        "entrada": 774,
        "tempo_viagem": 34,
        "tempo_planejado1": 35,
        "tempo_parado1": 1,
        "tempo_volta": 64,
        "tempo_planejado2": 80,
        "tempo_parado2": 16,
        "sentido": 1
    },
    {
        "id": "7",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 775,
        "saida": 775,
        "diferenca": 0,
        "entrada": 805,
        "tempo_viagem": 30,
        "tempo_planejado1": 40,
        "tempo_parado1": 11,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 0
    },
    {
        "id": "8",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 815,
        "saida": 816,
        "diferenca": 1,
        "entrada": 851,
        "tempo_viagem": 35,
        "tempo_planejado1": 35,
        "tempo_parado1": 2,
        "tempo_volta": 65,
        "tempo_planejado2": 75,
        "tempo_parado2": 10,
        "sentido": 1
    },
    {
        "id": "9",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 850,
        "saida": 853,
        "diferenca": 3,
        "entrada": 887,
        "tempo_viagem": 34,
        "tempo_planejado1": 40,
        "tempo_parado1": 4,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 0
    },
    {
        "id": "10",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 890,
        "saida": 890,
        "diferenca": 1,
        "entrada": 929,
        "tempo_viagem": 38,
        "tempo_planejado1": 35,
        "tempo_parado1": 2,
        "tempo_volta": 72,
        "tempo_planejado2": 75,
        "tempo_parado2": 3,
        "sentido": 1
    },
    {
        "id": "11",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 925,
        "saida": 935,
        "diferenca": 6,
        "entrada": 969,
        "tempo_viagem": 38,
        "tempo_planejado1": 45,
        "tempo_parado1": 3,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 0
    },
    {
        "id": "12",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": 970,
        "saida": 972,
        "diferenca": 2,
        "entrada": 1008,
        "tempo_viagem": 36,
        "tempo_planejado1": 85,
        "tempo_parado1": 0,
        "tempo_volta": 74,
        "tempo_planejado2": 130,
        "tempo_parado2": 56,
        "sentido": 1
    },
    {
        "id": "13",
        "itinerario": "Viagem de deslocamento",
        "carro": "402",
        "reserva": "",
        "saida_planejado": 1055,
        "saida": 0,
        "diferenca": 0,
        "entrada": 0,
        "tempo_viagem": 0,
        "tempo_planejado1": 25,
        "tempo_parado1": 0,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 1
    },
    {
        "id": "14",
        "itinerario": "Ref.Mal.Floriano/Trav.Leopoldina/Serrano",
        "carro": "402",
        "reserva": "",
        "saida_planejado": 1080,
        "saida": 0,
        "diferenca": 0,
        "entrada": 0,
        "tempo_viagem": 0,
        "tempo_planejado1": 45,
        "tempo_parado1": 0,
        "tempo_volta": 0,
        "tempo_planejado2": 70,
        "tempo_parado2": 0,
        "sentido": 0
    },
    {
        "id": "15",
        "itinerario": "Serrano/Eldorado/Mal.Floriano",
        "carro": "402",
        "reserva": "",
        "saida_planejado": 1125,
        "saida": 0,
        "diferenca": 0,
        "entrada": 0,
        "tempo_viagem": 0,
        "tempo_planejado1": 145,
        "tempo_parado1": 0,
        "tempo_volta": 0,
        "tempo_planejado2": 0,
        "tempo_parado2": 0,
        "sentido": 1
    },
    {
        "id": "16",
        "itinerario": "Ref.Marechal/Travessão/Serrano/Eldorado/Iracema",
        "carro": "402",
        "reserva": "",
        "saida_planejado": 1270,
        "saida": 1271,
        "diferenca": 1,
        "entrada": 1319,
        "tempo_viagem": 48,
        "tempo_planejado1": 90,
        "tempo_parado1": 42,
        "tempo_volta": 0,
        "tempo_planejado2": 235,
        "tempo_parado2": 0,
        "sentido": 0
    },
]
var svgWidth = 1440,
    svgHeight = 1000;

var margin = { top: 50, right: 50, bottom: 80, left: 50 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight / 4 - margin.top - margin.bottom;
var points = []

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.sentido === 1) {
        points.push({
            carro: element.carro,
            xpoint: element.saida,
            ypoint: height
        }, {
            carro: element.carro,
            xpoint: element.entrada,
            ypoint: 0
        })
    } else if (element.sentido === 0) {
        points.push({
            carro: element.carro,
            xpoint: element.saida,
            ypoint: 0
        }, {
            carro: element.carro,
            xpoint: element.entrada,
            ypoint: height
        })
    }
}

var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container")

var sumstat = d3.groups(points, d => d.carro);
var mediaName = sumstat.map(d => d[0])

var color = d3.scaleOrdinal().domain(mediaName).range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'])

window.addEventListener('DOMContentLoaded', (event) => {
    drawChart()
});

function drawChart() {
    const groups = 4
    const groupHeight = svgHeight / 4
    const domains = [
        [0, 360],
        [360, 720],
        [720, 1080],
        [1080, 1440],
    ]

    const tickHours = [
        [0, 60, 120, 180, 240, 300, 360],
        [360, 420, 480, 540, 600, 660, 720],
        [720, 780, 840, 900, 960, 1020, 1080],
        [1080, 1140, 1200, 1260, 1320, 1380, 1440],
    ]

    const tick10Min = [
        [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360],
        [360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720],
        [720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990, 1000, 1010, 1020, 1030, 1040, 1050, 1060, 1070, 1080],
        [1080, 1090, 1100, 1120, 1130, 1140, 1150, 1160, 1170, 1180, 1190, 1200, 1210, 1220, 1230, 1240, 1250, 1260, 1270, 1280, 1290, 1300, 1310, 1320, 1330, 1340, 1350, 1360, 1370, 1380, 1390, 1400, 1410, 1420, 1430, 1440],
    ]

    const positions = [0, groupHeight, groupHeight * 2, groupHeight * 3]

    for (let index = 0; index < groups; index++) {
        const g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + positions[index] + ")")
            .attr("class", `chart${index + 1}`)

        const gChart = g.append("g")
            .attr("transform", "translate(" + 0 + "," + margin.top + ")")

        const gTimeLine = g.append("g")
            .attr("transform", "translate(" + 0 + "," + 100 + ")")

        var x1 = d3.scaleLinear()
            .domain(domains[index])
            .rangeRound([0, width]);

        var x2 = d3.scaleLinear()
            .domain(domains[index])
            .rangeRound([0, width]);

        var x3 = d3.scaleLinear()
            .domain(domains[index])
            .rangeRound([0, width]);

        var y1 = d3.scaleLinear()
            .domain(d3.extent(data, (d) => d.sentido))
            .range([height, 0])

        var y2 = d3.scaleLinear()
            .domain(d3.extent(data, (d) => d.sentido))
            .range([height, 0]);

        //axies generator
        var x1Generator = d3.axisBottom(x1).ticks(36).tickSize(0)
        var x2Generator = d3.axisTop(x2).ticks(36).tickSize(0)
        var x3Generator = d3.axisTop(x3).ticks(20).tickSize(10)

        var y1Generator = d3.axisLeft(y1).ticks(1).tickSize(1)
        var y2Generator = d3.axisRight(y2).ticks(1).tickSize(1)

        //y axis tick labels
        let yTickLabels = ["A", "B"]
        y1Generator.tickFormat((d, i) => yTickLabels[i])

        gChart.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("class", "xAxis1")
            .attr('stroke-width', 3)
            .call(x1Generator)

        gChart.append("g")
            .attr("transform", "translate(0,0)")
            .attr("class", "xAxis2")
            .attr('stroke-width', 3)
            .call(x2Generator)

        gChart.append("g")
            .attr("transform", "translate(0 ,0)")
            .attr("class", "yAxis1")
            .attr('stroke-width', 3)
            .call(y1Generator)

        gChart.append("g")
            .attr("transform", "translate(" + width + ",0)")
            .attr("class", "yAxis2")
            .attr('stroke-width', 3)
            .call(y2Generator)

        gTimeLine.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("class", "xAxis3")
            .attr('stroke-width', 3)
            .call(x3Generator)

        gChart.selectAll(".xAxis1 text")
            .attr("display", "none")

        gChart.selectAll(".xAxis1 .tick")
            .attr("stroke-width", "0")

        gChart.selectAll(".xAxis2 text")
            .attr("display", "none")

        gChart.selectAll(".xAxis2 .tick")
            .attr("stroke-width", "0")

        gChart.selectAll(".yAxis1 text")
            .attr("color", "#059451")
            .attr("font-size", 16)
            .attr("font-weight", 700)

        gChart.selectAll(".yAxis2 text")
            .attr("display", "none")

        const gridHours = gChart.selectAll("lines")
            .data(tickHours[index])
            .join("g")

        gridHours.append("line")
            .attr("x1", (d) => {
                return x1(d)
            })
            .attr("x2", d => {
                return x1(d)
            })
            .attr("y1", height)
            .attr("y2", 0)
            .attr("stroke-opacity", 0.7)
            .attr("stroke", "currentColor")
            .attr("stroke-width", 2);

        const grid10Min = gChart.selectAll("lines")
            .data(tick10Min[index])
            .join("g")

        grid10Min.append("line")
            .attr("x1", (d) => {
                return x1(d)
            })
            .attr("x2", d => {
                return x1(d)
            })
            .attr("y1", height)
            .attr("y2", 0)
            .attr("stroke-opacity", 0.2)
            .attr("stroke", "currentColor")
            .attr("stroke-width", 2);

        var line = d3.line()
            .x((d) => d.xpoint)
            .y((d) => d.ypoint)
            .curve(d3.curveCatmullRom.alpha(0.2))
            .defined(((d) => d.xpoint != 0))

        const lines = gChart.selectAll("lines")
            .data(sumstat)
            .enter()
            .append("g");

        lines.append("path")
            .attr('fill', 'none')
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr('stroke', d => color(d[0]))
            .attr('marker-start', 'url(#arrow)')
            .attr('marker-mid', 'url(#arrow)')
            .attr('marker-end', 'url(#arrow)')
            .attr('stroke-width', 3)
            .attr("d", (d) => {
                return line(d[1])
            })
    }

}