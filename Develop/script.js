var date = moment().format("MMMM DD YYYY");
var dateEl = document.querySelector("#currentDay");
var textAreaEl = document.querySelector(".textArea");
var curTime = moment().format("H")
var timeOfDayEl = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
updateTOD();

console.log(date)
console.log(curTime);

function updateTOD() {
    for (var i = 0; i < timeOfDayEl.length; i++) {
        if (parseInt(timeOfDayEl[i]) < curTime) {
            $("#" + timeOfDayEl[i]).attr("class", "past");
        } else if (parseInt(timeOfDayEl[i]) > curTime) {
            $("#" + timeOfDayEl[i]).attr("class", "future");
        } else if (parseInt(timeOfDayEl[i]) == curTime) {
            $("#" + timeOfDayEl[i]).attr("class", "present")
        }
    }
};

$(".saveBtn").on("click", function() {
    var TOD = $(this)
    .parent()
    .attr("id");
    var content = $("input")
    .val()
    .trim();
    localStorage.setItem(TOD, content);
    console.log(TOD, content);
});

$("#9").children("input").val(localStorage.getItem("9"));
$("#10").children("input").val(localStorage.getItem("10"));
$("#11").children("input").val(localStorage.getItem("11"));
$("#12").children("input").val(localStorage.getItem("12"));
$("#13").children("input").val(localStorage.getItem("13"));
$("#14").children("input").val(localStorage.getItem("14"));
$("#15").children("input").val(localStorage.getItem("15"));
$("#16").children("input").val(localStorage.getItem("16"));
$("#17").children("input").val(localStorage.getItem("17"));

dateEl.append(date);