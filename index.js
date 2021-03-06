// // node imports
const inquirer = require('inquirer');
const generatorMarkdown = require('./generateMarkdown')
const fs = require('fs');


function writeTheFile(nameOfFile, data) {
  fs.writeFile("./Demo/"+nameOfFile, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote: " + nameOfFile);
  })
}

function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeTheFile("DemoREADME.md", generatorMarkdown(data));
  })
}

// Questions for the user
const questions = [
    
      {
        type: 'input',
        message: "What is the project title?",
        name: 'Title',
      },

      {
        type: 'input', 
        message: 'Give a brief description of your project',
        name: 'Description',
      },

      {
        type: 'input',
        message: 'What do we need to do to run this app?', 
        name: 'Installation',
      },

      {
        type: 'Input', 
        message: 'What is the main purpose for this app?',
        name: 'Usage',
      },

      {
        type: 'input',
        message: 'Besides you where there any other contributors?',
        name: 'Contributor', 
      },

      {
        type: 'input',
        message: 'How can we test this app?',
        name: 'Tests',
      },

      {
        type: 'List',
        message: 'What license do you want to use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'Unlicensed'],
        name: 'License',
      },

      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Username',
      },

      {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
      },
    
    ]

    init();





