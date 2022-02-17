const data = [{
        "id": "1",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "09:05",
        "saida": "09:09",
        "diferenca": "-6163:5:23:56",
        "entrada": "9:44",
        "tempo_viagem1": "35m",
        "tempo_planejado1": "40m",
        "tempo_parado1": "2m",
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 1
    },
    {
        "id": "2",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "09:45",
        "saida": "09:46",
        "diferenca": "-6163:5:23:59",
        "entrada": "10:19",
        "tempo_viagem": "33m",
        "tempo_planejado1": "35m",
        "tempo_parado1": "2m",
        "tempo_volta": "68m",
        "tempo_planejado2": "75m",
        "tempo_parado2": "7m",
        "sentido": 2
    },
    {
        "id": "3",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "10:20",
        "saida": "10:21",
        "diferenca": "-6163:5:23:59",
        "entrada": "10:57",
        "tempo_viagem": "36m",
        "tempo_planejado1": "40m",
        "tempo_parado1": "3m",
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 1
    },
    {
        "id": "4",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "11:00",
        "saida": "11:00",
        "diferenca": "-6163:6",
        "entrada": "11:32",
        "tempo_viagem": "32m",
        "tempo_planejado1": "35m",
        "tempo_parado1": "2m",
        "tempo_volta": "68m",
        "tempo_planejado2": "75m",
        "tempo_parado2": "7m",
        "sentido": 2
    },
    {
        "id": "5",
        "itinerario": "Ref.Mal.Floriano/Trav.Leopoldina/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "11:35",
        "saida": "11:34",
        "diferenca": "-6163:6:0:01",
        "entrada": "12:04",
        "tempo_viagem": "30m",
        "tempo_planejado1": "45m",
        "tempo_parado1": "16m",
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 1
    },
    {
        "id": "6",
        "itinerario": "Serrano/Eldorado/Mal.Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "12:20",
        "saida": "12:20",
        "diferenca": "-6163:6",
        "entrada": "12:54",
        "tempo_viagem": "34m",
        "tempo_planejado1": "35m",
        "tempo_parado1": "1m",
        "tempo_volta": "64m",
        "tempo_planejado2": "80m",
        "tempo_parado2": "16m",
        "sentido": 2
    },
    {
        "id": "7",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "12:55",
        "saida": "12:55",
        "diferenca": "-6163:6",
        "entrada": "13:25",
        "tempo_viagem": "30m",
        "tempo_planejado1": "40m",
        "tempo_parado1": "11m",
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 1
    },
    {
        "id": "8",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "13:35",
        "saida": "13:36",
        "diferenca": "-6163:5:23:59",
        "entrada": "14:11",
        "tempo_viagem": "35m",
        "tempo_planejado1": "35m",
        "tempo_parado1": "2m",
        "tempo_volta": "65m",
        "tempo_planejado2": "75m",
        "tempo_parado2": "10m",
        "sentido": 2
    },
    {
        "id": "9",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "14:10",
        "saida": "14:13",
        "diferenca": "-6163:5:23:57",
        "entrada": "14:47",
        "tempo_viagem": "34m",
        "tempo_planejado1": "40m",
        "tempo_parado1": "4m",
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 1
    },
    {
        "id": "10",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "14:50",
        "saida": "14:51",
        "diferenca": "-6163:5:23:59",
        "entrada": "15:29",
        "tempo_viagem": "38m",
        "tempo_planejado1": "35m",
        "tempo_parado1": "2m",
        "tempo_volta": "72m",
        "tempo_planejado2": "75m",
        "tempo_parado2": "3m",
        "sentido": 2
    },
    {
        "id": "11",
        "itinerario": "Ref.Mal.Floriano/Eldorado/Serrano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "15:25",
        "saida": "15:31",
        "diferenca": "-6163:5:23:54",
        "entrada": "16:09",
        "tempo_viagem": "38m",
        "tempo_planejado1": "45m",
        "tempo_parado1": "3m",
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 1
    },
    {
        "id": "12",
        "itinerario": "Serrano/Andreazza/Marechal Floriano",
        "carro": "402",
        "reserva": "605",
        "saida_planejado": "16:10",
        "saida": "16:12",
        "diferenca": "-6163:5:23:58",
        "entrada": "16:48",
        "tempo_viagem": "36m",
        "tempo_planejado1": "1h 25m",
        "tempo_parado1": null,
        "tempo_volta": "74m",
        "tempo_planejado2": "2h 10m",
        "tempo_parado2": "0h 56m",
        "sentido": 2
    },
    {
        "id": "13",
        "itinerario": "Viagem de deslocamento",
        "carro": "402",
        "reserva": "",
        "saida_planejado": "17:35",
        "saida": null,
        "diferenca": null,
        "entrada": null,
        "tempo_viagem": null,
        "tempo_planejado1": "25m",
        "tempo_parado1": null,
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 2
    },
    {
        "id": "14",
        "itinerario": "Ref.Mal.Floriano/Trav.Leopoldina/Serrano",
        "carro": "402",
        "reserva": "",
        "saida_planejado": "18:00",
        "saida": null,
        "diferenca": null,
        "entrada": null,
        "tempo_viagem": null,
        "tempo_planejado1": "45m",
        "tempo_parado1": null,
        "tempo_volta": null,
        "tempo_planejado2": "70m",
        "tempo_parado2": null,
        "sentido": 1
    },
    {
        "id": "15",
        "itinerario": "Serrano/Eldorado/Mal.Floriano",
        "carro": "402",
        "reserva": "",
        "saida_planejado": "18:45",
        "saida": null,
        "diferenca": null,
        "entrada": null,
        "tempo_viagem": null,
        "tempo_planejado1": "2h 25m",
        "tempo_parado1": null,
        "tempo_volta": null,
        "tempo_planejado2": null,
        "tempo_parado2": null,
        "sentido": 2
    },
    {
        "id": "16",
        "itinerario": "Ref.Marechal/Travessão/Serrano/Eldorado/Iracema",
        "carro": "402",
        "reserva": "",
        "saida_planejado": "21:10",
        "saida": "21:11",
        "diferenca": "-6163:5:23:59",
        "entrada": "21:59",
        "tempo_viagem": "48m",
        "tempo_planejado1": "1h 30m",
        "tempo_parado1": "42m",
        "tempo_volta": null,
        "tempo_planejado2": "3h 55m",
        "tempo_parado2": null,
        "sentido": 1
    },
]

var svgWidth = 1100,
    svgHeight = 400;
var margin = { top: 40, right: 30, bottom: 40, left: 50 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");

//components group position
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x1 = d3.scaleTime()
    .domain(d3.extent(data, (d) => new Date("2001-01-01T" + d.saida + "Z")))
    .range([15, width]);

var x2 = d3.scaleTime()
    .domain(d3.extent(data, (d) => new Date("2001-01-01T" + d.saida + "Z")))
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

//y axis tick labels
let yTickLabels = ["AB", "BA"]
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
    .attr("font-size", 13);

var line = d3.line()
    .x(function(d) { return x1(new Date("2001-01-01T" + d.saida + "Z")) })
    .y(function(d) { return y(d.sentido) })
    .curve(d3.curveCardinal);

g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#059451")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 2)
    .attr("d", line);