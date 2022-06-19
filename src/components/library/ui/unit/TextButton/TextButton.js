export default function TextButton(props) {
    if (props.isButtonOn) {
        return (
            <button>
                <span style={{color:props.buttonOnTextColor}}>{props.text}</span>
            </button>
        )
    } else {
        return (
            <button onClick={props.onClickEvent}>
                <span style={{color:props.buttonOffTextColor}}>{props.text}</span>
            </button>
        )
    }
}