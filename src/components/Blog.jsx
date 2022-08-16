import React from "react"
import styled from "styled-components"


const BlogContainer = styled.article`
height:100vh;
background:blue;
scroll-snap-align: start;
`

const Blog = ({titleRef3})=>{
	return(
		<BlogContainer ref={titleRef3}/>
		)
}

export default Blog;