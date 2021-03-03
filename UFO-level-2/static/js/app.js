// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');
var filter_button = d3.select('#filter-btn').node().value = "";
var inputFieldDate = d3.select('#datetime');
var inputFieldDate = d3.select('#city');

// adding columns for date/time, city, state, country, shape and comments at the very least
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes","comments"]

// listen for events and search through date/time column to find rows that match user input
var addInfo = (dataInput) =>{
    dataInput.forEach(ufoSightings =>{
        var row=tbody.append("tr");
        columns.forEach(column=> row.append("td").text(ufoSightings[column])
        )
    });
}

addInfo(tableData);
