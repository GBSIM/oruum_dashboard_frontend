import RoundedButton from "../RoundedButton/RoundedButton";

export default function RoundedButtons(props) {
    const roudnedButtonList = props.textList.map((text,index) =>  (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginRight:'5px',marginBottom:'3px'}}>
            <RoundedButton text={text}></RoundedButton>
        </div>
    ))
    return (
        <div style={{widht:'100%',display:'flex',flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
            {roudnedButtonList}
        </div>
    )
}