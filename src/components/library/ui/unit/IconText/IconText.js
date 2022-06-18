import ImageContainer from "../ImageContainer/ImageContainer"

export default function IconText(props) {
    return (
        <div 
            style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    width: '100%'}}>
            <ImageContainer
                image={props.iconImage}
                containerHeight={props.iconContainerHeight}
                imageHeight={props.iconHeight}></ImageContainer>
            <span 
                style={{color:props.textColor, marginLeft:props.betweenSpace}}>
                {props.text}
            </span>
        </div>
    )
}