import react from 'react'
import '../css/Offers.css'
import Offer from './Offer'
import image from '../images/BottomNav.jpg'
import image2 from '../images/HeroSection.jpg'

class Offers extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="Offers">
                <Offer image={image2} text="this is text part" heading="this is heading">      
                </Offer>
                <Offer image={image} text="this is text part">      
                </Offer>
                <Offer image={image2} text="this is text part">      
                </Offer>
                <Offer image={image} text="this is text part">      
                </Offer>
            </div>
        )
    }
}

export default Offers