// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

function updateCountdown(targetClass, eventDate, expiredText, textClass) {
	const countdownElements = document.querySelectorAll(targetClass);
	const currentDate = new Date();

	countdownElements.forEach(function (countdownElement) {
		// Calculate the time remaining in milliseconds
		const timeRemaining = eventDate - currentDate;

		if (timeRemaining <= 0) {
			// Event date has passed
			countdownElement.textContent = expiredText;
			const textElements = document.querySelectorAll(textClass);
			textElements.forEach((textElement) => {
				textElement.style.display = 'none';
			});
		} else {
			// Calculate days remaining
			const daysLeft = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

			// Update the countdown
			countdownElement.textContent = daysLeft;
		}
	});
}

// Update the event countdown
updateCountdown(
	'.ticker-top__days-left',
	new Date('2023-10-05'),
	'THE FREAKNESS IS HERE!',
	'.ticker-top__text'
);
3;

// Update the countdowns every day at midnight
setInterval(
	function () {
		updateCountdown(
			'.ticker-top__days-left',
			new Date('2023-10-05'),
			'THE FREAKNESS IS HERE!',
			'.ticker-top__text'
		);
	},
	24 * 60 * 60 * 1000
); // 24 hours in milliseconds
