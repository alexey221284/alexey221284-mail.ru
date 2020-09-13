/* Owl Carousel */

$(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 0,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 4
            }
        }
    });
    
   });

/* Yandex Maps */

ymaps.ready(init);

function init () {
	
    var myMap = new ymaps.Map('map', {
            center: [51.608569, 45.986718],
			zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

	// Создаем метку.
    var placemark = new ymaps.Placemark([51.608569, 45.986718], {}, {
    // Задаем стиль метки (метка в виде круга).
    preset: "islands#circleDotIcon",
    // Задаем цвет метки (в формате RGB).
    iconColor: ' #f47d32'
	});
	myMap.geoObjects.add(placemark);

    
}

  

/* Burger menu */


document.getElementById('closeburgermenu').addEventListener('click', event => {
    closeMenu();
})

function closeMenu() {
    console.log('!!!close');
    if (isMobile()) {
        document.getElementById('menu_all').style.right = '-70%';
        document.getElementById('menu_all').style.transition = 'all 0.5s linear';
    }    
}

function openMenu() {
    document.getElementById('menu_all').style.right = '0vw';
    document.getElementById('menu_all').style.transition = 'all 0.5s linear';
    document.getElementById('menu_all').style.display = 'initial';
}

console.log (window.screen.availHeight);
console.log (window.screen.availWidth);

const minDesctopWidth = 1200;
function isMobile() {
    return window.screen.availWidth < minDesctopWidth;    
}

let closeable = document.getElementsByClassName('mobile_menu_close');
for (let i=0; i<closeable.length; i++) {
    closeable[i].addEventListener('click', event => {
        closeMenu();
    })
}
