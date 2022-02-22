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
var svgWidth = 1800,
    svgHeight = 500;

var margin = { top: 60, right: 50, bottom: 60, left: 50 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
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

//components group position
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x1 = d3.scaleTime()
    .domain(d3.extent(points, (d) => d.xpoint))
    .nice()
    .range([15, width]);

var x2 = d3.scaleTime()
    .domain(d3.extent(points, (d) => d.xpoint))
    .nice()
    .range([15, width]);

var y = d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.sentido))
    .range([height, 0]);

//axies generator
var x1Generator = d3.axisBottom(x1)

var x2Generator = d3.axisTop(x2)

var yGenerator = d3.axisLeft(y)

let xTickLabels = e => `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, '0')}`;
x1Generator.tickSize(20)
x1Generator.tickFormat((d) => xTickLabels(d))

x2Generator.tickSize(20)
x2Generator.tickFormat((d) => xTickLabels(d))

//y axis tick labels
let yTickLabels = ["A", "B"]
yGenerator.ticks(1)
yGenerator.tickFormat((d, i) => yTickLabels[i])

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(x1Generator)

g.append("g")
    .attr("transform", "translate(0,0)")
    .call(x2Generator)

g.append("g")
    .call(yGenerator)

g.selectAll(".tick text")
    .attr("color", "#059451")
    .attr("font-size", 20)

g.selectAll(".tick")
    .attr("stroke-width", 0)



var line = d3.line()
    .x((d) => d.xpoint)
    .y((d) => d.ypoint)
    .curve(d3.curveCatmullRom.alpha(0.30))
    .defined(((d) => d.xpoint != 0))

const lines = g.selectAll("lines")
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

var marker = lines.append('defs')
    .append('marker').attr('id', 'arrow')
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 1)
    .attr('refY', 5)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

marker.append('path')
    .attr("d", (d) => {
        return line(d[1])
    })