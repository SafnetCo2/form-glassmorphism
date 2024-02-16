document.getElementById('form').addEventListener('submit', (e) => {
    //prevent not to submit
    e.preventDefault()
})
//clear message
document.getElementById('errorMessage').innerHTML = "";
//retrieve forms fieeld
const username = document.getElementById('username')
const lname = document.getElementById('lname');
const email = document.getElementById('email'
)
const passwd = document.getElementById('password');
const errorm = document.getElementById('errorMessage')

//validate
if (username.trim == "") {
    errorm('action username reguored')
}
if (passwd.length < 6) {
    errorm
}




