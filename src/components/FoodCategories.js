import react from 'react'
import '../css/FoodCategories.css'
import FoodCategory from './FoodCategory'

class FoodCategories extends react.Component{
    constructor(){
        super()
    }
    render(){
        let foodCategories = []
        for(let i=0;i<10;i++){
            foodCategories[i] = (<FoodCategory>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/></svg>
            <p>Burger</p>
            </FoodCategory>)
        }

        return(<div className="FoodCategories">
            {   
                foodCategories
            }
        </div>
        )
    }
}

export default FoodCategories