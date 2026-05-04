document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("registration-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var ime = document.getElementById("ime").value.trim();
        var email = document.getElementById("email").value.trim();
        var fakultet = document.getElementById("fakultet").value.trim();
        var poruka = document.getElementById("poruka").value.trim();
        var message = document.getElementById("form-message");

        if (!ime || !email || !fakultet) {
            message.textContent = "Molimo ispunite obavezna polja.";
            return;
        }

        message.textContent = "Prijava je uspješno poslana. Hvala na prijavi!";
        form.reset();
    });
});
