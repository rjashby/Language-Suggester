$(document).ready(function() {
  $('form#language').submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#javascript').hide();
    $('#pyhton').hide();

    const yourAge = $("#yourAge").val();
    const yourDOB = $("#born").val();
    const favColor = $("#color").val();
    const favPodcast = $("#favFood").val();
    const favCereal = $("input:radio[name=cereal]:checked").val();