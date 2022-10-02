$(function ($) {
  $(".lightbox_trigger").click(function (e) {
    // this will prevent the hyperlink click
    e.preventDefault();

    var image_href = $(this).attr("href"); // Grabs the data from the href link

    if ($("#lightbox").length > 0) {
      // This will create a lightbox if it doesnt already exist in the html markup

      $("#content").html('<img src="' + image_href + '" />');

      $("#lightbox").show('fast');
    } else {
      var lightbox =
        '<div id="lightbox">' +
        "<p>Click to close</p>" +
        '<div id="content">' + //insert clicked link's href into img src
        '<img src="' +
        image_href +
        '" />' +
        "</div>" +
        "</div>";
      $("body").append(lightbox);
    }
  });

  //This will allow you to click anywehre on the page to hide the lightbox 
  $("body").on("click", "#lightbox", function () {
    $("#lightbox").hide();
  });
});
