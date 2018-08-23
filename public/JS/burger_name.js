

$(function () {
  $(".change-eaten").on("click", function (event) {

    event.preventDefault();
    console.log('Burger Eaten');
    var id = $(this).data("id");
   console.log(this);
    var newState = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        location.reload();
        
      }
    );
  });
});


$ (function () {
  $(".button").on("click", function (event) {
    console.log('CLICKED!!!!!!');
    event.preventDefault();

    var newBurger = {
      name: $("#new-burger").val().trim(),
      devoured: false
    };
console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
  
        location.reload();
      
      }
    );
  });
});

