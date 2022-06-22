import './RoundedButton.css';

export default function RoundedButton(props) {
    return (
        <button className="rounded-button" onClick={props.onClickEvent}>
            <span style={{paddingTop:'5px',
                          paddingBottom:'5px',
                          paddingLeft:'12px',
                          paddingRight:'12px',
                          background:'rgba(0,0,0,0)',
                          color:'#fff'}}>{props.text}</span>
        </button>
    )
}