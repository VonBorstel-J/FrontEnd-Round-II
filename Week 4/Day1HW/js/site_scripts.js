let images = [];

images.push(
  "/partners/partner1.png",
  "/partners/partner2.png",
  "/partners/partner3.png",
  "/partners/partner4.png",
  "/partners/partner5.png",
  "/partners/partner6.png"
);

images.forEach((element) => {
  let list = document.getElementById("partnersList");
  let image = document.createElement("img");
  image.src = element;
  let li = document.createElement("li");
  li.className = "partner";
  list.appendChild(li).appendChild(image);
});
