var toggleAffix = function (affixElement, scrollElement, wrapper) {
    var top = wrapper.offset().top;

    if (scrollElement.scrollTop() > top) {
        affixElement.addClass("affix");
    } else {
        affixElement.removeClass("affix");
    }
};

/* use toggleAffix on any data-toggle="affix" elements */
$('[data-toggle="affix"]').each(function () {
    var elem = $(this);
    var wrapper = $('<div></div>');

    elem.before(wrapper);

    $(window).on('scroll resize', function () {
        toggleAffix(elem, $(this), wrapper);
    });

    // init
    toggleAffix(elem, $(window), wrapper);
});

$(window).scroll(function () { /* affix after scrolling 80px */
    if ($(document).scrollTop() > 80) {
        $('.navbar').addClass('affix');
    } else {
        $('.navbar').removeClass('affix');
    }
});


// Image('.tiler-overlay', { rows: 3, cols: 3 });


// Initialize and add the map
function initMap() { // The location of Uluru
    var uluru = {
        lat: -25.344,
        lng: 131.036
    };

    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
var lightbox = $('a.lightbox').simpleLightbox();
