// function partnersGallery () {

// var photos = [];
// var fileNames = [];
// // var imageList = [];
// // var image = [];
// var l = document.createElement('ul');
// // var oL = document.createElement("<li class='partner'></li>");
// for (var i=0; i < 6; i++) {
//     fileNames.push("partner" + (i+1));
//     photos.push("<img src='/partners/"+fileNames+".png'>");
//     // image = list + openList + photos;
//     // imageList.push(image);
//     var oL = document.createElement("<li class='partner'></li>");
//     oL.appendChild(document.createElement("<img src='/partners/"+photos+".png'>"));
//     l.appendChild(oL);
// }
// return l;
// }

// document.getElementById("pG").appendChild(l(oL));

// var myCache = new imageCache('/partners/partner', 1, 6);
// myCache.nextImage("foo");

// function imageCache(base, firstNum, lastNum) {
//     this.cache = [];
//     var img;
//     for (var i = firstNum; i <= lastNum; i++) {
//         img = new Image();
//         img.src = base + i + ".png";
//         this.cache.push(img);
//     }
// }

// imageCache.prototype.nextImage(partner) {
//     var element = document.getElementById(pG);
//     var targetSrc = element.src;
//     var cache = this.cache;
//     for (var i = 0; i < cache.length; i++) {
//         if ((cache[i].src) === targetSrc) {
//             i++;
//             if (i >= cache.length) {
//                 i = 0;
//             }
//             element.src = cache[i].src;
//             return;
//         }
//     }
// }

// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = '/partners/partner1.png';

// imgArray[1] = new Image();
// imgArray[1].src = '/partners/partner2.png';

// imgArray[2] = new Image();
// imgArray[2].src = '/partners/partner3.png';

// imgArray[3] = new Image();
// imgArray[3].src = '/partners/partner4.png';

// imgArray[4] = new Image();
// imgArray[4].src = '/partners/partner5.png';

// imgArray[5] = new Image();
// imgArray[5].src = '/partners/partner6.png';

// /*------------------------------------*/

// function nextImage(imgArray)
// {
//     var img = document.getElementById(partnersList);

//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(partner).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(partner).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }

// nextImage()

// var images = ['/partners/partner1.png', '/partners/partner2.png', '/partners/partner3.png', '/partners/partner4.png', '/partners/partner5.png', '/partners/partner6.png'];

// var allPics = images.length;
// var i = 0;

// for(;i<allPics; i++){
//     var list = document.createElement('li')
//     var a = document.createElement('a');
//     var img = document.createElement('img');
//     img.src = images[i];
//     a.appendChild(img);

//     document.getElementById('partner').appendChild(a);
// }

let images = [
  "/partners/partner1.png",
  "/partners/partner2.png",
  "/partners/partner3.png",
  "/partners/partner4.png",
  "/partners/partner5.png",
  "/partners/partner6.png",
];

let list = document.getElementById("partnersList");

let image = document.createElement('img');


images.forEach((item) => {
  let li = document.createElement("li");
  li.className = 'partner'
  li.appendChild = document.createElement("img") ;
  list.appendChild(li);
});
