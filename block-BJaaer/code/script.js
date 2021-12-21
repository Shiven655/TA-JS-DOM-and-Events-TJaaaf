let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event){
    event.preventDefault();
    userInfo.name = form.element.name.value;
    userInfo.email = form.element.email.value;
    userInfo.movies = form.element.movies.value;
}