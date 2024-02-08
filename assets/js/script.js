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



