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
        name: "required",
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
// createStep1.on('submit', function (event) {
//     event.preventDefault();
//     console.log('step 1 - ', createStep1.valid());
//     if(createStep1.valid()) {
//         // send or save data
//         $('#create-carousel').slick('slickNext');
//     }
// });

//step 2
const createStep2 = $('#create-step-2');
createStep2.validate({
    rules: {
        package: "required",
    }
});
// createStep2.on('submit', function (event) {
//     event.preventDefault();
//     console.log('step 2 - ', createStep2.valid());
//     if(createStep2.valid()) {
//         // send or save data
//         $('#create-carousel').slick('slickNext');
//     }
// });

//step 3
const createStep3 = $('#create-step-3');
createStep3.validate({
    rules: {
        paymentType: "required",
    }
});
// createStep3.on('submit', function (event) {
//     event.preventDefault();
//     console.log('step 3 - ', createStep3.valid());
//     if(createStep3.valid()) {
//         // send or save data
//         $('#create-carousel').slick('slickNext');
//     }
// });

//step 4
const createStep4 = $('#create-step-4');
createStep4.validate({
    rules: {
        fullName: "required",
        social: {
            required: true,
            number: true
        },
        address: "required",
        postCode: {
            required: true,
            number: true
        },
        nameOnCard: "required",
        numberCard: {
            required: true,
            minlength: 16,
            maxlength: 16,
            number: true
        },
        periodCardMonth: "required",
        periodCardYear: "required",
        cvc: {
            required: true,
            maxlength: 3,
            minlength: 3,
            number: true
        }
    }
});
// createStep4.on('submit', function (event) {
//     event.preventDefault();
//     console.log('step 4 - ', createStep4.valid());
//     if(createStep4.valid()) {
//         // send or save data
//         window.location.href = 'create-user-success.html';
//     }
// });

/*
User data
 */
const userDataForm = $('#user-data');
userDataForm.validate({
    rules: {
        name: 'required',
        email: 'required',
        currentPassword: {
            required: true
        },
        newPassword: {
            required: true,
            minlength: 8,
        },
        confirmNewPassword: {
            required: true,
            minlength: 8,
            equalTo: '#userNewPassword'
        }
    },
    messages: {
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    },
});

userDataForm.on('submit', function (event) {
    event.preventDefault();
    console.log('user data valid - ', userDataForm.valid());
    console.log($(this).serializeArray());
    if(createStep4.valid()) {
        // send or save data
    }
});