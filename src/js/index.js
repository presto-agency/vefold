const btn = document.getElementById('check-rule');
const check = document.getElementById('check');

if(btn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        if(check.checked) {
            window.location.href = '/signup-notification.html';
        } else {
            check.parentElement.parentElement.classList.add('error');
        }
    });
}

/*
Popup toggle theme
 */
$(document).on('click', '.popup-btn', function () {
    const popupBtn = $(this);
    const popupBox = popupBtn.closest('.popup').find('.popup-box');
    !popupBtn.hasClass('is-active') ? openPopup(popupBtn, popupBox) : closePopup(popupBtn, popupBox);
});

$(document).on('click', '.popup-box-close', function () {
    const popupBtn = $(this).closest('.popup').find('.popup-btn');
    const popupBox = $(this).closest('.popup-box');
    closePopup(popupBtn, popupBox);
});

const closePopup = (btn, box) => {
    btn.removeClass('is-active');
    box.fadeOut(200);
    setTimeout(function () {
        $('#user-carousel').slick('slickGoTo', 0);
    }, 200);
};

const openPopup = (btn, box) => {
    $('.popup-btn').not(btn).removeClass('is-active');
    $('.popup-box').not(box).fadeOut(200);
    btn.addClass('is-active');
    box.fadeIn(200);
    $('#user-carousel').slick('refresh');
};

/*
Close popups on click outside
 */
// $(document).mouseup(function (e) {
//     const container = $('.popup');
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//         $('.popup-btn').removeClass('is-active');
//         $('.popup-box').fadeOut(200);
//     }
// });

/*
User data carousel
 */
$('#user-carousel').slick({
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    cssEase: 'ease-out',
    adaptiveHeight: true,
});

/*
Move carousel on click
 */
$('[data-carousel]').on('click', function (event) {
    event.preventDefault();
    const carousel = $(this).attr('data-carousel');
    const toSlide = $(this).attr('data-slide');
    $(carousel).slick('slickGoTo', toSlide);
});