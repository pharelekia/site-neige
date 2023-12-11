const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const slides = document.querySelectorAll('.slide');



const slideIcons = document.querySelectorAll('.slide-icon')

const numberOfSlides = slides.length;


let slideNumber = 0;

nextBtn.addEventListener('click', function(){

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
    })
    slideNumber++;

    if(slideNumber>(numberOfSlides-1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
})

prevBtn.addEventListener('click', function(){

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
    })
    slideNumber--;

    if(slideNumber<0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
})

let playSlider;

let repeater = () =>{
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('active')
        })
        slideNumber++;
    
        if(slideNumber>(numberOfSlides-1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active');

    },3000)
}

repeater();

// mouseover
const slider = document.querySelector('.slider')

slider.addEventListener('mouseover', function(){
    clearInterval(playSlider);
})

// mouseout

slider.addEventListener('mouseout', function(){
   repeater()
})




// Slide pour les commentaire
const suivantBtn = document.querySelector('.suivant-btn');
const avantBtn = document.querySelector('.avant-btn');

const commentaires = document.querySelectorAll('.commentaire');


const numberOfCommentaires = commentaires.length;


let commentaireNumber = 0;

suivantBtn.addEventListener('click', function(){

    commentaires.forEach((elt) => {
        elt.classList.remove('Active')
    })

    commentaireNumber++;

    if(commentaireNumber>(numberOfCommentaires-1)){
        commentaireNumber = 0;
    }

    commentaires[commentaireNumber].classList.add('Active');
})

avantBtn.addEventListener('click', function(){

    commentaires.forEach((elt) => {
        elt.classList.remove('Active')
    })

    commentaireNumber--;

    if(commentaireNumber<0){
        commentaireNumber = numberOfCommentaires - 1;
    }

    commentaires[commentaireNumber].classList.add('Active');
})


let playSliderComments;

let repeaterComments = () =>{
    playSliderComments = setInterval(function(){
        commentaires.forEach((elt) => {
            elt.classList.remove('Active')
        })
    
    
        commentaireNumber++;
    
        if(commentaireNumber>(numberOfCommentaires-1)){
            commentaireNumber = 0;
        }
    
        commentaires[commentaireNumber].classList.add('Active');
        

    },3000)
}
repeaterComments();

// mouseover
const carousel = document.querySelector('.carousel')

carousel.addEventListener('mouseover', function(){
    clearInterval(playSliderComments);
})

// mouseout

carousel.addEventListener('mouseout', function(){
    repeaterComments();
})



document.querySelector('.page-disposition').addEventListener('click', function(){
    location.href = "disposition.html"
})
document.querySelector('.page-evenement').addEventListener('click', function(){
    location.href = "evenement.html"
})
document.querySelector('.page-formation').addEventListener('click', function(){
    location.href = "formation.html"
})
document.querySelector('.page-contact').addEventListener('click', function(){
    location.href = "contact.html"
})





// Create a new observer
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r)
}));

 