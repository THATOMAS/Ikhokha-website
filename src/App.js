import React from "react"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Products from "./components/Products"
import Blog from "./components/Blog"
import Contact from "./components/Contact"


const LogoIcon = require("./assets/Logo.png")


const WebPage = styled.section`
height:fit-content;

`

const App = ()=>{
	return(
		<WebPage>
			<Navbar/>
			<HomePage/>
			<Products/>
			<Blog/>
			<Contact/>
		</WebPage>

		)
}

export default App;

