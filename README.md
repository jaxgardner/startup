# Bored
This is my startup project for cs260! The website is called **Bored**.

## Elevator Pitch
Have you ever been sitting around doing nothing? How does that feel? Boring? We know it's hard sometimes to find something to do and that's why we're creating the website Bored. Whenever you want to find an activity to do head over to Bored where you can find 100's of activities to make life interesting. Stop wasting time scrolling on social media or watching television, learn to live life. At Bored life will be most interesting once again. 

## Key Features
- Intuitive UI for easy navigation throughout the website
- Ability to store completed activites so you can remember them when feeling bored again
- Chat with other community members to learn how they spend their time
- Specific ideas for specific categories such as service, dating, going outside, or new hobbies
- Secured through https

## Design
Section 1
![Section 1](https://github.com/jaxgardner/startup/assets/140025555/e3e9e698-f322-45ac-b7bf-0af121c4f7e2)

Section 2
![Section 1 (1)](https://github.com/jaxgardner/startup/assets/140025555/e7a13e3b-d4ff-4163-8e5d-901c6d4db6a1)

Section 3
![Section 1 (2)](https://github.com/jaxgardner/startup/assets/140025555/c645796d-28bc-48df-b951-b7c0743a5ec2)

Section 4
![Section 1 (3)](https://github.com/jaxgardner/startup/assets/140025555/375a4f5e-5b4e-401a-b3ef-a527fe2c4789)


## Technology Use
### HTML
- Used to design the basic layout and structure of the website
- Provides good spacing and allows for good structure on any screen
### CSS
- Used to style the website making for an good looking UI
- Used for a good orange/white color theme
- Will look simple but sleek in design
### Javascript
- Used to make the website interactive and easy to use
- Used to connect to backend services
- Used to display the different activites
- Can show lists of activities and allow users to tap through them
- Generates new activities
### Web services
- Will use a web service to generate the different ideas or hobbies to do
- May use a web service as well to generate instructions/images for each activity making the website even more useful
### Authentication
- Allow the user to login with an username/password
- Stored on database
- By having users data can be saved and used whenver logging in making for a more personalized experience
- Cannot save activities unless logged in
### Database Data
- Store the username and password of the users
- Store the past activites completed so users can always refer back to the ones they like
- Data will be showed in the list page of the website
### Websocket Data
- There will be a realtime chat were current users can chat with others about ways to pass the time
- This could include suggestions or instructions from others
- Websocket data will be the message and username of others


# Notes
## HTML Production
- In this release I added the html structure for all of the possible pages of the application.
- There may be future pages added but these are the starters.
- I added placeholders for each of the technologies in the form of pictures. In the future they will be replaced with the actual code renditions.
- It includes a login page, Home page with the main tapping function to get a new activity, a chat page with placeholders for the chat, and a saved page that shows saved activities in order to remember them. There is also a menu page at the top with links to each of the pages. At the bottom is the login screen.
- 

## CSS Production
- I added styling for all the pages, it's an orange/blue based theme
- The login, home, chat, and saved screen all have the appropiate styling.
- The pages are all responsive to styling except for when really small then it stops working.
- It needs work for when adding cards from the database right now there is just a space for where they will go.
- Added a Google font from their webservice to give it a more complete look
- The footer is at the bottom of every page, it is not a sticky footer.
- The header includes the navigation menu for the website.
- The buttons resize according to the size. I would like the main one to be slightly more responsive because it only has 2 sizes, but in the future.

## JS Production
- I added JS for the button to change activities when it's clicked.
- I added JS to save the activity when the button is clicked.
- It can also clear the button when the done button is pressed.
- In the chat page future support for web socket support was added. You can add fake messages.
- In the Saved page it displays saved activities from local storage.
- The login page submits your username to the rest of the website allowing for future support of login abilities.

