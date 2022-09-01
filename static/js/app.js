// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  console.log("data size: " + data.length)

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);
    
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    //clear data
    tbody.html("");

    // 8. Set the filtered data to the tableData.
    //let filteredData = [...tableData];
    let filteredData = [];

    // Set variables that hold the filters
    let filterKey = Object.keys(filters);
    let filterVal = Object.values(filters);

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // loop the data
    for (let i = 0; i < tableData.length; i++) {
      // dataRow is the current row
      dataRow = tableData[i];
      // Var to control filter
      var filterOut = true;
      
      // Loop through all of the filters and set a flag if the data won't 
      // be added to filteredData
      for (let j=0; j < filterKey.length; j++) {
        // If filter dont matches with row values - all upper case letters
        if (filterVal[j].toUpperCase() !== dataRow[filterKey[j]].toUpperCase()){
          filterOut = false;
          break;
        }
      }
      // Add the data to filteredData
      if (filterOut) {
        filteredData.push(dataRow);
      }
    };

    // rebuild the table using table data if the filters were clean
    if ( filterKey.length === 0 ) {
      buildTable(tableData);
    // 10. Finally, rebuild the table using the filtered data
    } else {
      buildTable(filteredData);
    }
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
