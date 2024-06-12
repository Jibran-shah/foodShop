import react from 'react'
import SuggestAppInfo from './SuggestAppInfo'
import '../css/SuggestApp.css'

class SuggestApp extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="SuggestApp">
                <SuggestAppInfo>
                </SuggestAppInfo>
            </div>
        )
    }
}

export default SuggestApp

