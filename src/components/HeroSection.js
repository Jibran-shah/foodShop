import react from 'react'
import '../css/HeroSection.css'
import SearchBar from './SearchBar'
class HeroSection extends react.Component{
    constructor(){
        super()
        this.state = {
            value:""
        }
        this.onChangeEventHandler = this.onChangeEventHandler.bind(this)
    }

    onChangeEventHandler(event){
        this.setState({
            value:event.value
        })
    }

    onSubmitHandler(event){
        event.preventDefault();
        console.log("make ajax calls")
    }

    render(){
        return(
            <div className="HeroSection">
                <div className="Tint">
                    <h1 className="HeroSectionText HeroSectionTextHeading">
                        <span>Get a free drink after</span>
                        <span>your first order</span>
                    </h1>
                    <p className="HeroSectionText">
                        <span>Select stores are now open for entry way pickup. grab-and-go service and </span>
                        <span> drive-thru, At most locations.You can order ahead with the Starbucks</span> 
                        <span>app and then pick up at the door or drive-thru.</span>
                    </p>
                    <SearchBar value={this.state.value} onChangeEventHandler={this.onChangeEventHandler} onSubmitHandler={this.onSubmitHandler}/>
                </div>
               
            </div>
        )
    }
}

export default HeroSection