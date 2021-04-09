const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
fetch("https://keafs-8b71.restdb.io/rest/posts/" + id + "?fetchchildren=true", {
  method: "GET",
  headers: {
    "x-apikey": "602e39f15ad3610fb5bb62c6",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });

// fetch the data
// fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => showPost(data));

// populate the page

function showPost(post) {
  console.log(post.comments);
  document.querySelector(".full_post h2").textContent = post.title;
  document.querySelector(".full_post h3 span").textContent = post.username;
  document.querySelector(".full_post p").textContent = post.content;
  //comments:
  //grab template
  const template = document.querySelector(".comment_template").content;
  // //loop through
  post.comments.forEach((comment) => {
    console.log(comment);

    // //clone it
    const clone = template.cloneNode(true);
    // //change content
    clone.querySelector("h5 span:first-of-type").textContent = comment.username;
    clone.querySelector("h5 span:last-of-type").textContent = comment._created;
    clone.querySelector("p").textContent = comment.content;
    // //grab parent
    const parent = document.querySelector(".previous_comments");
    // //append
    parent.appendChild(clone);
  });
  //if no comments
  if (post.comments.length === 0) {
    document.querySelector("aside.hidden").classList.remove("hidden");
  }
}

//LEAVING COMMENTS
