const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let savedActivities = [{id: 1, name: "run"}, {id: 2, name: "cook"}, {id: 3, name: "dance"}];

// Endpoint to save an activity
app.post('/save-activity', (req, res) => {
  const activity = req.body.activity; // Assuming 'activity' is sent in the request body
  if (activity) {
    // Generate a unique ID for the activity (you can use a library like 'uuid')
    const activityId = generateUniqueId();
    savedActivities.push({ id: activityId, name: activity });
    res.json({ success: true, message: 'Activity saved successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Activity not provided' });
  }
});

// Endpoint to retrieve saved activities
app.get('/get-saved-activities', (req, res) => {
  res.json(savedActivities);
});

// Endpoint to remove a saved activity
app.delete('/remove-activity/:activityId', (req, res) => {
  const activityId = req.params.activityId;
  const index = savedActivities.findIndex((activity) => activity.id === activityId);

  if (index !== -1) {
    savedActivities.splice(index, 1);
    res.json({ success: true, message: 'Activity removed successfully' });
  } else {
    res.status(404).json({ success: false, message: 'Activity not found' });
  }
});


// Delete user account
app.delete('user/:userId', (req, res) => {})

app.use(express.static('public'));

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});