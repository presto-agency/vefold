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

const detectPopupPosition = (popup) => {
    const wWidth = window.innerWidth;
    const wPopup = popup.outerWidth();
    const lPopup = popup.offset().left;
    console.log(wWidth + 10);
    console.log(wPopup + lPopup);
    if( ( wPopup + lPopup ) > ( wWidth + 10 )) {
        popup.addClass('to-right');
    } else {
        popup.removeClass('to-right');
    }
};

const closePopup = (btn, box) => {
    btn.removeClass('is-active');
    $('#user-carousel').slick('slickGoTo', 0);
    box.removeClass('to-right').hide();
};

const openPopup = (btn, box) => {
    $('.popup-btn').not(btn).removeClass('is-active');
    $('.popup-box').not(box).removeClass('to-right').hide();
    btn.addClass('is-active');
    box.fadeIn(200);
    $('#user-carousel').slick('setPosition');
    detectPopupPosition(box);
};

/*
Close popups on click outside
 */
$(document).mouseup(function (e) {
    const container = $('.popup');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.popup-btn').removeClass('is-active');
        $('.popup-box').removeClass('to-right').hide();
    }
});

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
    swipe: false
});

const carouselNav = $('.carousel-nav');
$('#create-carousel').slick({
    infinite: false,
    arrows: false,
    dots: true,
    fade: true,
    speed: 400,
    cssEase: 'ease-out',
    swipe: false,
    draggable: false,
    touchMove: false,
    accessibility: false,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 481,
            settings: {
                dots: false
            }
        }
    ]
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    ( nextSlide + 1 ) === slick.slideCount ? carouselNav.addClass('last-step') : carouselNav.removeClass('last-step');
    $('html, body').animate({scrollTop: 0}, 400);
}).on('afterChange', function (event, slick, currentSlide) {
    currentSlide === 0 ? carouselNav.addClass('first-step') : carouselNav.removeClass('first-step');
});

/*
Move carousel on click
 */
$('[data-carousel]').on('click', function (event) {
    event.preventDefault();
    const carousel = $(this).attr('data-carousel');
    const toSlide = $(this).attr('data-slide');
    switch (toSlide) {
        case 'prev':
            $(carousel).slick('slickPrev');
            break;
        case 'next':
            $(carousel).slick('slickNext');
            break;
        default:
            $(carousel).slick('slickGoTo', toSlide);
    }
});

/*
Detect agree toggle
 */
$('.detect-agree-input').on('change', function () {
    const checked = $(this).prop('checked');
    const elTarget = $(this).attr('data-target');
    checked ? $(elTarget).removeClass('disabled') : $(elTarget).addClass('disabled');
});

/*
Switch display options
 */
$(document).on('click', '.switch-display-btn', function () {
    const btn = $(this);
    const box = $('.switch-display-box');
    const displayOption = btn.attr('data-display');
    $('.switch-display-btn').not(btn).removeClass('active');
    box.attr('data-display-option', displayOption);
    btn.hasClass('active') ? btn.removeClass('active') : btn.addClass('active');
});

/*
Collapse site info
 */
$('.link-icon.__collapse').on('click', function () {
   const btn = $(this);
   const targetBox = btn.closest('.site').find('.site-detail');
   btn.toggleClass('active');
   targetBox.slideToggle(200);
});

/*
Tabs switch theme
 */
$(document).on('click', '.tab', function () {
    const tabBtn = $(this);
    const tabBtnId = tabBtn.attr('data-tab-id');
    const tabContent = $('.tab-content[data-tab-content-id="'+ tabBtnId +'"]');
    $('.tab').not(tabBtn).removeClass('active');
    $('.tab-content').not(tabContent).hide();
    if(tabBtn.hasClass('active')) {
        tabBtn.removeClass('active');
    } else {
        tabBtn.addClass('active');
        tabContent.fadeIn(200);
    }
});

/*
Set input auto width
 */
$('.access-value').each(function () {
    let widthPoint = 10;
    $(window).width() < 575 ? widthPoint = 8 : null;
    $(this).css('width', ( ( $(this).val().length + 1 ) * widthPoint ));
});

/*
Copy to clipboard
 */
const copyingSuccess = (tooltip, successText, defaultText) => {
    tooltip.text(successText);
    setTimeout(function () {
        tooltip.text(defaultText);
    }, 3000);
};

$('.copy-btn').on('click', function (event) {
    event.preventDefault();
    const text = $(this).closest('.access-data-item').find('.copy-text').val();
    const tooltipMessage = $(this).find('.tooltip-box p');
    const defaultText = $(this).attr('data-default-title');
    const successText = $(this).attr('data-success-title');
    if (navigator.clipboard !== undefined) {
        navigator.clipboard.writeText(text)
            .then(function () {
                copyingSuccess(tooltipMessage, successText, defaultText);
            }, function (error) {
                console.log('error - ', error);
            });
    } else if(window.clipboardData) {
        window.clipboardData.setData('Text', text);
        copyingSuccess(tooltipMessage, successText, defaultText);
    }
});

/*
Toggle password visible
 */
$('.toggle-visible-pass').on('click', function () {
    const inputPass = $(this).closest('.access-data-item').find('input');
    if(inputPass.attr('type') === 'password') {
        inputPass.attr('type', 'text');
    } else {
        inputPass.attr('type', 'password');
    }
});