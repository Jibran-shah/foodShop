import react from 'react'
import '../css/StoreSpecificInfo.css'
class StoreSpecificInfo extends react.Component{
    constructor(){
        super()
    }
    render(){
        let {Icon,value,title} = this.props
        return(
            <div className="StoreSpecificInfo">
                {(Icon!==undefined)&&<Icon/>}
                <h1>{(value!==undefined)&&value}</h1>
                <p>{(title!==undefined)&&title}</p>
            </div>
        )
    }
}

export default StoreSpecificInfo