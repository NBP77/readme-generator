// node imports
const inquirer = require('inquirer');
const fs = require('fs');

// Questions for the user
inquirer.prompt()
    [
      {
        type: 'input',
        message= "Whats the project name?",
        name: 'Title',
        validate
      }
    ]















































// // console.log("Hello World");

// console.log(process.argv);

// console.log(process.argv[2]);






// const inquirer = require("inquirer");
// const fs = require("fs");
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "username",
//     },
//         {
//       type: "checkbox",
//       message: "What languages do you know?",
//       name: "foreignLanguages",
//             choices: ["Spanish", "German", "French", "ASL"]
//     },
//         {
//       type: "list",
//       message: "What is your preferred method of communication?",
//             name: "contact",
//       choices: ["text", "call", "DM", "carrier pigeon"]
//     },
  // ])

  // .then((response) => {
  //   console.log(response);
  //       // console.log("-----------------------------------------");
  //       // console.log(response.username);
  //       // console.log(response.foreignLanguages[2]);
  //       // console.log(response.contact);
  //       const filename = `${response.username.toLowerCase().split(" ").join("")}.json`
  //       // const filename = response.username + ".json"
  //       fs.appendFile(filename, JSON.stringify(response, null, '\t'), (err) =>
  //       err ? console.error(err) : console.log("created file successfully")
  //       )
  // });

// // music should be an object with title, artist, and album properties
// const music = {
//   title: "Icey",
//   artist: "Young Thug",
//   album: "On the RVN"
//   // code here
// };

// // Write code between the <div> tags to output the data from the music object above.
// // Use an h2 element for the title and a p element for artist and title
// const songSnippet = `<div class="song">
// <h1> Song title is: ${music.title}<h1>
// <h2> The artist is: ${music.artist}<h2> 
// <h3> The album is: "${music.album}"<h3>
// </div>`;

// const element = document.getElementById("music");
// element.innerHTML = songSnippet;

// // musicStyle = document.querySelector("music");
// document.querySelector("music").style.color = "green";


// // const greeting = `My name is ${arya.first}!
// // I am loyal to ${arya.allegiance}.
// // I come from ${arya.origin}!`;