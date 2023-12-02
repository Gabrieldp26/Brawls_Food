var swiper = new Swiper(".myswiper-2", {
    slidesPerView:1,
    spaceBetweeen: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },

    navigation : {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
      }
})
var swiper = new Swiper(".myswiper-2", {
    slidesPerView: 3,
    spaceBetweeen: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }

    
    }
})

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
  
    input.addEventListener('change', function() { 
        let id = input.ariaValueMax;
        let thiswiper = document.getElementById('swiper' + id)
        thiswiper.swiper.update();
    })

})

const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})