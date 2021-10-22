$(document).ready(function() {
  $('form#Language').submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#javascript').hide();
    $('#python').hide();

    const firstName = $("#name").val();
    const yourAge = parseInt($("input#age").val());
    const yourDOB = $("#born").val();
    const favColor = $("#color").val();
    const favPodcast = $("#favpodcast").val();
    const favCereal = $("input:radio[name=cereal]:checked").val();

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