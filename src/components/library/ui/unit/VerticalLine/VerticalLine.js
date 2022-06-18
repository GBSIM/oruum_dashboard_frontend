export default function VerticalLine(props) {
    return (
        <div
            style={{marginLeft:props.marginLeft,
                    marginRight:props.marginLeft,
                    marginTop:props.marginTop,
                    marginBottom:props.marginBottom,
                    width:props.width,
                    height:props.height,
                    background:props.lineColor}}>
        </div>
    )
}