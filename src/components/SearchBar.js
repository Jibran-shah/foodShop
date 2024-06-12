import react from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../css/SearchBar.css'

class SearchBar extends react.Component{
    constructor(){
        super()
    }
    render(){
        let {value,onChangeEventHandler,onSubmitHandler} =this.props
        return (<form className="SearchBar" onSubmit={onSubmitHandler}>
            <input onChange={onChangeEventHandler}  value={value} id="input" class="SearchInput" type="search" autocomplete="off" spellcheck="false"  placeholder="check out your favrout food"/>
            <SearchIcon onClick={onSubmitHandler} className="SearchIcon"/>
        </form>)
    }
}

export default SearchBar