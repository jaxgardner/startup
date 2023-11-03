const express = require('express');
const app = express();

// Create new user
app.post('/signup', (req, res, next) => {
    res.send({username: 'Jaxrocs'});
})


// Login returning user
app.post('/login', (req, res) => {})


// Get current user profile
app.get('/user', (req, res) => {})


// Get saved activities
app.get('/saved', (req, res) => {})


// Get a quote from webservice
app.get('/quote', (req, res) => {})


// Update user profile info
app.patch('/user/:userId', (req, res) => {})


// Delete saved activity
app.delete('/saved/:activityId', (req, res) => {})


// Delete user account
app.delete('user/:userId', (req, res) => {})

app.use(express.static('public'));

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});