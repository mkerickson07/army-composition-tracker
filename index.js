const inquirer = require('inquirer')

const data = require('./femaleHW.json')

const promise = inquirer.prompt([
	{
		type: 'list',
		name: 'sex',
		message: "What is your sex?",
		choices: [
		'male',
		'female']
		
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
	}
	])

promise.then((answers) => {
	const results = answers
	console.log(answers)
	const height = Number(results.height)
	console.log(height)
	console.log(data)
	const sex = results.sex
}) 

