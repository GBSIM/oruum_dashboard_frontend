import ImageContainer from "../ImageContainer/ImageContainer"
import './AddButton.css';

export default function AddButton(props) {
    return (
        <button style={{display:'flex',flexDirection:'row',alignItems:'center'}} onClick={props.onClickEvent}>
            <ImageContainer 
                imageHeight='20px' 
                image={require('../../images/Icon/icon_add_button_oruum_green.png')}></ImageContainer>
            <div style={{minWidth:'5px'}}></div>
            <span className='add-button-text' style={{color:'#B9B9B9'}}>{props.text}</span>
        </button>
    )
}