/* 1. load User Start */
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const userList = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li')
        li.classList.add('list')
        li.innerText = user.name;
        userList.appendChild(li);
    }
}
/* 1. load User End */




/* 2. Button Handler Start */
document.getElementById('load-user').addEventListener('click', function () {
    loadUser();

})
/* 2. Button Handler End */







function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
};


function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};



function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


document.getElementById('go-to-posts').addEventListener('click', function () {
    window.location.href = 'posts.html';
})