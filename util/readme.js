function readme(answers) {
    return `
  <h1 align="center">${answers.projectTitle}</h1>

  <br>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br>

  ## Description
  ${answers.description}

  <br>

  ## Table of Contents
  * [Description](#description)
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contact](#contact)
  
  <br>


  ## Installation
  ${answers.install}
  <br>

  ## Usage
  ${answers.usage}
  <br>

  ## Screenshot

  ![screenshot](./${answers.image})
  
  ## License

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br>
  This application is covered by the ${answers.license} license. 
  <br>

  ## Contributing
  ${answers.contributors}
  <br>

  ## Tests
  ${answers.test}
  <br>

  ## Questions
  ${answers.questions}

  <br>

  ## Contact

  * GitHub: [${answers.username}](https://github.com/${answers.username})<br>
  * Email: ${answers.email}<br>
  `;
}
module.exports = readme;