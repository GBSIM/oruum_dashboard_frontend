import ImageContainer from "../ImageContainer/ImageContainer"

export default function IconText(props) {
    return (
        <div 
            style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'flex-start',
                    width: '100%'}}>
            <div style={{marginTop:'3px'}}>
                <ImageContainer
                    image={props.iconImage}
                    containerWidth={'20px'}
                    containerHeight={'20px'}
                    imageHeight={'20px'}></ImageContainer>
            </div>
            
            <span 
                style={{color:props.textColor, marginLeft:props.betweenSpace}}>
                {props.text}
            </span>
        </div>
    )
}