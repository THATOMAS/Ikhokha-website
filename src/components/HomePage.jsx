import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"


const image = require('../assets/56256.png')

const HomePageContainer = styled.article`
height:100vh;
// background:red;
`

const PageWrapper = styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
`
const PageInfoBox = styled.div`
height:75%;
width:50%;
display:flex;
flex-direction:column;
// background:red;
align-items:center;
justify-content:center
`

const Heading = styled.h1`
font-family:Montserrat;
font-size:46px;
margin-bottom:57px;
font-weight:600;
`

const Info = styled.p`
font-family:Montserrat;
font-size:27px;

`

const ImageBox = styled.div`
height:75%;
width:50%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
// background:blue;
`
const Image = styled.div`
height:371px;
width:384px;
background:url(${image})
`

const HomePage = ()=>{
	return(
		<HomePageContainer>
			<PageWrapper>
				<PageInfoBox>
					<Heading>
						Start new... Today!
					</Heading>
					<Info>Lorem ipsy things yebo mhmmm its nice dont pay dijo quick hawu!!!
					</Info>
				</PageInfoBox>
				<ImageBox>
					<Image/>
				</ImageBox>
			</PageWrapper>
		</HomePageContainer>
		)
}

export default HomePage;