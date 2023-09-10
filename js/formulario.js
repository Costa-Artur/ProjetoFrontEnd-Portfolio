class FormSubmit {
    constructor(configs) {
        this.configs = configs;
        this.form = document.querySelector(configs.form);
        this.formButton = document.querySelector(configs.button);
        if(this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySnackbar(message, isSuccess) {
        const snackbar = document.querySelector(".snackbar");
        const snackbarMessage = document.querySelector("#snackbar-message");

        snackbarMessage.innerHTML = message;

        if(isSuccess) {
            snackbar.classList.add("success");
        } else {
            snackbar.classList.add("error")
        }

        snackbar.style.transform = "translateX(0)";

        setTimeout(() => {
            snackbar.style.transform = "translateX(100%)";
            snackbar.classList.remove("success", "error");
          }, 3000);
    }   

    displaySuccess() {
        this.displaySnackbar("Não foi possível enviar a mensagem.", false);
        setTimeout(() => {
            this.formButton.innerHTML = "ENVIAR";
            this.formButton.classList.remove("success");
            this.formButton.classList.remove("disabled");
        }, 3000);
        
    }

    displayError () {
        this.displaySnackbar("Não foi possível enviar a mensagem.", false);
        setTimeout(() => {
            this.formButton.innerHTML = "ENVIAR";
            this.formButton.classList.remove("error");
            this.formButton.classList.remove("disabled");
        }, 3000);
    }

    getFormObject () {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;

            if(field.value === "") {
                formObject["isEmpty"] = true;
            }
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.classList.add("disabled");
        event.target.innerText = "Enviando..."
    }

    async sendForm (event) {
        try{
            this.onSubmission(event);

            const formObject = this.getFormObject();

            if(formObject === null || formObject.isEmpty) {
                this.displayError();
                return;
            }

            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formObject),
            });
            this.displaySuccess();
        }
        catch (error) {
            this.displayError();
            console.log(error)
        }
    }

    init() {
        if(this.form) this.formButton.addEventListener("click", this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem</h1>",
});

formSubmit.init();