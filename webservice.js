const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let savedActivities = [];

let username = "Not logged in";

function generateNumericId(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Endpoint to save an activity
app.post('/save-activity/:activity', (req, res) => {
  const activity = req.params.activity; 
  if (activity) {
    const activityId = generateNumericId(4);
    savedActivities.push({ id: activityId, name: activity });
    res.json({ success: true, message: 'Activity saved successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Activity not provided' });
  }
});

// Endpoint to save username
app.post('/login/:username', (req, res) => {
  const usr = req.params.username; 
  if (usr) {
    username = usr;
    res.json({ success: true, message: 'Username saved successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Username not provided' });
  }
});

// Endpoint to retrieve saved activities
app.get('/get-saved-activities', (req, res) => {
  res.json(savedActivities);
  res.end();
});

// Endpoint to get username
app.get('/user/username', (req, res) => {
  res.json({user: username});
  res.end();
})

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

const port = 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});