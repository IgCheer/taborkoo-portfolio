// ==================== Menu Burger====================

const menuIcon = document.querySelector('.burger-wrapper')

const menuBody = document.querySelector('.menu__body')
const body = document.querySelector('.body');
const menuBodyItems = document.querySelectorAll('.menu__item')

menuIcon.addEventListener("click", function(event){
   
    if (event.target.closest('.burger-wrapper')){
        menuBody.classList.toggle('active');
        menuIcon.classList.toggle('active');
        document.body.classList.toggle('_lock');
    }
    // menuBodyItems.forEach((item) => {
    //     if(menuBody.classList.contains('active')) {
    //       item.classList.toggle('active')
    //     } else {
    //         item.classList.remove('active')
    //     }

    // })
   
})

//=====================Прокрутка к нужному разделу меню

const menuLinks = document.querySelectorAll('.link[data-goto]');


if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    })


    function onMenuLinkClick(e) {
        if(e.target.dataset.goto && document.querySelector(e.target.dataset.goto)) {
            const gotoBlock = document.querySelector(e.target.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

            if(menuIcon.classList.contains('active')) {
                document.body.classList.remove('_lock');
                menuBody.classList.remove('active');
                menuIcon.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}



gsap.registerPlugin(ScrollTrigger, ScrollSmoother) // Подключение плагинов


// Выключаем плавный скролл на мобилках
if(ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper-scroll', // Оболочка плавного скролла
        content: '.content',  // Внутрення часть, которая будет плавно двигаться
        smooth: 1.8,
        effects: true,
    })


    // Начальная {} и конечная {} точка анимации (исчезновение объекта)
    gsap.fromTo('.page__main', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger:'.page__main',
            start: 'center',
            end: '650',
            scrub: true, // Возвращаем объект
        }
    })

    gsap.fromTo('.resume__image', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger:'.resume__image',
            start: 'top',
            end: '450',
            scrub: true, // Возвращаем объект
        }
    })

    gsap.fromTo('.resume__content', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger:'.resume__content',
            start: 'top',
            end: '450',
            scrub: true, // Возвращаем объект
        }
    })

    let itemsLeft = gsap.utils.toArray('.portfolio__left .img')
   
    itemsLeft.forEach(item => {
        gsap.fromTo(item, {x: -40, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '-400',
                scrub: true, // Возвращаем объект
            }
        })
    })

    let textLeft = gsap.utils.toArray('.left-portfolio__block')
   
    textLeft.forEach(item => {
        gsap.fromTo(item, {x: -40, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '-400',
                scrub: true, // Возвращаем объект
            }
        })
    })

    let itemsRight = gsap.utils.toArray('.portfolio__right .img')
   
    itemsRight.forEach(item => {
        gsap.fromTo(item, {x: 40, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '-400',
                scrub: true, // Возвращаем объект
            }
        })
    })

    let textRight = gsap.utils.toArray('.right-portfolio__block')
   
    textRight.forEach(item => {
        gsap.fromTo(item, {x: -40, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '800',
                end: '400',
                scrub: true, // Возвращаем объект
            }
        })
})

}




const sliderMain = new Swiper ('.slider-main', {
    freeMode: true, // где закончили крутить слайды, там и останавливается слайдер
    centeredSlides: true, // начальный (первый) слайд в центре
    mousewheel: true, //скролл слайдов мышью
    parallax: true,
    slidesPerView: 3.5, //количество показываемых слайдов
    breakpoints: {
        0: {
            slidesPerView: 2.5, 
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5, 
            spaceBetween: 60,
        }
    }
})


const sliderBg = new Swiper ('.slider_bg', {
   
    centeredSlides: true, // начальный (первый) слайд в центре
    parallax: true,
    slidesPerView: 3.5, //количество показываемых слайдов
    spaceBetween: 60,
    slidesPerView: 3.5, 
})

sliderMain.controller.control = sliderBg;  //cвязали два слайдера друг с другом


//Открытие картинки при клике

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener("click", e => {
        item.classList.toggle('opened')
    })
})


//Триггер анимации текста при скролле

let desc = document.querySelector('.description');

sliderMain.on('slideChange', e => {
   if (sliderMain.activeIndex > 0) {
    desc.classList.add('hidden')
   } else {
    desc.classList.remove('hidden')
   }
})



//Many sliders

document.querySelectorAll('.slider-many').forEach((num, item) => {
    window[`manySlider${item + 1}`] = new Swiper(num, {
        freeMode: true,
        centeredSlides: true, // начальный (первый) слайд в центре
        // parallax: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75, //количество показываемых слайдов
        slidesOffsetBefore: -125,
    })
})
bindSwipers(manySlider1, manySlider2, manySlider3, manySlider4); // Связь всех слайдеров в секции




// Emotions

document.addEventListener('DOMContentLoaded', function() {

const emotionsSlider = new Swiper('.showcase__carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true, // Главный (активный) слайд посередине
    navigation: {
        nextEl: '.showcase-navigation__next',
        prevEl: '.showcase-navigation__prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        680: {
            slidesPerView: 2.5, 
        },
        900: {
            slidesPerView: 3, 
        }
    }
})


document.querySelector('video').playbackRate = 2 // Скорость видео на фоне

})


// Footer

document.querySelectorAll('.magic-footer__cursor').forEach(node => {
    document.addEventListener("mousemove", e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
    })
})
