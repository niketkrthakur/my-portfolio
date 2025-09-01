var form = document.getElementById("contactForm");
var status = document.getElementById("formMessage");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      status.className = "success";
      status.innerHTML = "✅ Thanks! Your message has been sent.";
      form.reset();
    } else {
      response.json().then(data => {
        status.className = "error";
        status.innerHTML = data.errors
          ? data.errors.map(err => err.message).join(", ")
          : "❌ Oops! Something went wrong.";
      });
    }
  }).catch(() => {
    status.className = "error";
    status.innerHTML = "❌ Network error. Please try again later.";
  });
}

form.addEventListener("submit", handleSubmit);
