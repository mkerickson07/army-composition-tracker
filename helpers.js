const data = require('./femaleHW.json')

function compliance (sex, age, height, weight) {
	
	// filter rows by matching height
	const rows = data.filter((requirement) => {
		// assume this requirement is unmatched
		let matched = false;
		// if heights match, this is the requirement we are looking for
		if (requirement.height === height) {
			matched = true;
		}
		return matched;
	})



	const row = rows[0]

	// 1. we need to check if Soldier weighs more than min weight
	if (weight < row.minWeight) {
		return false;
	}
	// 2. we need to check if Soldier weighs less than max weight
	const maxWeights = row.maxWeights;
	let ageRange = maxWeights.filter((weightObject) => {
		// 
		if ((age >= weightObject.minAge) && (age <= weightObject.maxAge)) {
			return true;
		}
		return false; 
	})

	ageRange = ageRange[0]
	// determine if Soldier is under or equal to their max weight in their age range
	if (weight <= ageRange.maxWeight) {
		return true 
	}
	return false

}

module.exports = {
	compliance
}