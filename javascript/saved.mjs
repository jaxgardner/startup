document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const jsonString = localStorage.getItem("SavedActivity");
    const data = JSON.parse(jsonString);
    const activityList = data.activities;

    activityList.forEach((activity) => {
        const div = document.createElement('div');
        const parent = document.getElementById('activitylist');
    
        div.className = "saved-item";
        div.innerHTML = activity;
    
        parent.appendChild(div);
    })

});

document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const user = document.getElementById("userplace");

    // Change the text of the div element immediately
    user.textContent = localStorage.getItem("username");
});