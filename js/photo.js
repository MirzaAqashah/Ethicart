$(document).ready(function () {
    const carousel = $(".carousel");
    const accordion = $("#accordion");
    // Example JSON Data for the Photo Album
    let albumData = [
        { "src": "css/imgs/Page1.png", "title": "Welcome" },
        //complete the rest of the object array
        { "src": "css/imgs/Page2.png", "title": "Experience" },
        { "src": "css/imgs/Page3.png", "title": "Discover" }
    ];
    // Populate Slick Carousel
    albumData.forEach(photo => {
        carousel.append(`<img src="${photo.src}" 
        alt="${photo.title}">`);
    });
    // Initialize Slick Carousel
    carousel.slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class="slick-prev">&lt;</button>',
        nextArrow: '<button class="slick-next">&gt;</button>'
    });
});
