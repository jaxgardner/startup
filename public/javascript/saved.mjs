document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    fetch('http://localhost:4000/get-saved-activities')
        .then((response)=> {
            if(!response.ok){
                throw new Error("Network not working.");
            }
            return response.json();
        })
        .then((data) => {
            const activityList = data;
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
            })
            addRemove();
        })
        .catch((error) => {
            throw new Error(error);
        })
});


function addRemove(){
    const buttons = document.querySelectorAll(".remove");

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const activityId = button.parentElement.id;

            fetch(`http://localhost:4000/remove-activity/${activityId}`, {
                method: 'DELETE'
            })
            .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                button.parentElement.remove();
              })
              .catch((error) => {
                console.error('Fetch error:', error);
              });
        });
    }
    )}



document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const user = document.getElementById("userplace");
    
    fetch("http://localhost:4000/user/username", {
        method: "GET"
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Network not working")
        }
            return response.json();
        })
    .then((data) => {
        user.textContent = data.user;
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
})