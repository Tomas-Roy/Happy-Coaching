
$('.one-carousel').owlCarousel({
    loop:true,
    margin:45,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
})


$('.two-carousel').owlCarousel({
  loop:true,
  margin:45,
  nav:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    992:{
        items:4
    },
    1200:{
        items:5
    }
  }
})

$('.three-carousel').owlCarousel({
  loop:true,
  margin:45,
  nav:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
    0:{
        items:1
    },
    768:{
        items:2
    },
    992:{
        items:3
    },
    1200:{
        items:3
    }
  }
})



$(document).ready(function(){


  $('.show').click(function(){
    $('.menu-area').addClass("show");
    $('ul').addClass('slider')
  })

  $('.hide').click(function(){
    $('.menu-area').removeClass("show");
    $('ul').removeClass('slider');
  })



})



const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));