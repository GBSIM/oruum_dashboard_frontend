import './SearchInput.css';
import ImageContainer from '../ImageContainer/ImageContainer';

export default function SearchInput(props) {
    return (
        <div>
            <form style={{display:'flex',flesDirection:'row',alignItems:'center'}}>
                <input type='text' 
                       placeholder={props.placeholder} 
                       style={{width:'400px',
                               height:'40px',
                               borderRadius:'20px',
                               border:'1px solid #DCDCDC',
                               paddingLeft:'20px',
                               color:'#696969'}}>
                </input>
                <button className='search-button'>
                    <img src={require('../../images/Icon/icon_search_white.png')} style={{background:'rgba(0,0,0,0)',width:'30px',height:'30px'}}></img>
                </button>
            </form>
        </div>
        
    )
}