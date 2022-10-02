let container = document.querySelector(".container");

for (let i = 0; i <= 7; i++) {
  let myDiv = document.createElement("div");
  if (i === 0) {
    myDiv.innerHTML = `<div class="card">
    <a class="card card0 lightbox_trigger" href="https://images.pexels.com/photos/8963721/pexels-photo-8963721.jpeg?auto=compress&cs=tinysrgb&w=1600">
    <div class="border1">
    <h2>Carmichael</h2>
    <div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 1) {
    myDiv.innerHTML = `<div class="card card1">
    <a class="card card1 lightbox_trigger" href="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?cs=srgb&dl=pexels-charles-1851164.jpg&fm=jpg">
    <div class="border1">
    <h2>Chancho</h2>
    <div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 2) {
    myDiv.innerHTML = `<div class="card card2">
    <a class="card card2 lightbox_trigger" href="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=1600">
    <div class="border1">
    <h2>Steve</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 3) {
    myDiv.innerHTML = `<div class="card card3">
    <a class="card card3 lightbox_trigger" href="https://images.pexels.com/photos/4668425/pexels-photo-4668425.jpeg?auto=compress&cs=tinysrgb&w=1600">
    <div class="border1">
    <h2>Shanice</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 4) {
    myDiv.innerHTML = `<div class="card card4">
    <a class="card card4 lightbox_trigger" href="https://images.pexels.com/photos/11570517/pexels-photo-11570517.jpeg?auto=compress&cs=tinysrgb&w=1600">
    <div class="border1">
    <h2>Charles</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 5) {
    myDiv.innerHTML = `<div class="card card5">
    <a class="card card5 lightbox_trigger" href="https://images.pexels.com/photos/3361722/pexels-photo-3361722.jpeg?auto=compress&cs=tinysrgb&w=1600">
    <div class="border1">
    <h2>Edwin</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 6) {
    myDiv.innerHTML = `<div class="card card6">
    <a class="card card6 lightbox_trigger" href="https://images.pexels.com/photos/10639872/pexels-photo-10639872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <div class="border1">
    <h2>Darren</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 7) {
    myDiv.innerHTML = `<div class="card card7">
    <a class="card card7 lightbox_trigger" href="https://images.pexels.com/photos/3299894/pexels-photo-3299894.jpeg?auto=compress&cs=tinysrgb&w=1600">
      <div class="border1">
      <h2>Debby</h2>
      <div class="icons"onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      </div>
      </a>
      </div>`;
  }
  container.appendChild(myDiv);
}

//------------Large Lightbox Popup With Form-----------------------------------------------------------------------------------------------------------------------------------------

$(function ($) {
  $(".lightbox_trigger").click(function (noLink) {
    // this will prevent the hyperlink clicking to a new tab, we just want it to start the lightbox modal popup instead
    noLink.preventDefault();
    var image_href = $(this).attr("href"); // Grabs the data from the href link


     // This will create a lightbox with form if it doesnt already exist in the html markup and if it does itll show or hide it depending on its current state
    if ($("#lightbox").length > 0) {
      $("#content").html('<img src="' + image_href + '" />');
      $("#lightbox").show("fast");
      $("#overlay").show("fast");
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
      var adoptionForm = `<div id="overlay">
      <div id="overlayContainer"> 
      <form id="overlayForm"> 
      <button class="closeBtn">X</button>
      <h1 id="infoBoxH1">Adopt Me!</h1>
      <p id="textInfo">Lorem ipsum dolor sit amet consetetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quis ab, autem pariatur quiaLorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab, autem pariatur quia</p>
          <label for="textboxy"> Full Name </label><br>
          <input type="text" id="textboxy" name="textboxy" placeholder="Bark..Bark.."><br>
          <label for="textboxy2"> Email </label><br>
          <input type="text" id="textboxy" name="textboxy2" placeholder="Woof..Woof..">
          <br>
          <br>
          <input type="submit" value="Submit">
      </form>
      </div>`;
      $("body").append(lightbox);
      $("body").append(adoptionForm);
    }
  });

  //This will allow you to click anywehre on the page to hide the lightbox and form
  $("body").on("click", "#lightbox", function () {
    $("#lightbox").hide("fast");
    $("#overlay").hide("fast");
  });

  $(".closeBtn").click(function () {
    $("#overlay").hide();
  });
});
