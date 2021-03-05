function handleSubmit() {
	d3.event.preventDefault();
	// create a variable to handle the event of filtering the data
	var enterDate = d3.select("#filter-btn");

	//event handler
	enterDate.on("click", function () {
		tbody.html("");
		// define how we capture the date selected
		var inputDate = d3.select("#datetime");
		// get the date entered into the form and display it to the console
		var date = inputDate.property("value");
		console.log(date);
		//create a new variable to hold the resulting array of the selected filter and print to console
		var filteredDate = tableData.filter(ufoSightings => ufoSightings.datetime === inputDate);
		console.log(inputDate);

		filteredDate.forEach(function (handleSubmit) {
			console.log(handleSumit);

			var row = tbody.append("tr");
			Object.defineProperties(handleSubmit)
				.forEach(function ([date, value]) {
					var cell = row.append("td");
					cell.text(value);
				});
		});

	});
}
