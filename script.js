const uname = document.getElementById('username');
const passwd = document.getElementById('password');

const errormessage = document.getElementById('error'); // Fix typo here

const form = document.getElementById('form'); // Add this line to get the form element

form.addEventListener('submit', (e) => {
    let messages = [];
    if (uname.value == "" || uname.value == null) {
        messages.push('action username required')
    }
    if (passwd.value.length <= 6) {
        messages.push('passwrd should be longer than six')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errormessage.innerText = messages.join(',')
    }
});