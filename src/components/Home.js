import react from 'react'
import Section from './Section'
import Nav from './Nav'
import Footer from './Footer'
import Main from './Main'
import '../css/ProfilePage.css'

class Home extends react.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
        <div className="ProfilePage">
         <Section >
                <Nav></Nav>
        </Section>
         <Section><Main/></Section>
        <Section>
            <Footer/>
        </Section>
        </div> )  
    }
}

export default Home