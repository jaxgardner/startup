function login(form){
    const username = form.username.value;
    localStorage.setItem("username", username);
    console.log(localStorage.getItem("username"));
}