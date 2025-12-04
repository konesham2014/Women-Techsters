let posts = JSON.parse(localStorage.getItem("tm_posts") || "[]");

const postsDiv = document.getElementById("posts");

function render() {
    postsDiv.innerHTML = posts.map(
        p => `<div class="post">${p}</div>`
    ).join("");
}

render();

document.getElementById("post-btn").onclick = () => {
    const input = document.getElementById("post-input");
    if (!input.value.trim()) return;

    posts.unshift(input.value.trim());
    input.value = "";

    localStorage.setItem("tm_posts", JSON.stringify(posts));
    render();
};
