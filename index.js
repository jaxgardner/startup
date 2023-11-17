const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./database/dbConfig.json');

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static('public'));

function generateNumericId(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const collection = client.db('startup').collection('users');

// Endpoint to save an activity
app.post('/save-activity/:activity', async (req, res) => {
  const activity = req.params.activity; 
  const userToken = req.cookies['token'];
  if (activity) {
    const activityId = generateNumericId(4);
    const result = await collection.updateOne(
      { token: userToken },
      { $push: { savedActivities: { id: activityId, name: activity }
    }}
    );

    if(result.modifiedCount === 1) {
      res.json({ success: true, message: 'Activity saved successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Activity not provided' });
    }
  }
});

// Endpoint to retrieve saved activities
app.get('/get-saved-activities', async (req, res) => {
  const userToken = req.cookies['token'];
  const user = await collection.findOne({token: userToken});
  if(user){
    res.status(200).json({ savedActivities: user.savedActivities });
  }
});

// Endpoint to remove a saved activity
app.delete('/remove-activity/:activityId', async (req, res) => {
  const activityId = req.params.activityId; 
  const userToken = req.cookies['token'];
  if (activityId) {
    const result = await collection.updateOne(
      { token: userToken },
      { $pull: { savedActivities: { id: activityId }
    }}
    );

    if(result.modifiedCount === 1) {
      res.json({ success: true, message: 'Activity deleted successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Activity not found' });
    }
  }
});

// Delete user account
// app.delete('user/:userId', (req, res) => {})

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);
    setAuthCookie(res, user.token);
    res.status(201).send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ username: user.username });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

app.delete('/auth/logout', (_req, res) => {
  res.clearCookie('token');
  res.status(204).end();
});

function getUser(username) {
  return collection.findOne({ username: username });
}

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    username: username,
    password: passwordHash,
    savedActivities: [],
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

const port = 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});