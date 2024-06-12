import react from 'react'
import ProfilePic from './ProfilePic'
import '../css/Story.css'
import StoryRating from './StoryRating'

class Story extends react.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="Story">
            <ProfilePic/>
            <StoryRating/>
        </div>
    }
}

export default Story