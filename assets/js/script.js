// libary aos
AOS.init({
  offset: 300,
  duration: 1500,
  once: true,
});


window.onload = function(){
  document.querySelector('.custem-spinner').style.display ="none";

}


// Show nav small device 
let top_body = document.querySelector('.to-up');
let nav = document.querySelector('nav');

window.onscroll = function(){
  
  if(this.scrollY >= 100){
    nav.classList.add('lg-nav-fixed')
    top_body.style.display = 'block';
  }else{
    nav.classList.remove('lg-nav-fixed')
    top_body.style.display = 'none';
  }    
}

top_body.onclick = function (){

  window.scrollTo({
    top:0,
  })
}





let icon_nav = document.querySelector('.nav-icon');
let nav_list = document.querySelector('.nav-list');
let fixeNav = document.querySelector('.fixed-nav');
let logo = document.querySelector('.logo');

icon_nav.onclick = function(){
  nav_list.classList.toggle('show')
}















// icon_nav.onclick = function(){

//   fixeNav.style.position === "unset";

//     if (fixeNav.style.position === "unset") {
//         fixeNav.style.position = "fixed";

//         fixeNav.style.backgroundColor= "#000";
//         logo.style.display = "none";

//       } else {
//         fixeNav.style.position = "unset";
//         fixeNav.style.backgroundColor= "transparent";
//         logo.style.display = "block";


//       }


//     if (nav_list.style.display === "none") {
//         nav_list.style.display = "block";
//       } else {
//         nav_list.style.display = "none";
//       }

// }




const lightbox = GLightbox({
    touchNavigation: true,
});

var $grid = $('.categary').isotope({
  // options
});
// filter items on button click
$('.shuffle-list').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});





// Start Swiper Event

var swiper = new Swiper(".events .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Start Sweiper Testimonials

var swiper = new Swiper(".testimonials .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
  
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});