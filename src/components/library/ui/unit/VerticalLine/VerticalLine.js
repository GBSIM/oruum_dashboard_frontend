
export default function VerticalLine(props) {
    return (
        <div
            style={{marginLeft:props.marginLeft,
                    marginRight:props.marginLeft,
                    marginTop:props.marginTop,
                    marginBottom:props.marginBottom,
                    width:'100%',
                    background:props.lineColor}}>
        </div>
    )
}