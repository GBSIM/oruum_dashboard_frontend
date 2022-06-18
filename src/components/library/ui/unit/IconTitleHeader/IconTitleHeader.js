import ImageContainer from "../ImageContainer/ImageContainer"

export default function IconTitleHeader(props) {
    let text;
    if (props.headerType === 'h1') {
        text = <h1
                        style={{color:props.textColor,marginBottom:'0px', marginLeft:props.betweenSpace}}>
                        {props.text}
                     </h1>
    } else if (props.headerType === 'h2') {
        text = <h2
                        style={{color:props.textColor,marginBottom:'0px', marginLeft:props.betweenSpace}}>
                        {props.text}
                     </h2>
    } else if (props.headerType === 'h3') {
        text = <h3
                        style={{color:props.textColor,marginBottom:'0px', marginLeft:props.betweenSpace}}>
                        {props.text}
                     </h3>
    } else {
        text = <h1
                        style={{color:props.textColor,marginBottom:'0px', marginLeft:props.betweenSpace}}>
                        {props.text}
                     </h1>
    }
    return (
        <div 
            style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    width: '100%'}}>
            <ImageContainer
                image={props.iconImage}
                containerHeight={props.containerHeight}
                imageHeight={props.iconHeight}></ImageContainer>
            {text}
        </div>
    )
}