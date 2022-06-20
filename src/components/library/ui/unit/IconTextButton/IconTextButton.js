import ImageContainer from "../ImageContainer/ImageContainer"

export default function IconTextButton(props) {
    if (props.buttonOn) {
        return (
            <button 
                style={{display:'block',
                        flexDirection:'row',
                        alignItems:'center'}}>
                <div
                    style={{display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'flex-start',
                            width:'100%',
                            marginLeft:props.marginLeft}}>
                    <ImageContainer
                        image={props.buttonOnImage}
                        containerHeight={props.iconContainerHeight}
                        imageHeight={props.iconHeight}></ImageContainer>
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
                        alignItems:'center',
                        width: '100%'}}
                onClick={props.onClickEvent}>
                <div 
                    style={{display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            marginLeft:props.marginLeft}}>
                    <ImageContainer
                        image={props.buttonOffImage}
                        containerHeight={props.iconContainerHeight}
                        imageHeight={props.iconHeight}></ImageContainer>
                    <span 
                        style={{color:props.buttonOffTextColor, marginLeft:props.betweenSpace}}>
                        {props.text}
                    </span>
                </div>   
            </button>
        )
    }
    
}