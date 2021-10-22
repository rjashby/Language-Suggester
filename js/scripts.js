$(document).ready(function() {
  $('form#Language').submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#javascript').hide();
    $('#python').hide();

    const yourAge = parseInt($("input#age").val());
    const yourDOB = $("#born").val();
    const favColor = $("#color").val();
    const favPodcast = $("#favpodcast").val();
    const favCereal = $("input:radio[name=cereal]:checked").val();

    if (favCereal === "Bacon" || (favPodcast === "Freakonomics")) {
      $('#csharp').show();
    } else if (favCereal === "Cheerios" && (yourAge <= 25)) {
      $('#javascript').show();
    } else {
      $('#python').show();
    }
  });
});