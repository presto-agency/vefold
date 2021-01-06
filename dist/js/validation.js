/*
Sign in
 */
const signInForm = $('#sign-in');
signInForm.validate({
    rules: {
        name: 'required',
        password: 'required',
    },
    messages: {
      name: 'Rangt netfang eða lykilorð',
      password: 'Rangt netfang eða lykilorð'
    },
});

/*
Sign up
 */
const signUpForm = $('#sign-up');
signUpForm.validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8,
        },
        confirmPassword: {
            required: true,
            minlength: 8,
            equalTo: '#password'
        },
        agree: 'required'
    },
});

/*
Create user
 */
// step 1
const createStep1 = $('#create-step-1');
createStep1.validate({
    rules: {
        admin: "required",
        email: "required",
        password: {
            required: true,
            minlength: 8,
        },
        confirmPassword: {
            required: true,
            minlength: 8,
            equalTo: '#password'
        },
    }
});
createStep1.on('submit', function (event) {
    event.preventDefault();
    console.log('step 1 - ', createStep1.valid());
    if(createStep1.valid()) {
        // send or save data
        $('#create-carousel').slick('slickNext');
    }
});

//step 2
const createStep2 = $('#create-step-2');
createStep2.validate({
    rules: {
        package: "required",
    }
});
createStep2.on('submit', function (event) {
    event.preventDefault();
    console.log('step 2 - ', createStep2.valid());
    if(createStep2.valid()) {
        // send or save data
        $('#create-carousel').slick('slickNext');
    }
});

//step 3
const createStep3 = $('#create-step-3');
createStep3.validate({
    rules: {
        paymentType: "required",
    }
});
createStep3.on('submit', function (event) {
    event.preventDefault();
    console.log('step 3 - ', createStep3.valid());
    if(createStep3.valid()) {
        // send or save data
        $('#create-carousel').slick('slickNext');
    }
});

//step 4
const createStep4 = $('#create-step-4');
createStep4.validate({
    rules: {
        name: "required",
        socNumber: "required",
        address: "required",
        municipality: "required",
        cardName: "required",
        cardNumber: {
            required: true,
            minlength: 16,
            maxlength: 16,
            number: true
        },
        cardDay: "required",
        cardMonth: "required",
        cvc: {
            required: true,
            maxlength: 3,
            minlength: 3,
            number: true
        }
    }
});
createStep4.on('submit', function (event) {
    event.preventDefault();
    console.log('step 4 - ', createStep4.valid());
    if(createStep4.valid()) {
        // send or save data
        window.location.href = 'create-user-success.html';
    }
});