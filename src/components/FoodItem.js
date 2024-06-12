import react from 'react'
import '../css/FoodItem.css'

class FoodItem extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(<div style={{
            "color":"cyan"
        }} className="FoodItem">
                <img src={this.props.image}></img>
                <div className="Info">
                    <p>{this.props.text}</p>
                </div>
        </div>)
    }
}

export default FoodItem