export default function HorizontalLine(props) {
    return (
        <div
            style={{marginLeft:props.marginLeft,
                    marginRight:props.marginLeft,
                    marginTop:props.marginTop,
                    marginBottom:props.marginBottom}}>
            <div
                style={{width:'100%',
                        height:props.height,
                        background:props.lineColor}}></div>
        </div>
    )
}