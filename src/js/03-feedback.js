

import throttle from "lodash.throttle";

const LOCAL_KEY = "feedback-form-state";

form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onInputData, 500));
form.addEventListener("submit", onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
refillPage();

function onInputData(evt) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function refillPage() {
    if (dataForm) {
        email.value = dataForm.email || "";
        message.value = dataForm.message || "";
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });

    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
    }

    localStorage.removeItem(LOCAL_KEY);
    evt.target.reset();
    dataForm = {};
}

