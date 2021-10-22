$(document).ready(function() {
  $('form#Language').submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#javascript').hide();
    $('#python').hide();

    const firstName = $("#name").val();
    console.log(firstName);
    const yourAge = parseInt($("input#age").val());
    console.log(yourAge);
    const yourDOB = $("#born").val();
    console.log(yourDOB);
    const favColor = $("#color").val();
    console.log(favColor);
    const favPodcast = $("#favpodcast").val();
    console.log(favPodcast);
    const favCereal = $("input:radio[name=cereal]:checked").val();
    console.log(favCereal);

    if (favCereal === "Bacon" || (favPodcast === "Freakonomics")) {
      $("#insertname").text(firstName);
      $("#csharp").fadeIn();
    } else if (favCereal === "Cheerios" && (yourAge <= 25)) {
      $("#insertname").text(firstName);
      $("#javascript").fadeIn();
    } else {
      $("#insertname").text(firstName);
      $("#python").fadeIn();
    }
  });
});