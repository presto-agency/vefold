let site = {
    admin: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    package: {
        name: '',
        price: ''
    },
    paymentType: {
        name: '',
        price: '',
        label: ''
    },
    payment: {
        fullName: '',
        social: '',
        address: '',
        postCode: '',
        nameOnCard: '',
        numberCard: '',
        periodCardMonth: '',
        periodCardYear: '',
        cvc: ''
    },
};

/*
Step 1
 */
$('#create-step-1').on('submit', function (event) {
    event.preventDefault();
    if(createStep1.valid()) {
        let dataArray = $(this).serializeArray();
        for(let i = 0; i < dataArray.length; i++) {
            site = {
                ...site,
                admin: {
                    ...site.admin,
                    [dataArray[i].name]: dataArray[i].value
                }
            }
        }
        $('#create-carousel').slick('slickNext');
    }
});

/*
Step 2
 */
const monthlyLabel = $('#packageMonthlyPrice');
const annualLabel = $('#packageAnnualPrice');
let annualPrice;
let annualPriceWithPercent;

$('#create-step-2').on('submit', function (event) {
    event.preventDefault();
    if(createStep2.valid()) {
        let checkedInput = $('input[name="package"]:checked')[0];
        site = {
            ...site,
            package: {
                name: checkedInput.value,
                price: checkedInput.dataset.price
            }
        };
        annualPrice = checkedInput.dataset.price * 12;
        annualPriceWithPercent = 0.1 * ( checkedInput.dataset.price * 12 );
        monthlyLabel.html(numberWithCommas(checkedInput.dataset.price));
        annualLabel.html(numberWithCommas(annualPrice - annualPriceWithPercent));
        $('input[name="paymentType"][value="monthly"]').attr('data-price', checkedInput.dataset.price);
        $('input[name="paymentType"][value="annual"]').attr('data-price', annualPrice - annualPriceWithPercent);
        $('#selectedPackage').html(checkedInput.value);
        $('#create-carousel').slick('slickNext');
    }
});

/*
Step 3
 */
$('#create-step-3').on('submit', function (event) {
    event.preventDefault();
    if(createStep3.valid()) {
        let checkedInput = $('input[name="paymentType"]:checked')[0];
        site = {
            ...site,
            paymentType: {
                name: checkedInput.value,
                price: checkedInput.dataset.price,
                label: checkedInput.dataset.label
            }
        };
        $('#selectedPackagePrice').html(numberWithCommas(checkedInput.dataset.price));
        $('#selectedPackagePriceLabel').html(checkedInput.dataset.label);
        $('#create-carousel').slick('slickNext');
    }
});

/*
Step 4
 */
$('#create-step-4').on('submit', function (event) {
    event.preventDefault();
    if(createStep4.valid()) {
        let dataArray = $(this).serializeArray();
        for(let i = 0; i < dataArray.length; i++) {
            site = {
                ...site,
                payment: {
                    ...site.payment,
                    [dataArray[i].name]: dataArray[i].value
                }
            }
        }
        console.log('step 4 - ', site);
    }
});