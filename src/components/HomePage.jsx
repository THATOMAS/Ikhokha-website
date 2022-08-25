import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import {Mobile} from "../Responsive"

const image = require('../assets/56256.png')

const HomePageContainer = styled.article`
height:100vh;
width:100vw;
// background:green;
scroll-snap-align: start;


${Mobile({
height:'90vh'
	})}


`

const PageWrapper = styled.div`
height:100vh;
width:100vw;
display:flex;
align-items:center;
flex-direction:row;
// background:teal;


${Mobile({
	display:'flex',
	flexDirection:'column',
	alignSelf:'center'
})}

`

const PageInfoBoxWrapper = styled.div`
width:503px;
height:fit-content;
display:flex;
flex-direction:column;
justify-content:flex-start;
// background:green;


${Mobile({
width:'100%',
alignItems:'center',

})}


`


const PageInfoBox = styled.div`
height:75%;
width:60%;
display:flex;
flex-direction:column;
// background:red;
align-items:center;
justify-content:center;

${Mobile({
marginTop:'57px',
height:'50%',
width:'100vw',
})}

`

const Heading = styled.h1`
font-family:Montserrat;
font-size:46px;
margin-bottom:57px;
font-weight:600;
color:#394E5D;
margin-bottom:19px;

${Mobile({
fontSize:'28px'})}


`

const Info = styled.p`
font-family:Montserrat;
font-size:27px;
color:#394E5D;
line-height:27px;


${Mobile({
fontSize:'18px',
marginLeft:'5px'
})}


`

const ImageBox = styled.div`
height:75%;
width:40%;
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
// background:blue;

${Mobile({
height:'50vh',
width:'100vw'
})}


`
const Image = styled.div`
height:371px;
width:384px;
background:url(${image});
background-size:cover;
background-position:center;

${Mobile({
height:'100%',
width:'100%',
})}


`

const HomePage = ({ref1})=>{
	return(
		<HomePageContainer ref={ref1}>
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