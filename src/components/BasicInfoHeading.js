import react from 'react'
import '../css/BasicInfoHeading.css'

class BasicInfoHeading extends react.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="BasicInfoHeading">
                <p>Basic info about online food</p>
                <h1>Our goal is to serve delicious food</h1>
            </div>
        )
    }
}

export default BasicInfoHeading