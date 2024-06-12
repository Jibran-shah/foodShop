import react from 'react'
import FoodItem from './FoodItem'
import image from '../images/BottomNav.jpg'
import '../css/FoodItems.css'

class FoodItems extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="FoodItems">
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
                <FoodItem image={image} text="food item details"/>
            </div>
        )
    }
}

export default FoodItems