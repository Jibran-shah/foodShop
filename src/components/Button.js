import react from 'react'
import '../css/Button.css'

class Button extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <a className="Button" style={
                this.props.style
            }>
                {this.props.children}
            </a>
        )
    }
}

export default Button