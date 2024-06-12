import react from 'react'
import '../css/StoryRating.css'

class ProfileInfo extends react.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="StoryRating">
            <h1 className="ProfileName">John Barbe</h1>
            <p className="Stars"> &#9733; &#9733; &#9733; &#9733;&#9734; </p>
            <p className="Separator"></p>
            <p className="Quote">foods here are tasty and also good quality.</p>
            <p className="QuoteSymbols"></p>
        </div>
    }
}

export default ProfileInfo