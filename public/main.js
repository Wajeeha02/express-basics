const output = document.querySelector("#output");

const button = document.querySelector("#button");

async function showPosts() {
    try{
        const res = await fetch("http://localhost:8000/api/posts");
        if (!res.ok) {
          throw new Error("failed to fetch");
        }
        const posts = await res.json();
        output.innerHTML = "";
        posts.forEach((post) => {
          const postEl = document.createElement("div");
          postEl.text = post.title;
          output.appendChild(postEl);
        });
    }catch(error){
        console.log('error fetching')
    }

}

button.addEventListener('click',showPosts);
