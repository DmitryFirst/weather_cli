import chalk from 'chalk';
import dedent from 'dedent-js';


const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error)
};

const printSuccess = (error) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + error)
};


const printHelp = () => {
	console.log(
		dedent `${chalk.bgCyan('HELP')}
		Без параметров - вывод погоды
		-s [CITY] Для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`)
};

const printWeather = (res, icon) => {
	console.log(
		dedent `${chalk.bgYellow('WEATHER')} Погода в городе ${res.name}
		${icon}  ${res.weather[0].description} 
		Температура:  ${res.main.temp} (ощущается как ${res.main.feels_like})
		Влажность:  ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed}м/с
		`)
};

export {printError, printSuccess, printHelp, printWeather};