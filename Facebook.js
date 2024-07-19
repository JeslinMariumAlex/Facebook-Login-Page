function submitForm() {
    let firstName = document.forms["signupForm"]["firstName"].value
    n = isNaN(firstName)
    console.log(n)
    let lastName = document.forms["signupForm"]["lastName"].value
    m = isNaN(lastName)
    console.log(m)
    let email = document.forms["signupForm"]["email"].value
    let password = document.forms["signupForm"]["password"].value
    let birthday = document.forms["signupForm"]["birthday"].value
    let gender = document.forms["signupForm"]["gender"].value
    if ((firstName == "") || (n == false)) {
        alert("Please provide your first name")
        return false
    }
    if ((lastName == "") || (m == false)) {
        alert("Please provide your last name")
        return false
    }
    if (email == "") {
        alert("Please provide a valid e-mail address")
        return false
    }
    if (email.indexOf("@", 0) < 0) {
        alert("Please provide a valid e-mail address")
        return false;
    }
    if (email.indexOf(".", 0) < 0) {
        alert("Please provide a valid e-mail address")
        return false;
    }
    if (password == "") {
        alert("Please enter the password")
        return false
    }
    if (birthday == "") {
        alert("Please enter the Date Of Birth")
        return false
    }
    if (gender == "") {
        alert("Please enter the Gender")
        return false
    }
    alert("Form submitted successfully")
}


