import react from 'react'
import '../css/Main.css'
import Article from './Article'
import HeroSection from './HeroSection'
import StoreInfoOverview from './StoreInfoOverview'
import FoodMenu from './FoodMenu'
import Button from './Button'
import SuggestApp from './SuggestApp'
import BottomNav from './BottomNav'

class Main extends react.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="Main">
            <Article>
                <HeroSection/>
            </Article>
            <Article >
                <StoreInfoOverview/>
            </Article>
            <Article>
                <FoodMenu/>
                <Button>Browse More Items Here</Button>
            </Article>
            <Article>
                <SuggestApp></SuggestApp>
            </Article>
            <Article>
                <BottomNav/>
            </Article>   
        </div>
    }
}

export default Main