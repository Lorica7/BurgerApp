

$(function () {
  $(".change-eaten").on("click", function (event) {

    event.preventDefault();
    console.log('CLICKED!!!!!!');
    var id = $(this).data("id");
   var eaten = $(this).data("eaten");
    var newState = {
      devoured: eaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("changed to", newState);
        burgers.updateOne();
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
        // burgers.insertOne();
        location.reload();
      
      }
    );
  });
});

