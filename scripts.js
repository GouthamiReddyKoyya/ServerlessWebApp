// Add your API endpoint here
var API_ENDPOINT = "https://ohf1pkr0j8.execute-api.eu-north-1.amazonaws.com/PROD";

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function(){
    var inputData = {
        "studentId": $('#studentId').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function () {
            alert("Error saving student data.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#studentTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#studentTable").append("<tr> \
                    <td>" + data['studentId'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['class'] + "</td> \
                    <td>" + data['age'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving student data.");
        }
    });
}