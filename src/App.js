import React,{useRef} from "react"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Products from "./components/Products"
import Blog from "./components/Blog"
import Contact from "./components/Contact"


const LogoIcon = require("./assets/Logo.png")


const WebPage = styled.section`
height:fit-content;
scroll-snap-align: start;
width:100%;

`

const AllRightsContainer = styled.div`
height:60px;
width:100%;
background: #4296CB 0% 0% no-repeat padding-box;
opacity: 1;
`

const AllRightsWrapper = styled.div`
height:100%;
width:250px;
// background:red;
margin-left:50px;
display:flex;
align-items:center;
justify-content:space-evenly;
`

const RightsIcon = require('./assets/AllRights.png')

const AllRightsLogo =styled.div`
width: 36px;
height: 32px;
background:url(${RightsIcon});
background-size:contain;
background-repeat:no-repeat;
`

const RightsText = styled.p`
text-align: left;
font: normal normal bold 14px/19px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;

`

const App = ()=>{

const titleRef1 = useRef();
const titleRef2 = useRef();
const titleRef3 = useRef();
const titleRef4 = useRef();


  const toHome = () =>{
    titleRef1.current.scrollIntoView({behavior:"smooth"});
  }

  const toProducts = ()=> {
    titleRef2.current.scrollIntoView({behavior:"smooth"});
  }


  const toBlog =()=> {
    titleRef3.current.scrollIntoView({behavior:"smooth"});
  }


  const toContact =() => {
     titleRef4.current.scrollIntoView({behavior:"smooth"});
  }

	return(
		<WebPage>
			<Navbar toHome={toHome} toProducts={toProducts} toBlog={toBlog} toContact={toContact} />
			<HomePage ref ={titleRef1} titleRef1={titleRef1}/>
			<Products ref={titleRef2} titleRef2={titleRef2}/>
			<Blog ref={titleRef3} titleRef3={titleRef3}/>
			<Contact ref={titleRef4} titleRef4={titleRef4}/>
      <AllRightsContainer>
        <AllRightsWrapper>
          <AllRightsLogo/>
          <RightsText>All rights reserved ©</RightsText>
        </AllRightsWrapper>
      </AllRightsContainer>
		</WebPage>

		)
}

export default App;

