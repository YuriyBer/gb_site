const starInput = document.querySelector(".rating__body");

starInput.addEventListener("click", (e) => {
    if (e.target.classList.contains("rating__input")) {
        console.log(e.target.value);
    }
});

const passwordInput = document.querySelector("#password");
const passwordRepeat = document.querySelector("#password-repeat");
const signForm = document.querySelector(".sign-up__form");

signForm.addEventListener("keydown", (e) => {
    if (e.target.classList.contains("psw") && e.which === 13) {
        if (passwordInput.value === passwordRepeat.value) {
            passwordInput.classList.remove("psw-error");
            passwordRepeat.classList.remove("psw-error");
            passwordInput.classList.add("psw-ok");
            passwordRepeat.classList.add("psw-ok");
        } else {
            passwordInput.classList.remove("psw-ok");
            passwordRepeat.classList.remove("psw-ok");
            passwordInput.classList.add("psw-error");
            passwordRepeat.classList.add("psw-error");
        }
    }
});