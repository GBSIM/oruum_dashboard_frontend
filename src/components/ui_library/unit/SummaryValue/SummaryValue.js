export default function SummaryValue(props) {
    return (
        <div style={{display:'flex',flexDirection:'row',width:'100%',flex:'1',justifyContent:'space-between',marginBottom:'10px'}}>
            <span style={{color: '#B9B9B9'}}>{props.title}</span>
            <span style={{color: '#696969'}}>{props.value}</span>
        </div>
    )
}