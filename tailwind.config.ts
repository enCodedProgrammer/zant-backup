import { colors } from './src/types/color';
import type { Config } from 'tailwindcss'

const config: Config = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary:	colors['primary'],
					secondary:	colors['secondary'],
					yellow:		colors['yellow'],
					green:		colors['green'],
					teal:		colors['teal'],
					pink:		colors['pink'],
					black:		colors['black'],
					white:		colors['white'],
					neutral:	'black',

					'.bg-linear-gradient': {
						background: "linear-gradient(225deg, #EF0CAF 46.16%, rgba(70, 240, 255, 0.15) 75%), rgba(255, 255, 255, 0.90)"
					},

					'.filter-primary': {
						filter: "invert(26%) sepia(94%) saturate(6089%) hue-rotate(305deg) brightness(95%) contrast(105%)"
					},
					'.filter-secondary': {
						filter: "invert(84%) sepia(52%) saturate(1500%) hue-rotate(150deg) brightness(101%) contrast(96%)"
					},
					'.filter-tertiary': {
						filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(77deg) brightness(103%) contrast(104%)"
					},
					'.filter-gray-400': {
						filter: "invert(88%) sepia(10%) saturate(5%) hue-rotate(15deg) brightness(90%) contrast(86%)"
					}
				}
			}
		]
	},
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontSize: {
			"2xs":			["0.625rem",	"1rem"],
			"xs":			["0.75rem",		"1.25rem"],
			"sm":			["0.875rem", 	"1.25rem"],
			"md":			["1rem",		"1.5rem"],
			"lg":			["1.125rem",	"1.75rem"],
			"xl":			["1.25rem",		"2rem"],

			"para-2xs":		["0.625rem",	"1.25rem"],
			"para-xs":		["0.75rem",		"1.5rem"],
			"para-sm":		["0.875rem",	"1.5rem"],
			"para-md":		["1rem",		"1.75rem"],
			"para-lg":		["1.125rem",	"2rem"],
			"para-xl":		["1.25rem",		"2.25rem"],

			"link-2xs":		["0.625rem",	{
				lineHeight: "1rem",
				fontWeight: "500"
			}],
			"link-xs":		["0.75rem",		{
				lineHeight: "1.25rem",
				fontWeight: "500"
			}],
			"link-sm":		["0.875rem",	{
				lineHeight: "1.25rem",
				fontWeight: "500"
			}],
			"link-md":		["1rem",		{
				lineHeight: "1.5rem",
				fontWeight: "500"
			}],
			"link-lg":		["1.125rem",	{
				lineHeight: "1.75rem",
				fontWeight: "500"
			}],
			"link-xl":		["1.25rem",		{
				lineHeight: "2rem",
				fontWeight: "500"
			}],

			"lead-2xs":		["0.625rem",	{
				lineHeight: "1rem",
				letterSpacing: "0.125rem",
				fontWeight: "600"
			}],
			"lead-xs":		["0.75rem",		{
				lineHeight: "1.25rem",
				letterSpacing: "0.15rem",
				fontWeight: "600"
			}],
			"lead-sm":		["0.875rem",	{
				lineHeight: "1.25rem",
				letterSpacing: "0.175rem",
				fontWeight: "600"
			}],
			"lead-md":		["1rem",		{
				lineHeight: "1.5rem",
				letterSpacing: "0.225rem",
				fontWeight: "600"
			}],
			"lead-lg":		["1.125rem",	{
				lineHeight: "1.75rem",
				letterSpacing: "0.25rem",
				fontWeight: "600"
			}],
			"lead-xl":		["1.25rem",		{
				lineHeight: "2rem",
				letterSpacing: "0.275rem",
				fontWeight: "600"
			}],
			"lead-2xl":		["1.5rem",		{
				lineHeight: "2rem",
				letterSpacing: "0.3rem",
				fontWeight: "600"
			}],
			"lead-3xl":		["1.75rem",		{
				lineHeight: "2.25rem",
				letterSpacing: "0.35rem",
				fontWeight: "600"
			}],

			"heading-2xs":	["1.5rem",		{
				lineHeight: "2rem",
				fontWeight: "600"
			}],
			"heading-xs":	["1.75rem",		{
				lineHeight: "2.25rem",
				fontWeight: "600"
			}],
			"heading-sm":	["2rem",		{
				lineHeight: "2.5rem",
				fontWeight: "600"
			}],
			"heading-md":	["2.25rem",		{
				lineHeight: "2.75rem",
				fontWeight: "600"
			}],
			"heading-lg":	["2.5rem",		{
				lineHeight: "3rem",
				fontWeight: "600"
			}],
			"heading-xl":	["2.75rem",		{
				lineHeight: "3.5rem",
				fontWeight: "600"
			}],
			"heading-2xl":	["3rem",		{
				lineHeight: "3.75rem",
				fontWeight: "600"
			}],
			"heading-3xl":	["3.25rem",		{
				lineHeight: "4rem",
				fontWeight: "600"
			}],

			"display-2xs":	["3.5rem",		{
				lineHeight: "4rem",
				fontWeight: "600",
				letterSpacing: "-0.035rem"
			}],
			"display-xs":	["4rem",		{
				lineHeight: "5rem",
				fontWeight: "600"
			}],
			"display-sm":	["4.5rem",		{
				lineHeight: "5.75rem",
				fontWeight: "600"
			}],
			"display-md":	["5.5rem",		{
				lineHeight: "6.75rem",
				fontWeight: "600"
			}],
			"display-lg":	["6.25rem",		{
				lineHeight: "7.75rem",
				fontWeight: "600"
			}],
			"display-xl":	["8.25rem",		{
				lineHeight: "10.25rem",
				fontWeight: "600"
			}],
			"display-2xl":	["8.75rem",		{
				lineHeight: "7.5rem",
				fontWeight: "600"
			}],
			"display-3xl":	["9.5rem",		{
				lineHeight: "9.5rem",
				fontWeight: "600",
				letterSpacing: "-0.095rem"
			}],

			"extra":			["1.625rem",	{
				lineHeight: "2rem",
				fontWeight: "500",
				letterSpacing: "0.01rem"
			}]
		},
		colors: {
			primary:	"var(--theme-primary)",
			secondary:	"var(--theme-secondary)",
			yellow:		"var(--theme-yellow)",
			green:		"var(--theme-green)",
			teal:		"var(--theme-teal)",
			pink:		"var(--theme-pink)",
			black:		"var(--theme-black)",
			white:		"var(--theme-white)",
			gray: {
				"900":	"#656565",
				"800":	"#747474",
				"700":	"#898a8d",
				"600":	"#979797",
				"500":	"#a6a6a6",
				"400":	"#b7b7b7",
				"300":	"#c4c4c4",
				"200":	"#d9d9d9",
				"100":	"#e7e7e7",
				"50":	"#f2f1f1",
				"25":	"#fafafa",
			}
		},
		fontWeight: {
			medium:		"600",
			normal:		"500",
			regular:	"400",
			light:		"300",
			bold:		"700"
		},
		fontFamily: {
			roboto:		'Roboto',
			neue:		'Neue Haas Grotesk Display Pro'
		},
	},
	extend: {
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		function ({ addVariant }: { addVariant: any }) {
			addVariant('child', '& > *');
			addVariant('childImage', '& > img');
		}
	],
}
export default config
