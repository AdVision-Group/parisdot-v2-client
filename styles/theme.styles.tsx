export type ThemeType = typeof light // This is the type definition for my theme object.

export const light = {
	colors: {
		bodyBackgroundColor: "#041222",
		blue: "#0086FF",
		pink: "#FF008C",
		buttonBackgroundColor:
			"linear-gradient(90deg, rgba(255,0,140,1) 0%, rgba(0,134,255,1) 100%);",
		buttonBorderColor: "#fff",
		buttonColor: "#fff",
		linkColor: "#fff",
	},
	fonts: {
		primary: "#DDDDDD",
		paragraphColor: "#FBFFE8",
		secondary: "#000",
	},
	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "2536px",
	},
} as const

// export const dark: ThemeType = {
// 	colors: {

// 	},
// 	breakpoints: {
// 		sm: "640px",
// 		md: "768px",
// 		lg: "1024px",
// 		xl: "1280px",
// 		xxl: "1536px",
// 	},
// } as const

const theme = light // set the light theme as the default.
export default theme
