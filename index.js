let quotesDiv = document.getElementById('quotes');
    fetch('http://api.kanye.rest')
    .then(response => response.json())
    .then(quote => {
        quotesDiv.innerHTML += '<p> ${quote.quote}</p>'
    })
    .catch(error => console.log(error))


let catButton = document.getElementById('give-cat')

catButton.addEventListener("click", evt => {
    let loader = `<div class="lds-facebook"><div></div><div></div><div></div></div>`;
    document.getElementById('cat-pic').innerHTML = loader;

    let catDiv = document.getElementById('cat-pic')

    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(response => response.json())
    .then(cats => {
        cats.forEach(cat => {
        catDiv.innerHTML = `<h3> Here Cat</h3>
        <img src="${cat.url}" alt="cat" class="center"/>`});
    })
})
let registerbutton = document.getElementById("btnRegister").addEventListener(
    "click" , function(evt){
        evt.preventDefault();

        var name = document.getElementById("Username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var formData = {
            name: name,
            email: email,
            password: password
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3333/register", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // การดำเนินการหลังจากส่งข้อมูลสำเร็จ
                console.log(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify(formData));
    })


const wrapper = document.querySelector('.wrapper');
const wrapperp = document.querySelector('.wrapperp');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const iconClosep = document.querySelector('.icon-closep');
const cat_pic = document.querySelector('.cat-pic');

cat_pic.addEventListener('click', ()=>{
    wrapperp.classList.add('active-popup');
})

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', function () {
        wrapper.classList.remove('active');
    });


btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');

});
iconClosep.addEventListener('click', () => {
    wrapperp.classList.remove('active-popup');

});






/*
// http://localhost:3000/auth
app.post('/auth', function (request, response) {
    // Capture the input fields
    let username = request.body.username;
    let password = request.body.password;
    // Ensure the input fields exists and are not empty
    if (username && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                // Authenticate the user
                request.session.loggedin = true;
                request.session.username = username;
                // Redirect to home page
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});*/

/*con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});*/