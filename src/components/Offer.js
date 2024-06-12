import react from 'react'
import '../css/Offer.css'
import image from '../images/BottomNav.jpg'

class Offer extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div style={{
                "backgroundImage":`url(${image})`
            }} className="Offer">
                <h1>{this.props.heading}</h1>
                <p className="OfferText">{this.props.text}</p>
            </div>
        )
    }
}

export default Offer