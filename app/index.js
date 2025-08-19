import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

const cards = document.querySelectorAll('.skills .card')

const profile = document.querySelector('.profile')
const about = document.querySelector('.about')


const animated = (element,duration= 0.35)=>{
    animate(
        element,
        { scale: [0.9, 1],opacity:1 },
        {duration: duration }
    );
}

const animateCards = (element,duration= 0.35)=>{
    animate(
        element,
        { scale: [0.8, 1],opacity:1 },
        {duration: duration,delay:stagger(0.3 )}
    );
}

animated(profile)
animated(about)
animateCards(cards)