import React from 'react';
import { useState } from 'react'
import activities from '../modules/activities';
import '../index.css'

function HomeMain() {
    const [activity, changeActivity] = useState('Tap Here');
    const [showDoneButton, setDoneButton] = useState(false);

    function getRandomActivity() {
        const randomIndex = Math.floor(Math.random() * activities.length);
        
        return activities[randomIndex];
    }

    function getActivity() {
        const newActivity = getRandomActivity();
        changeActivity(newActivity);
        setDoneButton(true);
    }

    function closeActivity(){
        changeActivity("Tap Here");
        setDoneButton(false);
    };

    async function saveActivity() {
        try {
            const response = await fetch(`/api/save-activity/${activity}`, {
            method: 'POST',
            credentials: 'include'
          });
      
          if (!response.ok) {
            throw new Error('Network not working.');
          }
      
          // If fetch is successful, close the activity
          closeActivity();
        } catch (error) {
          console.error('Error:', error);
          // Handle error as needed
        }
      }


    return (
        <main id="main">
            <div className="maintitle">
                <h1>Feeling Bored?</h1>
            </div>
            
            <div className="activitybutton">
                <button onClick={getActivity} id="mainbutton">{activity}</button>
            </div>
            <div className="donebutton">
                {showDoneButton && (
                <>
                    <button onClick={closeActivity} id="bottombutton">
                    Close
                    </button>
                    <button onClick={saveActivity} id="savebutton">
                    Save
                    </button>
                </>
                )}
            </div>
        </main>
    )
}

function Home() {

    return (
       <HomeMain/>
    )
}

export default Home;




