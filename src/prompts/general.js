const inquirer = require('inquirer');

module.exports = {
  askMain: async () => {
    const questions = [
      {
        name: 'First Name',
        type: 'input',
        message: 'Enter your first name:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your first name.';
          }
        }
      },
      {
        name: 'Last Name',
        type: 'input',
        message: 'Enter your last name:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your last name.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  newUserQ: async () => {
    const questions = [
      {
        name: 'New User',
        type: 'confirm',
        message: 'Are you a new user?',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please select an option';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
