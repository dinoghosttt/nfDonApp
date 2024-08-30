// Toggle navigation menu
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
});

// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const otherAmountRadio = document.querySelector('input[value="other"]');
    const customAmountInput = document.getElementById("customAmount");
    const amountRadios = document.querySelectorAll('input[name="castka"]');
    const submitButton = document.getElementById("submitButton");

    // Handle showing the custom amount input
    otherAmountRadio.addEventListener("change", function() {
        customAmountInput.style.display = "block";
        customAmountInput.focus();
    });

    // Handle changing the amount and updating the button text
    amountRadios.forEach(radio => {
        radio.addEventListener("change", function() {
            if (this.value !== "other") {
                customAmountInput.style.display = "none";
                submitButton.textContent = `Přispět ${this.value} Kč`;
            } else {
                customAmountInput.style.display = "block";
                customAmountInput.addEventListener("input", function() {
                    submitButton.textContent = `Přispět ${customAmountInput.value} Kč`;
                });
            }
        });
    });

    // Handle showing/hiding the confirmation details based on the checkbox
    const potvrzeniCheckbox = document.getElementById('potvrzeni');
    const udajepotvrzeni = document.querySelector('.udajepotvrzeni');

    potvrzeniCheckbox.addEventListener('change', function() {
        if (this.checked) {
            udajepotvrzeni.style.display = 'block';
        } else {
            udajepotvrzeni.style.display = 'none';
        }
    });
});

$(function() {
    $('#datepicker').datepicker();
});