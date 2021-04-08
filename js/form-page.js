const form = document.querySelector("form");

// form.elements.username.focus();
form.addEventListener("submit", postSubmitted);

function postSubmitted(e) {
  e.preventDefault();
  console.log(form.elements.username.value);
  console.log(form.elements.title.value);
  console.log(form.elements.content.value);

  const payload = {
    username: form.elements.username.value,
    title: form.elements.title.value,
    content: form.elements.content.value,
  };
  // change input to disabled (while sending post)
  document.querySelector("input[type=submit]").disabled = true;
  //   fetch request
  fetch("https://keafs-8b71.restdb.io/rest/posts", {
    method: "POST",
    headers: {
      "x-apikey": "602e39f15ad3610fb5bb62c6",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      //   change input to enabled (when submitted to database)
      document.querySelector("input[type=submit]").disabled = false;
      //   clear form values
      form.elements.username.value = "";
      form.elements.title.value = "";
      form.elements.content.value = "";
      //   show feedback
      document.querySelector("#feedback").classList.remove("hidden");
    })
    .catch((err) => {
      console.error(err);
    });
}
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(form.elements.username.value);
//   console.log(form.elements.title.value);
//   console.log(form.elements.content.value);
//   document.querySelector("input[type=submit]").disabled = true;
// });
