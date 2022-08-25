import React,{useRef} from "react"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Products from "./components/Products"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import {Mobile} from './Responsive'

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

${Mobile({
  marginLeft:'0px',
  width:'100vw',
})}

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




const App = React.forwardRef((props,ref)=>{


const ref1 = React.createRef()
const ref2 = React.createRef()
const ref3 = React.createRef()
const ref4 = React.createRef()

const toHome = () =>{
    ref1.current.scrollIntoView({behavior:"smooth"});
    return 
  }

  const toProducts = ()=> {
    ref2.current.scrollIntoView({behavior:"smooth"});
    return

  }


  const toBlog =()=> {
    ref3.current.scrollIntoView({behavior:"smooth"});
    return 
  }


  const toContact =() => {
     ref4.current.scrollIntoView({behavior:"smooth"});
    return 
  }


  

	return(
		<WebPage>
			<Navbar toHome={toHome} toProducts={toProducts} toBlog={toBlog} toContact={toContact} />
			<HomePage ref1 ={ref1}/>
			<Products ref2={ref2} />
			<Blog ref3={ref3} />
			<Contact ref4={ref4} />
      <AllRightsContainer>
        <AllRightsWrapper>
          <AllRightsLogo/>
          <RightsText>All rights reserved ©</RightsText>
        </AllRightsWrapper>
      </AllRightsContainer>
		</WebPage>

		)
}

)
export default App;

