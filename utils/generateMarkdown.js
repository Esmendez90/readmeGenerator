function renderLicenseBadge(license) {
    // If I choose a license for my application from the list of options
    // then a badge for that license is added near the top on the README
    // and a notice is added to the section of the README entitled 
    // License that explains which license the application is covered 
    // under
    


    
    // If there is no license, return an empty string
    
  }
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  //   if(data.license === true){
  //     console.log(`https://img.shileds.io/badge/license-${data.license}-blue.svg`);
  //   }
  //   return "";
   }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ## User Story
  ${data.userStory} 
  
  ## Table of Content
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For questions, please contacte me:
  * [${data.username}] (https://github.com/${data.username})
  * Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
 
  
  