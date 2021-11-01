$(document).ready(function() {
  $("form#Language").submit(function(event) {
    event.preventDefault();
    $("#csharp").hide();
    $("#javascript").hide();
    $("#python").hide();

    const firstName = $("#name").val();
    const yourAge = parseInt($("input#age").val());
    const yourDOB = $("#born").val();
    const favColor = $("#color").val();
    const yourAlma = $("#almamater").val();
    const favPodcast = $("#favpodcast").val();
    const favCereal = $("input:radio[name=cereal]:checked").val();

    if ($("#name").val() == "") {
      $("#csharp").hide();
      $("#javascript").hide();
      $("#python").hide();
      alert("Please Enter Your Name");
    }
    
    if (favCereal === "Bacon" || (favPodcast === "Freakonomics")) {
      $("#insertname1").text(firstName);
      $("#csharp").fadeIn();
    } else if (favCereal === "Cheerios" && (yourAge <= 25)) {
      $("#insertname2").text(firstName);
      $("#javascript").fadeIn();
    } else if (favCereal === "Golden Grahams" && (yourAlma === "Jedi Academy")) {
      $("#insertname2").text(firstName);
      $("#javascript").fadeIn();
    } else {
      $("#insertname3").text(firstName);
      $("#python").fadeIn();
    }
  });
});
