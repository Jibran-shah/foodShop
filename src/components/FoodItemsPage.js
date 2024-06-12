import react from 'react'
import FoodCategories from  './FoodCategories'
import Offers from './Offers'
import Filters from "./Filters"
import FoodItems from './FoodItems'
import '../css/FoodItemsPage.css'


class FoodItemsPage extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(<div>
            <FoodCategories/>
            <Offers/>
            <Filters/>
            <FoodItems/>
        </div>)
    }
}

export default FoodItemsPage