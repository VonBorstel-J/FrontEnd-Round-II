// $(document).ready(function(){

//     /* Open lightbox on button click */
//     $('.lightbox-toggle card').click(function(){
//         $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
//         $('.box').fadeIn();

//         //Check if lightbox has an image
//         if ($('.box').contents('img')) {
//             $('.box').contents().remove('img'); //If true, clear image
//         }

//         //Get text content in attribute
//         var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

//         if ($altvalue=="Angkor Wat") {
//             var img = $('#photo:nth-child(1) img').clone(); //Duplicate DOM element
//             $('.box').append(img); //Insert duplicated element in another element
//         }
//     });

//     /* Click to close lightbox */
//     $('.close, .backdrop').click(function(){
//         $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
//             $('.backdrop').css('display', 'none');
//         });
//         $('.box').fadeOut();
//     });

// });

// $('.card').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows: true,
//   dots: true
  
// });


// $('.card').slickLightbox({
//   itemSelector        : 'a.open-lightbox',
//   navigateByKeyboard  : true
// });


$(document).ready(function(){
  $('.card').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<span class="gallery-arrow mod-prev">Prev</span>',
    nextArrow: '<span class="gallery-arrow mod-next">Next</span>'
  });
  
  $('.card0').slickLightbox({
    src: 'a href',
    itemSelector: '.card0 a',
    background: 'rgba(0, 0, 0, .7)'
  });
});