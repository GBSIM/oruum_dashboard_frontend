

export default function RoundedBar(props) {
    return (
        <div style={{background:props.barColor,
                     height:props.height,
                     minHeight:props.height,
                     flex:'1',
                     borderRadius:'3px'}}>
        </div>
    )
}