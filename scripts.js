const divContainer = document.getElementById('container');

$(divContainer).hover(function(){
    $(divContainer).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });

  