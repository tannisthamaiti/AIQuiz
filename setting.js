// Submit form with id function
function myfunction() {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var contact = document.getElementById("w3review").value;
    console.log(name);
    const rows = [
        ["name1", "city1", "some other info"],
        ["name2", "city2", "more info"]
    ];
    
    let csvContent = "data:text/csv;charset=utf-8,";
    
    rows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    }