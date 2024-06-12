import react from 'react'
import '../css/BottomNav.css'
import Button from './Button'

class BottomNav extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="BottomNav">
                <div className="BottomNavItem"id="image"></div>
                <div className="BottomNavItem">
                    <h1>Our Menus</h1>
                    <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button>Our Menus</Button>
                </div>
                <div className="BottomNavItem" id="last">
                    <h1>Order Delievery</h1>
                    <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button>Order Online</Button>
                </div>
            </div>
        )
    }
}

export default BottomNav