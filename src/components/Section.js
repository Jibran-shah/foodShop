import react from 'react'
import '../css/Section.css'
import '../css/Main.css'

class Section extends react.Component{
    constructor(){
        super()
    }
    render(){
       
        return <div  className="Section">
           {this.props.children}
        </div>
    }
}

export default Section