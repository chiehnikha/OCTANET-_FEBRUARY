document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});