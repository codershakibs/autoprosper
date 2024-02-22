


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
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



///
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".date-slider");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            // gap: "25px",
            pagination: true,
            breakpoints: {
                1350: {
                    // gap: "20px",
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




!function (t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = function (e) { t(e, window, document) } : t(jQuery, window, document) }(function (t, e, n, o) { var s; Number.isFinite = Number.isFinite || function (t) { return "number" == typeof t && isFinite(t) }; var i = function (t) { return this._options = {}, this.targetElement = t, this }; i.start = function (t, e) { return function (t, e) { e = e || {}, t._options.elementContainer = e.elementContainer || "div"; var n = e.classNames || {}; t._options.classNameSeconds = n.seconds || "jst-seconds", t._options.classNameMinutes = n.minutes || "jst-minutes", t._options.classNameHours = n.hours || "jst-hours", t._options.classNameClearDiv = n.clearDiv || "jst-clearDiv", t._options.classNameTimeout = n.timeout || "jst-timeout" }(s = new i(e), t), s.start(t) }, i.prototype.start = function (e) { var o = this, i = function (t) { var e = n.createElement(o._options.elementContainer); e.className = o._options.classNameSeconds; var s = n.createElement(o._options.elementContainer); s.className = o._options.classNameMinutes; var i = n.createElement(o._options.elementContainer); i.className = o._options.classNameHours; var r = n.createElement(o._options.elementContainer); return r.className = o._options.classNameClearDiv, t.append(i).append(s).append(e).append(r) }; this.targetElement.each(function (n, o) { var r = this, a = t(o), u = a.attr("class"); return a.on("complete", function () { clearInterval(a.intervalId) }), a.on("complete", function () { a.onComplete(a) }), a.on("complete", function () { a.addClass(r._options.classNameTimeout) }), a.on("complete", function () { e && !0 === e.loop && s.resetTimer(a, e, u) }), a.on("pause", function () { clearInterval(a.intervalId), a.paused = !0 }), a.on("resume", function () { a.paused = !1, r.startCountdown(a, { secondsLeft: a.data("timeLeft") }) }), i(a), this.startCountdown(a, e) }.bind(this)) }, i.prototype.resetTimer = function (t, e, n) { var o = 0; e.loopInterval && (o = 1e3 * parseInt(e.loopInterval, 10)), setTimeout(function () { t.trigger("reset"), t.attr("class", n + " loop"), s.startCountdown(t, e) }, o) }, i.prototype.fetchSecondsLeft = function (t) { var e = t.data("seconds-left"), n = t.data("minutes-left"); if (Number.isFinite(e)) return parseInt(e, 10); if (Number.isFinite(n)) return 60 * parseFloat(n); throw "Missing time data" }, i.prototype.startCountdown = function (t, e) { e = e || {}; var n = null, o = function () { return clearInterval(n), this.clearTimer(t) }.bind(this); t.onComplete = e.onComplete || o, t.allowPause = e.allowPause || !1, t.allowPause && t.on("click", function () { t.paused ? t.trigger("resume") : t.trigger("pause") }); var s = e.secondsLeft || this.fetchSecondsLeft(t), i = e.refreshRate || 1e3, r = s + this.currentTime(), a = r - this.currentTime(); this.setFinalValue(this.formatTimeLeft(a), t), n = setInterval(function () { (a = r - this.currentTime()) < 0 && (a = 0), t.data("timeLeft", a), this.setFinalValue(this.formatTimeLeft(a), t) }.bind(this), i), t.intervalId = n }, i.prototype.clearTimer = function (t) { t.find(".jst-seconds").text("00"), t.find(".jst-minutes").text("00:"), t.find(".jst-hours").text("00:") }, i.prototype.currentTime = function () { return Math.round((new Date).getTime() / 1e3) }, i.prototype.formatTimeLeft = function (t) { var e = function (t, e) { return (t += "").length >= (e = e || 2) ? t : Array(e - t.length + 1).join(0) + t }, n = Math.floor(t / 3600); t -= 3600 * n; var o = Math.floor(t / 60); t -= 60 * o; var s = parseInt(t % 60, 10); return 0 == +n && 0 == +o && 0 == +s ? [] : [e(n), e(o), e(s)] }, i.prototype.setFinalValue = function (t, e) { if (0 === t.length) return this.clearTimer(e), e.trigger("complete"), !1; e.find("." + this._options.classNameSeconds).text(t.pop()), e.find("." + this._options.classNameMinutes).text(t.pop() + ":"), e.find("." + this._options.classNameHours).text(t.pop() + ":") }, t.fn.startTimer = function (t) { return this.TimerObject = i, i.start(t, this), this } });







// $(function () {
//     $('.timer').startTimer();
// })

//
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".dash-slide");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: "40px",
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