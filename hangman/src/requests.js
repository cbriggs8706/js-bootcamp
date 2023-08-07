const getPuzzle = async (wordCount) => {
	const response = await fetch(
		`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
	)

	if (response.status === 200) {
		const data = await response.json()
		return data.puzzle
	} else {
		throw new Error('Unable to fetch puzzle')
	}
}

const getCurrentCountry = async () => {
	const location = await getLocation()
	const country = await getCountry(location.country)
	return country
}

const getLocation = async () => {
	const response = await fetch('https://ipinfo.io/json?token=3db0c039ed9f22')
	if (response.status === 200) {
		return response.json()
	} else {
		throw new Error('Unable to fetch ip info')
	}
}

const getCountry = async (countryCode) => {
	const response = await fetch('https://restcountries.com/v3.1/all')
	if (response.status === 200) {
		const data = await response.json()
		return data.find((country) => country.cca2 === countryCode)
	} else {
		throw new Error('Unable to fetch countries')
	}
}

export { getPuzzle as default }
