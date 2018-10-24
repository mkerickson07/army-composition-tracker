const inquirer = require('inquirer')

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
		name: 'height',
		message: 'What is your height?',
	}
	])

promise.then((answers) => {
	const results = answers
	console.log(answers)
	const height = Number(results.height)
	console.log(height)

	const sex = results.sex
}) 

