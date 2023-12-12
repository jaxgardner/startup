import React from 'react';
import '../index.css'
import { useState } from 'react';

function Saved() {
    const [activities, updateActivities] = useState([]);

    return (
        <main id="main">
            <div className="maintitle">
                <h1>Find your saved activities here!</h1>
            </div>  
            <div className="grid-container" id="activitylist">
               
            </div>
            
        </main>
    )
}

export default Saved;