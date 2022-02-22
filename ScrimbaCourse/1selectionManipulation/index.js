//javascript

d3.select("h1")
    .style("color", "red")
    .attr("class", "heading")
    .text("Updated h1 tag");

d3.select("body").append("p").text("Firt Paragraph");
d3.select("body").append("p").text("Second Paragraph");
d3.select("body").append("p").text("Third Paragraph");

d3.selectAll("p").style("color", "blue");