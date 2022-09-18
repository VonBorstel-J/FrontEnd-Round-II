let container = document.querySelector(".container");

for (let i = 0; i <= 7; i++) {
  let myDiv = document.createElement("div");
  if (i === 0) {
    myDiv.innerHTML =
      '<div class="card card0"><div class="border"><h2>Carmichael</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  } else if (i === 1) {
    myDiv.innerHTML =
      '<div class="card card1"><div class="border"><h2>Chancho</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  } else if (i === 2) {
    myDiv.innerHTML =
      '<div class="card card2"><div class="border"><h2>Steve</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  } else if (i === 3) {
    myDiv.innerHTML =
      '<div class="card card3"><div class="border"><h2>Patrice</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  } else if (i === 4) {
    myDiv.innerHTML =
      '<div class="card card4"><div class="border"><h2>Maximus</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  } else if (i === 5) {
    myDiv.innerHTML =
      '<div class="card card5"><div class="border"><h2>Edwin</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  } else if (i === 6) {
    myDiv.innerHTML =
      '<div class="card card6"><div class="border"><h2>Darren</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  } else if (i === 7) {
    myDiv.innerHTML =
      '<div class="card card7"><div class="border"><h2>Debby</h2><div class="icons"><i class="fa fa-instagram" aria-hidden="true"></i><i class="fa fa-facebook" aria-hidden="true"></i><p class="fa">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>' +
      "</div></div></div>";
  }
  container.appendChild(myDiv);
}

// const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
// const gallery = document.getElementsByClassName(".card0");
// imageIndexes.forEach((i) => {
//   const image = document.createElement("img");
//   image.src = `/images/winterland${i}`;
//   image.classList.add("card");

//   gallery.appendChild(image);
// });
