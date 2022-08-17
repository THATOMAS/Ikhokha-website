import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"


const image = require('../assets/56256.png')

const HomePageContainer = styled.article`
height:100vh;
// background:red;
scroll-snap-align: start;
`

const PageWrapper = styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
`
const PageInfoBox = styled.div`
height:75%;
width:60%;
display:flex;
flex-direction:column;
// background:red;
align-items:center;
justify-content:center
`

const PageInfoBoxWrapper = styled.div`
width:503px;
height:fit-content;
display:flex;
flex-direction:column;
justify-content:flex-start;
`

const Heading = styled.h1`
font-family:Montserrat;
font-size:46px;
margin-bottom:57px;
font-weight:600;
color:#394E5D;
margin-bottom:19px;
`

const Info = styled.p`
font-family:Montserrat;
font-size:27px;
color:#394E5D;
line-height:27px;
`

const ImageBox = styled.div`
height:75%;
width:40%;
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
// background:blue;
`
const Image = styled.div`
height:371px;
width:384px;
background:url(${image})
`

const HomePage = ({titleRef1})=>{
	return(
		<HomePageContainer ref={titleRef1}>
			<PageWrapper>
				<PageInfoBox>
					<PageInfoBoxWrapper>
						<Heading>
							Start new... Today!
						</Heading>
						<Info>Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum
						</Info>
					</PageInfoBoxWrapper>
				</PageInfoBox>
				<ImageBox>
					<Image/>
				</ImageBox>
			</PageWrapper>
		</HomePageContainer>
		)
}

export default HomePage;