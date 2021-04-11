// window.addEventListener("load", getData);

function getData() {
  fetch("https://keafs-8b71.restdb.io/rest/posts?max=5&sort=_created&dir=-1", {
    method: "GET",
    headers: {
      "x-apikey": "602e39f15ad3610fb5bb62c6",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showPosts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

getData();

function showPosts(posts) {
  // console.log(posts);

  //grab template
  const template = document.querySelector("template#frontpagepost").content;
  posts.forEach((post) => {
    console.log(post);
    //clone
    const copy = template.cloneNode(true);

    //adjust stuff
    copy.querySelector(".post_title").textContent = post.title;
    copy.querySelector(".username span").textContent = post.username;
    copy.querySelector(".post_date span").textContent = post._created;
    copy.querySelector("a").href = `full-post.html?id=${post._id}`;
    //append
    document.querySelector("main").appendChild(copy);
  });
}
