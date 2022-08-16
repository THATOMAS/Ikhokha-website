import React from "react"
import styled from "styled-components"


const ProductsPageContainer = styled.article`
height:100vh;
background:blue;
scroll-snap-align: start;
`


const PageWrapper = styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
`

const HomePage = ({titleRef2})=>{
	return(
		<ProductsPageContainer ref={titleRef2}>
		</ProductsPageContainer>
		)
}

export default ProductsPageContainer;