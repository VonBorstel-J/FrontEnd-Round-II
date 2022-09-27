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

/*--------- Random Codes -------- */

//Function to generate combination of characters

var btnvalue;

function generateCode() {
  var code = " "; //initialize to null value
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

document.getElementById("codes").innerHTML = generateCode();

//This will disable button
function disableButton(btnvalue) {
  document.getElementsByClassName("button").disable = btnvalue;
  if (btnvalue == true) {
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)!important";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)!important";
  } else {
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 1)!important";
    document.getElementById("submit").style.color = "rgba(73, 119, 209, 1)!important";
  }
}

var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() { 
  getCode = document.getElementById("codeentered").value; 
  var charset1 = getCode.trim(); 
  var charset2 = code.trim(); 

  if (charset1.length == charset2.length && charset1 == charset2) { 
    disableButton(false);
  }
}

//Activate function
disableButton();
