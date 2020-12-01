/*
Sign in
 */

$('#sign-in').validate({
    rules: {
        name: {
            required: true
        },
        password: {
            required: true
        }
    },
    messages: {
      name: 'Rangt netfang eða lykilorð',
      password: 'Rangt netfang eða lykilorð'
    },
    invalidHandler: function(event, validator) {
        console.log(event, validator);
    },
    submitHandler: function(form) {
        form.submit();
    },
});

/*
Sign up
 */

$('#sign-up').validate({
    rules: {
        name: {
            required: true
        },
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
        agree: {
            required: true
        }
    },
    submitHandler: function(form) {
        form.submit();
    },
});

/*
Create user
 */
$('#create-user').validate({
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
        package: "required",
        paymentType: "required",
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
    },
    submitHandler: function(form) {
        form.submit();
    },
});