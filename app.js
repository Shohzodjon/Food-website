"use scrict";
const header = document.querySelector('header');
const menu = document.querySelector("#menu--bars");
const navbar = document.querySelector(".navbar");
const searchBtn = document.querySelector("#search");
const searchSection = document.querySelector("#search--section");
const searchCloseBtn = document.querySelector(".search--close");
const searchInput = document.querySelector('#search--box');
const searchInputLabel = document.querySelector('.label--search');
const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");
const slider = document.querySelector(".wrapper");
const allSlide = document.querySelectorAll(".slide");
const inputNumber = document.querySelector('#quantity');

// IMAGE ANIMATION
const img = document.querySelector('.all--img');
console.log(img);

   function imgLoading(entries, observer){
      const [entry] = entries;
      if(!entry.isIntersecting)return;
      entry.target.classList.remove('lazy--img');
       observer.unobserve(entry.target);
       
   }

   const imgObserver = new IntersectionObserver(imgLoading, {
     root:null,
     threshold:.6,
   })
imgObserver.observe(img);

  
/// ###### Review--Section ANIMATION ######
   
const reviewSection = document.querySelector('.review--section');

   function reviewSectionLoading(entries, observer){
       const [entry] = entries;
       if(!entry.isIntersecting)return;
         entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
   }
    const reviewSectionObserver = new IntersectionObserver(reviewSectionLoading,{
      root:null,
      threhold:.6,
    });

    reviewSectionObserver.observe(reviewSection);

   



/*
function imgLoad(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("lazy--img");
  box.classList.remove('section--hide');
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(imgLoad, {
  root: null,
  threshold: 0.5,
});

allImges.forEach((img) => imgObserver.observe(img));

*/
////  ######   END OF IMAGE ANIMATION


//// Second Slider

const slideBtnLeft = document.querySelector('.control--btn--left');
const slideBtnRight = document.querySelector('.control--btn--right');
const slideBody = document.querySelector('.slider--wrapper');
const secondAllSlide = document.querySelectorAll('.slide2');
const secondSlideImg = document.querySelectorAll('.second--slide--img');


inputNumber.addEventListener('click', function(){
      if(Number(inputNumber.value) < 0){
        inputNumber.value = 0;
      }
})

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", function () {
  searchSection.classList.toggle("active");
});
searchCloseBtn.addEventListener("click", function () {
  searchSection.classList.toggle("active");
  searchInput.value = '';
});
searchInputLabel.addEventListener('click', function(){
  searchInput.value = '';
  searchSection.classList.toggle("active");
})

window.addEventListener('scroll', function(){
  navbar.classList.remove('active')
  searchSection.classList.remove('active');
 
  
});

let counter = 0;

function moveSlide() {
  if (counter > allSlide.length - 1) {
    counter = allSlide.length - 1;
  } else if (counter < 0) {
    counter = 0;
  }
  slider.style.transform = `translateX(-${25 * counter}%)`;

}

rightBtn.addEventListener("click", () => {
  counter++;
  moveSlide();
});
leftBtn.addEventListener("click", () => {
  counter--;
  moveSlide();
});

let num = 0;
function secondSlide(){
  if (num >secondAllSlide.length- 1) {
    num = secondAllSlide.length - 1;
  } else if (num < 0) {
    num= 0;
  }
  slideBody.style.transform = `translateX(-${num*25}%)`;

  secondSlideImg.forEach((el, i)=>{
    if(num === i){
      el.style.transform = 'scale(1.4)';
    }
    else{
      el.style.transform = 'none';
    }
  }) 

}

slideBtnLeft.addEventListener('click', function(){
  num--;
  secondSlide();
});
slideBtnRight.addEventListener('click', function(){
   num++;
   secondSlide();
})



