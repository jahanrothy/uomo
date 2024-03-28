// function togglediv(){
//     document.getElementsByClassName(menu_page).visibility = 'visible';
// }

// var div = document.getElementsByClassName('menupage');
// var display = 0;

// function togglediv(){
//     if(display == 1)
//     {
//         Style.display = 'block'
//         display = 0;
//     }
//     else
//     {
//         style.display = 'none';
//         display = 1;
//     }
// }


var Swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">"' + (index + 1) + "</span>";
        
      },
    },  
  });


