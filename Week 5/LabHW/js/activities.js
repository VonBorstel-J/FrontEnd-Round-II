//--------jQuery Table Scripts-----------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
  $("td").css("cursor", "pointer");
  $("td").click(function () {
    var content = $(this).text();
    if (content != "Not Available") {
      $(this).toggleClass("clicked");

    //   var cliff = $("th").text();
      var head1 = $("th").eq(1).text();
      var head2 = $("th").eq(2).text();
      var head3 = $("th").eq(3).text();
      var head4 = $("th").eq(4).text();


        if ($(this).hasClass("clicked")) {
          $("#displaySelected").css("visibility", "visible");
          $("#displaySelected").css("margin-top", "2em");
          $("#result").append("<p>" + content +':   '+"</p>");
        } else {
          $("#result p:contains(" + content + ")").remove();

          if ($("#result").has("p").length == false) {
            $("#displaySelected").css("visibility", "hidden");
            $("#displaySelected").css("margin-top", "0");
          }

        }
      }
    });
  });
