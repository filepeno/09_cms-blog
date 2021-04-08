const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = "https://keafs-8b71.restdb.io/rest/posts/" + id;

const options = {
  headers: {
    "x-apikey": "602e39f15ad3610fb5bb62c6",
  },
};

// fetch the data
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showPost(data));

// populate the page
function showPost(post) {
  console.log(post);
  document.querySelector(".full_post h2").textContent = post.title;
  document.querySelector(".full_post h3 span").textContent = post.username;
  document.querySelector(".full_post p").textContent = post.content;
}
