import throttle from "lodash.throttle";

const LOCAL_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const { email, message } = form.elements;
let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

form.addEventListener("input", throttle(onInputData, 500));
form.addEventListener("submit", onFormSubmit);

refillPage();

function onInputData(evt) {
    dataForm = { ...dataForm, email: email.value, message: message.value };
    saveDataToLocalStorage();
}

function saveDataToLocalStorage() {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function refillPage() {
    email.value = dataForm.email || "";
    message.value = dataForm.message || "";
}

function onFormSubmit(evt) {
    evt.preventDefault();

    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log({ email: email.value, message: message.value });

    clearFormAndLocalStorage();
}

function clearFormAndLocalStorage() {
    localStorage.removeItem(LOCAL_KEY);
    form.reset();
    dataForm = {};
}
