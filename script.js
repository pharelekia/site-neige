// evenement slider images
const slideEvent = document.querySelectorAll('.slide-event');

const numberOfSlideEvent = slideEvent.length;

let slideEventNumber = 0

let playSlideEvent;

let repeaterEvent = () =>{
    playSlideEvent = setInterval(function(){
        slideEvent.forEach((elt) => {
            elt.classList.remove('active')
        })
    
        slideEventNumber++;
    
        if(slideEventNumber>(numberOfSlideEvent-1)){
            slideEventNumber = 0;
        }
    
        slideEvent[slideEventNumber].classList.add('active');
        

    },3000)
}

repeaterEvent();



document.querySelector('.logo').addEventListener('click', function(){
    location.href = "index.html"
})

let vers =  document.querySelector('.vers')
vers.addEventListener('click', function(){
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
observer.observe(document.querySelector('.reveal'));