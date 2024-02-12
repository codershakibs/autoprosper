


//
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 2] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});


// ideal-card
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".ideal-card-1");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "25px",
            pagination: true,
            breakpoints: {
                1350: {
                    gap: "20px",
                },
                991: {
                    perPage: 2,
                    gap: "15px",
                },
                586: {
                    perPage: 1,
                    gap: "10px",
                },
            },
        });

        splide.mount();
    });
});

// tips-card
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".tips-card-1");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "25px",
            pagination: true,
            breakpoints: {
                1350: {
                    gap: "20px",
                },
                991: {
                    perPage: 2,
                    gap: "15px",
                },
                586: {
                    perPage: 1,
                    gap: "10px",
                },
            },
        });

        splide.mount();
    });
});

// customers-card 
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".customers-card-1");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 8,
            // perMove: 1,
            gap: "10px",
            pagination: true,
            autoScroll: {
                speed: 1,
            },
            breakpoints: {
                1350: {
                    gap: "20px",
                },
                991: {
                    perPage: 2,
                    gap: "15px",
                },
                586: {
                    perPage: 3,
                    gap: "10px",
                    pagination: false,

                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});



// var splide = new Splide('.splide', {
//     type: 'loop',
//     perPage: 2,
//     perMove: 1,
//     gap: 15,
// });

// splide.mount();

/////
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".discover-card-1");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: "25px",
            pagination: true,
            breakpoints: {
                1350: {
                    gap: "20px",
                },
                991: {
                    perPage: 2,
                    gap: "15px",
                },
                586: {
                    perPage: 2,
                    gap: "10px",
                },
            },
        });

        splide.mount();
    });
});



// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}




