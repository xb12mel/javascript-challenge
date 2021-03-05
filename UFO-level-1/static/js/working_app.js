// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

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

function handleSubmit() {
	d3.event.preventDefault();

	var enterDate = tableData.filter(tableData => tableData.datetime === "filter-btn"); 
	console.log(tableData);

	d3.select("#datetime").value;
	
	if(enterDate.length !== 0){
		// addInfo(tableData);
		tbody.append('tr').append('td')
	}
	else{
		tbody.html("");
		tbody.append('tr').append('td')
		
	}	
}
d3.select("#filter-btn").on("click", handleSubmit);