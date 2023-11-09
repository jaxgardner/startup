

function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    
    return activities[randomIndex];
}

function getActivity() {
    const button = document.getElementById("mainbutton");
    const randomActivity = getRandomActivity();
    button.innerText = randomActivity;
    const donebutton = document.getElementById("bottombutton");
    donebutton.style.display = "inline";
    const savebutton = document.getElementById("savebutton");
    savebutton.style.display = "inline";
}

function closeActivity() {
    const button = document.getElementById("mainbutton");
    button.innerText = "Tap here";
    const donebutton = document.getElementById("bottombutton");
    donebutton.style.display = "none";
    const savebutton = document.getElementById("savebutton");
    savebutton.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const user = document.getElementById("userplace");

    fetch("http://localhost:8080/user/username", {
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

    // Change the text of the div element immediately
    user.textContent = localStorage.getItem("username");
});

function saveActivity() {
        const currentActivity = document.getElementById("mainbutton").innerText;

        fetch(`http://localhost:8080/save-activity/${currentActivity}`, {
            method: "POST"
        })
        .then((response)=> {
            if(!response.ok){
                throw new Error("Network not working.");
            }
        })
        .catch((error) => {
            throw new Error(error);
        })


    closeActivity();
}



const activities = [
    "Read a book",
    "Watch a movie",
    "Listen to music",
    "Go for a walk",
    "Try a new recipe",
    "Solve a puzzle",
    "Paint or draw",
    "Learn a new language",
    "Write in a journal",
    "Do yoga",
    "Play a board game",
    "Visit a museum",
    "Organize your closet",
    "Call a friend",
    "Start a blog",
    "Try a new workout",
    "Garden",
    "Meditate",
    "Watch TED talks",
    "Take photos",
    "Try a DIY project",
    "Plan a trip",
    "Play a musical instrument",
    "Bake cookies",
    "Watch documentaries",
    "Go for a bike ride",
    "Practice mindfulness",
    "Learn to juggle",
    "Visit an art gallery",
    "Volunteer",
    "Create a vision board",
    "Do a crossword puzzle",
    "Play card games",
    "Listen to a podcast",
    "Try origami",
    "Take up knitting or crochet",
    "Watch stand-up comedy",
    "Do a home workout",
    "Explore a nearby park",
    "Learn to code",
    "Have a picnic",
    "Explore local trails",
    "Visit a botanical garden",
    "Take a scenic drive",
    "Try a new hairstyle",
    "Write poetry",
    "Do a nature scavenger hunt",
    "Practice a musical scale",
    "Make homemade ice cream",
    "Attend a virtual event",
    "Take online quizzes",
    "Write short stories",
    "Have a spa day at home",
    "Try geocaching",
    "Watch cooking tutorials",
    "Visit a historical site",
    "Create a scrapbook",
    "Learn calligraphy",
    "Watch the sunset or sunrise",
    "Experiment with makeup",
    "Learn to sew",
    "Try birdwatching",
    "Build a puzzle",
    "Visit a zoo",
    "Play charades",
    "Learn magic tricks",
    "Start a book club",
    "Try indoor rock climbing",
    "Do a science experiment",
    "Explore your city like a tourist",
    "Attend a virtual concert",
    "Create a vision board",
    "Take a bubble bath",
    "Practice deep breathing",
    "Try pottery",
    "Plan your dream home",
    "Explore a nearby town",
    "Learn to dance",
    "Try a new restaurant",
    "Play chess",
    "Do a home spa day",
    "Learn photography",
    "Watch a live stream",
    "Start a home improvement project",
    "Have a themed movie night",
    "Play video games",
    "Create a playlist",
    "Try geology",
    "Learn astronomy",
    "Write a letter",
    "Try a new cocktail recipe",
    "Play a sport",
    "Have a fashion show with your wardrobe",
    "Learn about a historical event",
    "Try indoor mini-golf",
    "Take a virtual tour of a museum",
    "Try pilates",
    "Write a song",
    "Make a time capsule",
    "Have a picnic in your backyard",
    "Try calligraphy",
    "Experiment with nail art",
    "Take up archery",
    "Watch travel vlogs",
    "Do a home science experiment",
    "Start a collection",
    "Learn about constellations",
    "Play a trivia game",
    "Try paper mache",
    "Attend a virtual workshop",
    "Learn to make jewelry",
    "Try glassblowing",
    "Practice hula hooping",
    "Have a spa night with friends",
    "Learn about a new culture",
    "Try watercolor painting",
    "Start a gratitude journal",
    "Explore a new cuisine",
    "Play frisbee",
    "Try indoor skydiving",
    "Write a bucket list",
    "Have a karaoke night",
    "Learn about philosophy",
    "Try a new hairstyle tutorial",
    "Play hide and seek",
    "Explore a nearby beach",
    "Try stargazing",
    "Build a model airplane",
    "Have a themed costume party",
    "Try indoor go-karting",
    "Learn about quantum physics",
    "Play darts",
    "Experiment with a new fashion style",
    "Try glass painting",
    "Have a talent show",
    "Learn about world geography",
    "Try ice skating",
    "Have a comedy night with friends",
    "Learn about environmental conservation",
    "Try candle making",
    "Play laser tag",
    "Experiment with makeup effects",
    "Have a poetry slam",
    "Learn about art history",
    "Try indoor trampoline jumping",
    "Create a comic book",
    "Have a themed photo shoot",
    "Learn about ancient civilizations",
    "Try fencing"
  ];

