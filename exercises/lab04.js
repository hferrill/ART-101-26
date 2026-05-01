let count = 0;

let buttonCreature = {
    name: "dungeon dweller",
    species: "strange slime",
    favoriteFood: "moss",
    moods: ["idle", "curious", "hunting", "searching", "resting", "hungry"]
}; 

$("#needy-button").click(function () {

    count = count + 1;

// variables to determine mood and color

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>right now i am " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
message = message + "<p>I am an " + buttonCreature.species + ".</p>";
message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

// output the message to the page

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});