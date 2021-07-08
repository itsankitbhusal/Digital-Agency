$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2,
      },
      768:{
          items:3
      },
      1024:{
          items:4
      }
  }
})
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const  toggleBtn = document.getElementById('toggle-btn')
const navLinks = document.getElementsByClassName('nav-links')[0]
// console.log(toggleBtn);
toggleBtn.addEventListener('click', () =>{
  navLinks.classList.toggle('active')
})
