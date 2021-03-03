// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = d3.select('tbody');
var button = d3.select('#filter-btn');
var inputFieldDate = d3.select('#datetime');
var inputFieldDate = d3.select('#city');

// adding columns for date/time, city, state, country, shape and comments at the very least
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes","comments"]

// listen for events and search through date/time column to find rows that match user input
var addInfo = (dataInput) =>{
    dataInput.forEach(ufoSightings =>{
        var row=$tbody.append("tr");
        columns.forEach(column=> row.append("td").text(ufoSightings[column])
        )
    });
}

addInfo(tableData);

// listen for events and search through date/time column to find rows that match input
const newLocal = button.on('click', () => {
    d3.event.preventDefault();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputData);
    $tbody.html("");
    let response = {
        filterDate
    };

    if (response.filterDate.lent !== 0) {
        addInfo(filterDate);
    }
    else {
        $tbody.append('tr').append('td').text("Results");
    }
});

