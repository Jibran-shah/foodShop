import react from 'react'
import '../css/FoodCategory.css'

class FoodCategory extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="FoodCategory">
                {this.props.children}
            </div>
        )
    }
}


export default FoodCategory