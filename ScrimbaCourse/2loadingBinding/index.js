//javascript

var dataset = [1, 2, 3, 4, 5]

d3.select("body")
    .selectAll("p")
    .data(dataset)
    .enter() //take data item one by one and perform operations
    .append("p") // appends paragraph for each data element
    .text((d) => (d))