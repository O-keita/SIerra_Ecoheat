function sendEmail(event) {
  event.preventDefault();
  let params = {
    subject: document.getElementById("subject").value,
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    email: document.getElementById("email").value,
  };
  emailjs
    .send("service_51jen67", "template_jgy7rga", params)
    .then(function (response) {
      console.log("Success:", response);
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    });
}
