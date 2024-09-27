const contactForm = document.getElementById("contactForm");
const formInputs = contactForm.querySelectorAll("input, textarea"); 

// Stop keydown events from propagating to the document when input fields are focused,
// avoid being displayed in shell div.
formInputs.forEach((input) => {
  input.addEventListener("keydown", function (event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
  });
});

function hideContactForm() {
  const contactForm = document.getElementById("contactForm");
  contactForm.style.display = "none"; // Hide the contact form
}

function showContactForm() {
    contactForm.style.display = "block";
  }
  
  const form = document.getElementById("form");
  const successMessage = document.querySelector(".success-message");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    form.style.display = "none";
    successMessage.style.display = "block";
  
    // After 5 seconds, hide success message and reset the form
    setTimeout(function () {
      const contactForm = document.getElementById("contactForm");
      contactForm.style.display = "none";
      form.style.display = "block";
      successMessage.style.display = "none";
      form.reset();
    }, 5000);
  });
  