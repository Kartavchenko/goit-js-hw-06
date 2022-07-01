const formLogin = document.querySelector(".login-form")
console.log(formLogin)

const handleSubmit = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Fill in the fields")
    }
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

formLogin.addEventListener("submit", handleSubmit);