/*
Sign in
 */

$('#sign-in').on('submit', function (event) {
   event.preventDefault();
});

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
    messages: {
        name: 'Reiturinn er nauðsynlegur',
        email: {
            required: 'Reiturinn er nauðsynlegur'
        },
        password: {}
    }
});