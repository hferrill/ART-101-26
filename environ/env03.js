$(document).ready(function(){
  $("button").click(function(){
    $("p").replaceWith(function(n){
      return "<h3> FOOLED, this is a LAKE " + n + ".</h3>";
    });
  });
});

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $("img").click(function(){
    $(this).hide();
  });
});