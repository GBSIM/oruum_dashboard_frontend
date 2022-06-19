import RoundedButton from "../RoundedButton/RoundedButton";

export default function RoundedButtons(props) {
    const roudnedButtonList = props.textList.map((text,index) =>  (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <RoundedButton text={text}></RoundedButton>
            <div style={{minWidth:'5px'}}></div>
        </div>
    ))
    return (
        <div style={{widht:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
            {roudnedButtonList}
        </div>
    )
}