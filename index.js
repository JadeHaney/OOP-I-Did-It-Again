const inquirer = require('inquirer');
const fs = require('fs');
const {Circle} = require('./shape.js');
function init() {//run npm install first
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'textColor',
    },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'shapeColor',
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        choices: ['triangle', 'Circle', 'square', 'rectangle',],
        name: 'userShape',
    },
  ])
 
            .then(function(results) {
                //  .then( (results) => {})
            console.log(results.userPref)
            let shape;
            if(results.userShape === 'Circle'){
            shape = new Circle(results.username);
            console.log(shape);
            }
            const logo = shape.render();
            console.log(logo);
            fs.writeFile(`examples/logo.svg`, logo, function (error) {
            if (error) {
                console.log(error);
            }
          });
      
})
}

init();