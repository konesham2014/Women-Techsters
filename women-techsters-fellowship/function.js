const GIVE_AWAY = {
    balance: 0,
    currency: 
}

const AMOUNT_TO_GIVE 0= 10000
const user = {
    name: "Sen Mok",
    balance: 0,
    email: 'sen@gmail.com',
    currency: "EUR",+
    password: "1234"
}

/*const user2 = {
    name: "Hil Mul",
    balance: 0,
    email: 'hilm@gmail.com',
    password: "4321"
}*/

const loginEmail = prompt("Enter your email address")
//console.log(loginEmail, 'This is email from user')
const loginPassword = prompt("Enter your login password")
//console.log(loginPassword, 'my password')

if (user.email === loginEmail && user.password == loginPassword ) { // || means this or that || user2.email === loginEmail
    //console.log("Email is correct.")
    console.log("Welcome", user.name)
    user.balance = user.balance = AMOUNT_TO_GIVE
    //console.log(user)
}else {
    //console.log("Email is incorrect.")
    console.log("Invalid password/email. Please try again.")
}