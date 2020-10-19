// About us slider, without slick

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide');
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  for(slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for(dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  clearInterval(interval);
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
    clearInterval(interval);
  });
});

const nextSlideClear = () => {
  nextSlide();
  clearInterval(interval);
}

nextSlide();

next.addEventListener('click', nextSlideClear);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);

// Statistic counter

let counters = document.querySelectorAll('.counter');

counters.forEach(number => {
	let numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML, end = +number.dataset.target;
    
	window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			let interval = setInterval(function() {
				number.innerHTML = ++start;
				if(start == end) {
					clearInterval(interval);
				}
			}, 10);
		}
	});
});
  

// Members Slider with Slick

$(document).ready(function(){
  $('.our-team__members').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img src="images/a-l.svg" alt="" class="arrow-left arrow">',
    nextArrow: '<img src="images/a-r.svg" alt="" class="arrow-right arrow">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
