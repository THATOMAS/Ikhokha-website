import React from "react"
import styled from "styled-components"


const image = require('../assets/56217.png')


const ProductsPageContainer = styled.article`
height:100vh;
// background:blue;
scroll-snap-align: start;
`


const PageWrapper = styled.div`
height:100%;
width:100%;
display:flex;
// background:orange;
flex-direction:column;
align-items:center;
`
const HeadingBox = styled.div`
height:39px;
width:424px;
// background:green;
margin-top:120px;
display:flex;
align-items:center;
justify-content:center;
`

const Heading = styled.h1`
font-size:32px;
font-family:Montserrat,Sans-serif;
color:#394E5D

`

const InfoAndImageBox = styled.div`
height:70%;
width:100%;
// background:purple;
display:flex;
margin-top:60px;
align-items:center;
justify-content:center;
`


const ImageBox = styled.div`
height:100%;
width:50%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
// background:blue;
`
const Image = styled.div`
height:370px;
width:236px;
background:url(${image})
`



const PageInfoBox = styled.div`
height:370px;
width:50%;
display:flex;
flex-direction:column;
// background:red;
align-items:flex-start;
justify-content:flex-start;
`
const HeaderBox = styled.div`
height:24px;
width:265px;
display:flex;
align-items:center;
justify-content:flex-start;

`

const ProductHeading = styled.h2`
font-family:Montserrat;
font-size:20px;
color:#394E5D
`
const TextBox = styled.div`
height:220px;
width:525px;
// background:green;
margin-top:30px
`

const Text = styled.p`
font-family:Montserrat;
font-size:18px;
line-height:33px;
color:#394E5D;

`

const Products = ({titleRef2})=>{
	return(
		<ProductsPageContainer ref={titleRef2}>
			<PageWrapper>
				<HeadingBox>
					<Heading>
						Lorem ipsum something
					</Heading>
				</HeadingBox>
				<InfoAndImageBox>
					<ImageBox>
						<Image/>
					</ImageBox>
					<PageInfoBox>
						<HeaderBox>
							<ProductHeading>
								New Product,new Story
							</ProductHeading>
						</HeaderBox>
						<TextBox>
							<Text>
								Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus facilisis ipsum sit amet molestie. Proin lobortis eros a turpis tempor, sed ornare augue aliquam. Donec imperdiet nulla ut placerat molestie. In hendrerit blandit ante facilisis ultrices. Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.
							</Text>
						</TextBox>
					</PageInfoBox>
				</InfoAndImageBox>
			</PageWrapper>
		</ProductsPageContainer>
		)
}

export default Products;