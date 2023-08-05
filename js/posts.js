function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(data) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of data) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('posts')
        createDiv.innerHTML = `
        <h4><span class="span2">User Id :</span> ${post.id}</h4>
        <h3><span class="span1">Title : </span>${post.title}</h3>
        <p><span>Drescription :</span> ${post.body}</p>
        `
        postsContainer.appendChild(createDiv)
    }
}

document.getElementById('go-to-index').addEventListener('click', function () {
    window.location.href = 'index.html';
})


