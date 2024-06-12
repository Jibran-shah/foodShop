import react from 'react'
import BasicInfoHeading from './BasicInfoHeading'
import SpecificInfo from './StoreSpecificInfo'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Groups3Icon from '@mui/icons-material/Groups3';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import '../css/StoreInfoOverview.css'

class StoreInfoOverview extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="StoreInfoOverview">
                <BasicInfoHeading/>
                <SpecificInfo Icon={AddShoppingCartIcon} value="1450+" title="Online Orders"/>
                <SpecificInfo Icon={Groups3Icon} value="9900+" title="Satisfied Customers" />
                <SpecificInfo Icon={FreeBreakfastIcon} value="4785+" title="Cup of Teas"/>
            </div>
        )
    }
}

export default StoreInfoOverview