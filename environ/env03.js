

let environmentTitle = "that damn creek";

let environmentElements = ["sticky mud", "slimy rocks", "stagnant water", "gnarly tree roots"];



let count = 0; 


$("#crAdd").click(  function(){

    count = count +1;
    $("#crAdd").html("yes papa " + count + " times");

 let crName = $("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();

    // lets construct html for eyes
     let crEyesHtml="";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHtml=crEyesHtml+ "<div class='eye'>.</div>";
    }
  $( "crAdd" ).click(function() {
    $( "crAdd" ).css('background', 'green');
  });

    // test in console
    console.log(crName, crColor, crEyesNum);


    //if vlaues
    if (crName.length > 3) {

       $("#creature-list").append(`
            <div class="creature">
                <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHtml} ${crMood} </div>
                <div class="creature-info">${crName}</div>
            </div>sad
        `);


 $("#environment-output").html(message);

  console.log(count);
  
});