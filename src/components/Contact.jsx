import React from "react"
import styled from "styled-components"


const ContactPageContainer = styled.article`
height:100vh;
background:purple;
scroll-snap-align: start;
`

const Contact = ({titleRef4})=>{
	return(
		<ContactPageContainer ref={titleRef4}/>
		)
}

export default ContactPageContainer;