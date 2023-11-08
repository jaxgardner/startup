document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    fetch('http://localhost:8080/get-saved-activities')
        .then((response)=> {
            if(!response.ok){
                throw new Error("Network not working.");
            }
            return response.json();
        })
        .then((data) => {
            let activityList = data;
            activityList.forEach((activity) => {
                const div = document.createElement('div');
                const button = document.createElement('button');
                button.className = 'remove';
                button.innerText = 'Remove';
                const parent = document.getElementById('activitylist');
                const span = document.createElement('span');
                span.className='item-text'
                span.innerText=activity.name;
                
                div.className = "saved-item";
                div.id = activity.id;
                div.appendChild(span);
                div.appendChild(button);
            
                parent.appendChild(div);
                //uniqueId++;
            })
            addRemove();
        })
        .catch((error) => {
            throw new Error(error);
        })


    // const jsonString = localStorage.getItem("SavedActivity");
    // const data = JSON.parse(jsonString);
    // activityList = data.activities;
    // let uniqueId = 1;

    
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