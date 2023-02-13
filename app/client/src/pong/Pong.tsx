import { Typography, Button, ThemeProvider, createTheme } from '@mui/material'
import { useCallback } from "react"  
import { Redirect } from "./Oauth2"
import { MainPage } from "./MainPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/**
 * ============ Entrypoint of the project =============
 */

const theme = createTheme({
	typography: {
		fontFamily: ['pong-policy']
	}
})

export const Pong = () => {

	return (
		<>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage/>} />
					<Route path="/redirect" element={<Redirect/>} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
		</>
	)
}