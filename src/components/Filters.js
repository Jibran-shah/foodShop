import react from 'react'
import '../css/Filters.css'
import Button from './Button'

class Filters extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="FiltersContainer">
                <div className="Header">
                    <h1>
                        Our Regular Food
                    </h1>
                    <a>see all products</a>
                </div>
                <div className="Filters">
                    <Button style={{
                        "backgroundColor":"white",
                        "width":"200px"
                    }} >this is a filter</Button>
                    <Button style={{
                        "backgroundColor":"white",
                        "width":"200px"
                    }} >this is a filter</Button>
                    <Button style={{
                        "backgroundColor":"white",
                        "width":"200px"
                    }} >this is a filter</Button>
                    <Button style={{
                        "backgroundColor":"white",
                        "width":"200px"
                    }} >this is a filter</Button>
                    <Button style={{
                        "backgroundColor":"white",
                        "width":"200px"
                    }} >this is a filter</Button>
                </div>
            </div>
        )
    }
}

export default Filters