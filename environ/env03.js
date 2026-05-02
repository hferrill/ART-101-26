

let environmentTitle = "that damn creek";

let environmentElements = ["sticky mud", "slimy rocks", "stagnant water", "gnarly tree roots"];

let mainEntity = {
    name: "Lake Lady",
    type: "Nymph",
    mood: "mysterious",
    favoriteElement: environmentElements[1]
};

let count = 0; 


$("#leafButton").click(  function(){

    count = count +1;
    $("#leafButton").html("yes papa " + count + " times");

});



 let arrayPosition = count - 1;

    let currentMood = mainEntity.mood;

    let message = message + "<p>this is" + currentMood + ".</p>";
    message = message + "<p>My name is " + mainEntity.name + ".</p>";
message = message + "<p>I am an " + mainEntity.type + ".</p>";
message = message + "<p>here, have a " + mainEntity.favoriteElement + ".</p>";


 $("#environment-output").html(message);