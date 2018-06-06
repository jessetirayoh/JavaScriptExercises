var objUser = {
    username: "jesse",
    password: "secret"
};

var database = [
    objUser
];

var newsfeed = [
    {
        username: "David",
        timeline: "What is going on?"
    },
    {
        username: "Raymond",
        timeline: "I'm still learning JavaScript"
    },
    {
        username: "Gaby",
        timeline: "JavaScript is dope"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(username, password) {
    if (username === database[0].username && 
        password === database[0].password)  {
            console.log(newsfeed);
        } else  {
            alert("Sorry, wrong username and password!");
        }
};

signIn(userNamePrompt, passwordPrompt);