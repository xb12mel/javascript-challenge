// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

// adding columns for date/time, city, state, country, shape and comments at the very least
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes","comments"]

// write the table to the page
var reportedInfo = (dataInput) =>{
    dataInput.forEach(report =>{
        var row=tbody.append("tr");
        columns.forEach(column=> row.append("td").text(report[column])
        )
    });
}
reportedInfo(tableData)


// create a variable to handle the event of filtering the data
var enterDate = d3.select("#filter-btn");

//event handler
enterDate.on("click", () => {
	d3.event.preventDefault();
	tbody.html("");
		// define how we capture the date selected
	var inputDate = d3.select("#datetime").node().value;
	// get the date entered into the form and display it to the console
	var date = inputDate.property("value");
	console.log(date);
	//create a new variable to hold the resulting array of the selected filtered data and print to console
	var filteredDate = tableData.filter(tableData => tableData.datetime === date);
	 console.log(filteredDate);

	enterDate.attr((filteredDate) => {
			filteredDate.forEach((report) => {
					var tbody = d3.select('tbody')
					var row = tbody.append('tr');
					columns.forEach(column => row.append('td').text(report[column])
					);
			});
	});
})
