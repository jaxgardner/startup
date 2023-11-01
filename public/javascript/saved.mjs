document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const jsonString = localStorage.getItem("SavedActivity");
    const data = JSON.parse(jsonString);
    const activityList = data.activities;
    let uniqueId = 1;

    activityList.forEach((activity) => {
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.className = 'remove';
        button.innerText = 'Remove';
        const parent = document.getElementById('activitylist');
        const span = document.createElement('span');
        span.className='item-text'
        span.innerText=activity;
        
        div.className = "saved-item";
        div.id = uniqueId;
        div.appendChild(span);
        div.appendChild(button);
    
        parent.appendChild(div);
        uniqueId++;
    })
    addRemove();
});


function addRemove(){
    const buttons = document.querySelectorAll(".remove");

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const activity = button.parentElement.querySelector('.item-text').textContent;
            
            const jsonString = localStorage.getItem("SavedActivity");
            const data = JSON.parse(jsonString);
            const activityList = data.activities;

            const index = activityList.indexOf(activity);
            activityList.splice(index, 1);

            data.activities = activityList;
            
            const updatedList = JSON.stringify(data);

            localStorage.setItem("SavedActivity", updatedList);

            button.parentElement.remove();
        });
    }
    )}



document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const user = document.getElementById("userplace");

    // Change the text of the div element immediately
    user.textContent = localStorage.getItem("username");
});