import './RoundedButton.css';

export default function RoundedButton(props) {
    return (
        <button className="rounded-button" onClick={props.onClickEvent}>
            <span style={{paddingTop:'3px',
                          paddingBottom:'3px',
                          paddingLeft:'10px',
                          paddingRight:'10px',
                          background:'rgba(0,0,0,0)',
                          color:'#fff'}}>{props.text}</span>
        </button>
    )
}