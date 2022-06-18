import ImageContainer from "../ImageContainer/ImageContainer"

export default function IconTextButton(props) {
    if (props.buttonOn) {
        return (
            <button 
                style={{display:'block',
                        flexDirection:'row',
                        alignItems:'center',
                        width: '100%'}}>
                <div
                    style={{display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            width:'100%'}}>
                    <ImageContainer
                        image={props.buttonOnImage}></ImageContainer>
                    <span 
                        style={{color:props.buttonOnTextColor, marginLeft:props.betweenSpace}}>
                        {props.text}
                    </span>                    
                </div>
            </button>
        )
    } else {
        return (
            <button 
                style={{display:'block',
                        flexDirection:'row',
                        alignItems:'center',}}>
                <div 
                    style={{display:'flex',
                            flexDirection:'row',
                            alignItems:'center'}}>
                    <ImageContainer
                        image={props.buttonOffImage}></ImageContainer>
                    <span 
                        style={{color:props.buttonOffTextColor, marginLeft:props.betweenSpace}}>
                        {props.text}
                    </span>
                </div>   
            </button>
        )
    }
    
}