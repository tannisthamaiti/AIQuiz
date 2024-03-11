// Submit form with id function
function myfunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    if (validation()) // Calling validation function
    {
    document.getElementById("form_id").action = "success.php"; // Setting form action to "success.php" page
    document.getElementById("form_id").submit(); // Submitting form
    }
    }