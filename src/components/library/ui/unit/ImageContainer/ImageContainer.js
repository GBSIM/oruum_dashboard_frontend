export default function ImageContainer(props) {
    return (
        <div 
            style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    width:props.containerWidth,
                    minWidth:props.containerWidth,
                    height:props.containerHeight,}}>
            <img 
                style={{width: props.imageWidth, height: props.imageHeight, objectFit:'cover'}}
                src={props.image}></img>
        </div>
    )
}