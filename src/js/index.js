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