const swiper = new Swiper(".swiper", {

    slidesPerView:3,

    spaceBetween:25,

    loop:true,


    autoplay:{

        delay:3000,

    },


    pagination:{

        el:".swiper-pagination",

        clickable:true

    },


    breakpoints:{


        0:{

            slidesPerView:1

        },


        700:{

            slidesPerView:2

        },


        1000:{

            slidesPerView:3

        }


    }


});
const comentarios = document.querySelector(".GOOGLE-COMMENTS");


let startX = 0;


comentarios.addEventListener("touchstart", (e)=>{

    startX = e.touches[0].clientX;

});


comentarios.addEventListener("touchend", (e)=>{


    let endX = e.changedTouches[0].clientX;


    if(startX - endX > 50){

        comentarios.scrollBy({

            left:300,

            behavior:"smooth"

        });

    }


    if(endX - startX > 50){

        comentarios.scrollBy({

            left:-300,

            behavior:"smooth"

        });

    }


});
document.addEventListener("DOMContentLoaded", ()=>{


const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");


hamburger.addEventListener("click", ()=>{

    navbar.classList.toggle("active");

});


});
function menuMobile(){

    const menu = document.querySelector(".navbar");

    menu.classList.toggle("menu-open");

}
document.addEventListener("DOMContentLoaded",()=>{


const cards = document.querySelectorAll(".course-card");



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(card=>{


        if(card.isIntersecting){


            card.target.classList.add("show");


            observer.unobserve(card.target);


        }


    });



},{

    threshold:0.25

});



cards.forEach(card=>{

    observer.observe(card);

});


});

window.addEventListener("load",()=>{


const cards = document.querySelectorAll(".course-card");


// adiciona estado inicial

cards.forEach(card=>{

    card.classList.add("animate-card");

});



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


setTimeout(()=>{


entry.target.classList.add("card-visible");


},200);


}


});


},{
threshold:0.15

});



cards.forEach(card=>{

observer.observe(card);

});


});