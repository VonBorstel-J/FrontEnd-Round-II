/* --------PARTNERS---------- */

let images = [];

images.push(
  "images/partner1.png",
  "images/partner2.png",
  "images/partner3.png",
  "images/partner4.png",
  "images/partner5.png",
  "images/partner6.png"
);

images.forEach((element) => {
  let list = document.getElementById("part");
  let image = document.createElement("img");
  image.src = element;
  let li = document.createElement("li");
  li.className = "partner";
  list.appendChild(li).appendChild(image);
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Activity page scripts

$(document).ready(function () {
  $("td").css("cursor", "pointer");
  $("td").click(function () {
    var content = $(this).text();
    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");
    }
  });
});

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
        $("#result").append("<p>" + content + ":   " + "</p>");
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

//-------------FORM JS SCRIPTS-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var select = document.getElementById("contactSelect");
select.addEventListener("change", grabInput);

function grabInput() {
  var email = document.getElementById("emailOption");
  var phone = document.getElementById("phoneOption");
  var inputE = document.getElementById("emailInput");
  var inputP = document.getElementById("phoneInput");

  if (select.value == "Email") {
    inputE.style.display = "block";
    inputP.style.display = "none";
  } else if (select.value == "Phone") {
    inputP.style.display = "block";
    inputE.style.display = "none";
  } else {
    inputP.style.display = "none";
    inputE.style.display = "none";
  }
}

//---------------FORM JS SCRIPT---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Submit button Scripts

// Function to generate combination of characters
function generateCode() {
  // Time to create variables to store the generated codes
  var code = " "; // This will create and empty value that we can fill with the randomly generated code
  var getCode = " "; //to store the entered code by the user
  var btnvalue; // this is for button boolean values
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  //Generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length; //this code will randomly select a character from the variable str then store it in a new variable
    code += str.charAt(char); //now it'll take 8 accumulated new variables and store it in char
  }
  return code; //now itll output the full string of random characters
}

//This pulls everything and puts in into the HTML

document.getElementById("codes").innerHTML = generateCode();

//This code will determine whether to disable to enable the button
function disableButton(btnvalue) {
  document.getElementById("button").disabled = btnvalue; // this is the code that will enable or disable
  if (btnvalue == true) {
    //testing if button is disabled or enabled
    //set button and label color translucent
    document.getElementById("button").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)";
    document.getElementById("button").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    //set button andlabel color with no transparency
    document.getElementById("button").style.backgroundColor =
      "rgba(73, 119, 209, 1)";
    document.getElementById("button").style.color = "rgba(255, 255, 255, 1)";
  }
}

//listen to user input code
var codebox = document.getElementById("codeentered"); //get the input from the textbox
codebox.addEventListener("input", evaluateCode); //listen to code entered in the textbox

//run function if detected user had entered a character in textbox
function evaluateCode() {
  getCode = document.getElementById("codeentered").ariaValueMax; //get character entered
  var charset1 = getCode.trim(); // this will remove any hidden characters entered
  var charset2 = code.trim(); //remove any hidden characters generated
  //well see if this code matches the number of generated characters
  if (charset1.length == charset2.length && charset1 == charset2) {
    disableButton(false); //if matched, run the function to enable button
  }
}

//Activate function
