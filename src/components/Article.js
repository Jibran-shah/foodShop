import react from 'react'

class Article extends react.Component{
    constructor(){
        super()
    }
    render(){
        return <>
            {this.props.children}
        </>
    }
}

export default Article