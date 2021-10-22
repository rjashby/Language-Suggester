$(document).ready(function() {
  $('form#language').submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#javascript').hide();
    $('#pyhton').hide();

    const yourAge = $("#age").val();
    const yourDOB = $("#born").val();
    const favColor = $("#color").val();
    const favPodcast = $("#favpodcast").val();
    const favCereal = $("input:radio[name=cereal]:checked").val();

    if (age < 12) {
      $('#csharp').show();
    } else if (age >= 12 && age <= 20) {
      $('#javascript').show();
    } else {
      $('#python').show();
    }
  });
});