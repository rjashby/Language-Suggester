$(document).ready(function() {
  $('form#Language').submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#javascript').hide();
    $('#python').hide();

    const age = parseInt($("input#age").val());
    const yourDOB = $("#born").val();
    const favColor = $("#color").val();
    const favPodcast = $("#favpodcast").val();
    const favCereal = $("input:radio[name=cereal]:checked").val();

    if (favCereal === "Bacon") {
      $('#csharp').show();
    } else if (favCereal === "Cheerios") {
      $('#javascript').show();
    } else {
      $('#python').show();
    }
  });
});