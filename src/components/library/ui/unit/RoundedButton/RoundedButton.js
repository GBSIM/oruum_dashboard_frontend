import './RoundedButton.css';

export default function RoundedButton(props) {
    return (
        <button className="rounded-button" onClick={props.onClickEvent}>
            <span style={{background:'rgba(0,0,0,0)',
                          color:'#fff'}}>{props.text}</span>
        </button>
    )
}