import React from 'react';
import '../index.css'
import { useState, useEffect } from 'react';

const Activity = ({name, id, onClick}) => {
    

    const removeActivity = () => {
        onClick({id});
    }
    
    return(
     <div className='saved-item' id={id}>
        <span className='item-text'>{name}</span>
        <button className='remove' onClick={removeActivity}>Remove</button>
     </div>   
    )
}

function Saved() {
    const [activities, updateActivities] = useState([]);

    const removeActivity = ({id}) => {
        fetch(`/api/remove-activity/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            } 
            const newList = activities.filter((activity) => activity.id !== id);
            updateActivities(newList);
          })
          .catch((error) => {
            console.error('Fetch error:', error);
          });
    }

    // Get saved activities
    useEffect(() => {
        const url = "/api/get-saved-activities";
      
        fetch(url, {
          method: 'GET',
          credentials: 'include',
        })
          .then((data) => data.json())
          .then((response) => {
            updateActivities(response.savedActivities);

          })
          .catch((error) => {
            console.error('Error fetching saved activities:', error);
          });
      }, []);
      


    return (
        <main id="main">
            <div className="maintitle">
                <h1>Find your saved activities here!</h1>
            </div>  
            <div className="grid-container" id="activitylist">
               {activities.map((activity) => (
                    <Activity name={activity.name} key={activity.id} id={activity.id} onClick={removeActivity}/>
               ))}
            </div>
            
        </main>
    )
}

export default Saved;