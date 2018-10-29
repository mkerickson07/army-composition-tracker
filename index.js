const inquirer = require('inquirer');

const data = require('./femaleHW.json');

const helpers = require('./helpers');

const compliance = helpers.compliance;

const promise = inquirer.prompt([
  {
    type: 'list',
    name: 'sex',
    message: 'What is your sex?',
    choices: [
      'male',
      'female'],

  },
  {
    type: 'input',
    name: 'age',
    message: 'What is your age?',
  },
  {
    type: 'input',
    name: 'height',
    message: 'What is your height?',
  },
  {
    type: 'input',
    name: 'weight',
    message: 'What is your weight?',
  },
]);

promise.then((answers) => {
  const results = answers;
  const height = Number(results.height);
  const sex = results.sex;
  const age = results.age;
  const weight = results.weight;
  const inCompliance = compliance (sex, age, height, weight);
  if (inCompliance === true) {
  	console.log('Soldier is in compliance')
  }
  else {
  	console.log('Soldier is NOT in compliance')
  }
});


