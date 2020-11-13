const btn = document.getElementById('check-rule');
const check = document.getElementById('check');

if(btn) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log();
        if(check.checked) {
            window.location.href = '/signup-notification.html';
        } else {
            btn.previousSibling.previousElementSibling.classList.add('error');
        }
    });
}