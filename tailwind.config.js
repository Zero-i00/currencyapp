/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				primary: '#1ba332',
				black: '#2E2E33',
				gray: '#58585C',
				yellow: '#FFDC38',
				yellow_dark: '#E5C632',
				green: '#5FA957',
				red_light: '#F23C30',
				danger: '#E4392D'
			},
			boxShadow: {
				bottomMenu: '0px -10px 30px rgba(0, 0, 0, 0.08)'
			}
		}
	},
}
