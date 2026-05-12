$("#crAdd").click(function () {


    // let values
    let crName = $("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();

    // lets construct html for eyes
     let crEyesHtml="";
    for (let i = 0; i < crEyesNum; i++) {
        crEyesHtml=crEyesHtml+ "<div class='eye'>.</div>";
    }


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
    }
    else {


        // "<div>"+crName+crColor+crEyesNum+"</div>"
        // add this name too a div a bit of html code attached
    }


    $("#crName").val("");

    //do value after append to clear the input field
    // $("#crName").val(); // retrieve the value



});