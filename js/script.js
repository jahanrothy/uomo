// function toggleMenupage() {
//    let handle = document.getElementsByClassName("menu_page");
//    handle. ("activepage");
// }

function openMenupage() {
  // e.preventDefault()
  console.log("callded");
  // console.log('even', e);

  const menuPageElement = document.getElementsByClassName("menu_page");

  const element = menuPageElement[0];

  console.log(element);

  element.classList.add("active-menu-page");
  // element.style.visibility ='visible';
}

function closeMenupage() {
  // e.preventDefault()
  console.log("callded");
  // console.log('even', e);

  const menuPageElement = document.getElementsByClassName("menu_page");

  const element = menuPageElement[0];

  console.log(element);

  element.classList.remove("active-menu-page");
  // element.style.visibility ='visible';
}

openMenupage();
closeMenupage();

// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + "</span>";
//       },
//     },
//   });

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// function toggleMenupage(){
//     var menuPages = document.getElementsByClassName('menupage');
//     for (var i = 0; i < menuPages.length; i++) {
//         if (menuPages[i].style.visibility === 'visible') {
//             menuPages[i].style.visibility = 'hidden';
//         } else {
//             menuPages[i].style.visibility = 'visible';
//         }
//     }
//     console.log('kkdkk');
// }

// let div = document.getElementById('menupage');
// let display = 0;

// function toggleMenupage()
// {
//     if(display == 1)
//     {
//         StylePropertyMap.display = 'block';
//     }
//     else{
//         StylePropertyMap.display = 'none';
//         display = 1;
//     }
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

// const Swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">"' + (index + 1) + "</span>";

//       },
//     },
//   });
