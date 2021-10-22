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
      $("#name").show(firstName);
      $('#csharp').fadeIn();
    } else if (favCereal === "Cheerios" && (yourAge <= 25)) {
      $("#name").show(firstName);
      $('#javascript').fadeIn();
    } else {
      $("#name").show(firstName);
      $('#python').fadeIn();
    }
  });
});