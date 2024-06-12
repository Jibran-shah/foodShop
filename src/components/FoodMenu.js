import react from 'react'
import FoodMenuItem from './FoodMenuItem'
import '../css/FoodMenu.css'

class FoodMenu extends react.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="FoodMenu">
                <FoodMenuItem/>
                <FoodMenuItem/>
                <FoodMenuItem/>
                <FoodMenuItem/>
                <FoodMenuItem/>
                <FoodMenuItem/>
            </div>
        )
    }
}

export default FoodMenu