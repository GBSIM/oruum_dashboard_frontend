export default function ImageContainer(props) {
    return (
        <div 
            style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                    height:props.containerHeight}}>
            <img 
                style={{width: props.imageWidth, height: props.imageHeight, objectFit:'cover'}}
                src={props.image}></img>
        </div>
    )
}