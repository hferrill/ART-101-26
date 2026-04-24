
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum", "LightPink", "MediumVioletRed", "PaleVioletRed"];
let colorCount;
let pencil={
    color: "Yellow",
    isSharp: true,
}
$("#needy-button").click(function () {
    count = count + 1;
    colorCount = count - 1;

    $("#needy-button").html("yes papa " + count + " times. AND, YOUR FAV COLOR NOW: " + colors[count]);

    $("#needy-button").css("background-color", colors[count]);

    $("body").css("background-color", colors[colorCount+0]);

    $("html").css("background-color", colors[colorCount+0]);


});



