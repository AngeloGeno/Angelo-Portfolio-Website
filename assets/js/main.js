/*=============== HOME SPLIT TEXT ===============*/
const { animate, splitText, stagger } = anime;

const { chars: chars1 } = splitText('.home__profesion-1', {chars: true})
const { chars: chars2 } = splitText('.home__profesion-2', {chars: true})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
/*=============== SWIPER PROJECTS ===============*/

const swiper = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween:24,
  slidesPerView:'auto',
  grabCursor:true,
  speed:600,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
 
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () =>{
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

      // Active the tab and corresponding content
    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})
/*=============== SERVICES ACCORDION ===============*/

const servicesButtons = document.querySelectorAll('.services__button')


servicesButtons.forEach((button) => { 

  const heightInfo = document.querySelector('.services__info')
  heightInfo.style.height = heightInfo.ScrollHeight + 'px'  

  button.addEventListener('click', () => {      
    const servicesCards =document.querySelectorAll('.services__card'),
          currentCard = button.parentNode,        
          currentInfo = currentCard.querySelector('.services__info'),
          isCardOpen = currentCard.classList.contains('services-open') 

      //For closing other services  info\
    servicesCards.forEach((card) => { 
      card.classList.replace('services-open', 'services-close')

      const info = card.querySelector('.services__info')
            info.style.height ='0'
    })
        
    // Opne only if not already open
    if(!isCardOpen){
      currentCard.classList.replace('services-close', 'services-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }

  })  

})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn =document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyEmail)
  copyBtn.innerHTML = 'Email Copied <i class="ri-check-line"></i>'

  setTimeout(() => {
    copyBtn.innerHTML = 'Copy Email <i class="ri-file-copy-line"></i>'
  }, 2000);
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear()
textYear.textContent = currentYear

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollSections = document.querySelectorAll('section[id]') 

const scrollActive = () => {
  const scrollY = window.pageYOffset

  scrollSections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){  
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')            
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
} 

window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/ 
 const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2000,    
    delay:300,  
 })

 sr.reveal('.home__image, .projects__container, .work__container, .contact__container')
 sr.reveal('.home__data', {delay: 900, origin:'bottom'})
 sr.reveal('.home__info', {delay: 1200, origin:'bottom'})
 sr.reveal('.home__social, .home__cv', {delay: 1500} )
 sr.reveal('.about__data', {origin:'left'})     
 sr.reveal('.about__image', {origin:'right'}) 
 sr.reveal('.services__card', {interval: 100})           
