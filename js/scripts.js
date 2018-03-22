$(document).ready(function(){
  $("#animal-form").submit(function(event){
    event.preventDefault();

    var animal = $("#animal").val();
      // console.log(animal);
    if (animal === "elephant") {
      $(".elephant").toggle();
    } else if (animal === "lion") {
      $(".lion").show();
    } else {
      $(".cheetah").show();
    }
  });
});
