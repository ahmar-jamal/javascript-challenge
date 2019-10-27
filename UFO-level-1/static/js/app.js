// from data.js
var tableData = data;

// YOUR CODE HERE!

let tbody = d3.select("tbody")
tableData.forEach(info=>{
    
    const trow = tbody.append("tr");
    cols= ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
    cols.forEach(key=>{
        trow.append("td").text(info[key]);
    })
})


const btn = d3.select("#filter-btn");

btn.on("click", function(){
    tbody.selectAll('tr').remove()
    const inputDate = d3.select("#datetime").property("value");
    const selectData = tableData.filter(info=>info.datetime === inputDate);
    selectData.forEach(info=>{
        const trow = tbody.append("tr");
        columns= ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
        columns.forEach(key=>{
            trow.append("td").text(info[key]);
        })
    })

})
