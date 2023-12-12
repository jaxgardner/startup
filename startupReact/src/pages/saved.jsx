import React from 'react';
import '../index.css'
import { useState, useEffect } from 'react';

const Activity = ({name}) => {
    return(
     <div className='saved-item'>
        <span className='item-text'>{name}</span>
        <button className='remove'>Remove</button>
     </div>   
    )
}

function Saved() {
    const [activities, updateActivities] = useState([]);

    // Get saved activities
    useEffect(() => {
        const url = "http://localhost:4000/get-saved-activities";
      
        fetch(url, {
          method: 'GET',
          credentials: 'include',
        })
          .then((data) => data.json())
          .then((response) => {
            console.log(response.savedActivities);
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
                    <Activity name={activity.name} key={activity.id}/>
               ))}
            </div>
            
        </main>
    )
}

export default Saved;