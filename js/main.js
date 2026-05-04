document.addEventListener("DOMContentLoaded", function () {
    // Filter izvođača
    var filterBtns = document.querySelectorAll(".filter-btn");
    var artistCards = document.querySelectorAll(".artist-card");

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var filter = btn.getAttribute("data-filter");

            filterBtns.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");

            artistCards.forEach(function (card) {
                if (filter === "svi" || card.getAttribute("data-genre") === filter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // Forma za prijavu
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
