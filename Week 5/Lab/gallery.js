let container = document.querySelector(".container");

for (let i = 0; i <= 7; i++) {
  let myDiv = document.createElement("div");
  if (i === 0) {
    myDiv.innerHTML =`<div class="card">
    <a class="card card0" href="https://images.pexels.com/photos/8963721/pexels-photo-8963721.jpeg?auto=compress&cs=tinysrgb&w=1600" class="open-lightbox" data-lightbox="image-1">
    <div class="border1">
    
    <div id="overlay">
   
    <button class="closeBtn" onClick="off()" >X</button>
    <div id="overlayContainer"> 
    <h1 id="infoBoxH1">Adopt Me!</h1>
    <p id="textInfo">Lorem ipsum dolor sit amet consetetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quis ab, autem pariatur quiaLorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab, autem pariatur quia</p>

    <form id="overlayForm"> 
        <label for="textboxy"> Full Name </label><br>
        <input type="text" id="textboxy" name="textboxy" value="Bark..Bark.."><br>
        <label for="textboxy2"> Email </label><br>
        <input type="text" id="textboxy" name="textboxy2" value="Woof..Woof..">
        <br>
        <br>
        <input type="submit" value="Submit">
    </form>
    </div>
    </div>

    <h2>Carmichael</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
    </div>
    </a>
    </div>`;
  } else if (i === 1) {
    myDiv.innerHTML =`<div class="card card1">
    <div class="border1">

    <h2>Chancho</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>
    </div>
    </div>`;


  } else if (i === 2) {
    myDiv.innerHTML =`<div class="card card2">
    <div class="border1">

    <h2>Steve</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
    </div>
    </div>`;
  } else if (i === 3) {
    myDiv.innerHTML =`<div class="card card3">
    <div class="border1">

    <h2>Shanice</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
    </div>
    </div>`;
  } else if (i === 4) {
    myDiv.innerHTML =`<div class="card card4">
    <div class="border1">

    <h2>Charles</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
    </div>
    </div>`;
  } else if (i === 5) {
    myDiv.innerHTML =`<div class="card card5">
    <div class="border1">


    <h2>Edwin</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


    </div>
    </div>
    </div>`;
  } else if (i === 6) {
    myDiv.innerHTML =`<div class="card card6">
    <div class="border1">

    <h2>Darren</h2>
    <div class="icons" onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    
    </div>
    </div>
    </div>`;
  } else if (i === 7) {
    myDiv.innerHTML = `<div class="card card7">
      <div class="border1">

      <h2>Debby</h2>
      <div class="icons"onClick="on()"><i class="fa fa-instagram" aria-hidden="true"></i>
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <p class="fa" onClick="on()">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      
      </div>
      </div>
      </div>`;
  }
  container.appendChild(myDiv);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// function dismiss(el){
//   el.parentNode.style.display='none';
// };

const openinfoButtons = document.querySelector(".fa");
// const closeinfoButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openinfoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const info = document.querySelector(".card");
    openinfo(info);
  });
});

overlay.addEventListener("click", () => {
  const info = document.querySelectorAll(".info.active");
  infos.forEach((info) => {
    closeinfo(info);
  });
});

// closeinfoButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const info = button.closest(".info");
//     closeinfo(info);
//   });
// });

function openinfo(info) {
  if (info == null) return;
  info.classList.add("active");
  overlay.classList.add("active");
}

function closeinfo(info) {
  if (info == null) return;
  info.classList.remove("active");
  overlay.classList.remove("active");
}
