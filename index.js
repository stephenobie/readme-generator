
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const readme = require("./utils/readme");
const writeFile = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Project title must be atleast one character long!");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Briefly describe what your project is.',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Description must be atleast one character long!");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'What is the installation process if any?',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Installation must be atleast one character long!");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Project usage must be atleast one character long!");
            }
            return true;
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose the licenses needed for this project.',
        choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open",],
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who will be contributing to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Will a test be included?',
      },
      {
        type: 'input',
        name: 'image',
        message: 'What is the relative-path of your image?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'What do I do if I have an issue?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("Username must be atleast one character long!");
            }
            return true;
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email:?',
        validate: function (response) {
            if (response.length < 1) {
                return console.log("You must enter an email!");
            }
            return true;
        }
      },
    ]);
  };;

async function init() {
    try {
        const answers = await promptUser();
        const useAnswers = readme(answers);
        await writeFile("./util/README.md" , useAnswers);
        console.log("Successfully created readme!");
    }catch (err) {
        console.log(err);
    }
}


init();
