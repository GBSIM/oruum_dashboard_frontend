import './RoundedButton.css';

export default function RoundedButton(props) {
    return (
        <button className="rounded-button" onClick={props.onClickEvent}>
            <span style={{paddingTop:'0px',
                          paddingBottom:'0px',
                          paddingLeft:'5px',
                          paddingRight:'5px',
                          background:'rgba(0,0,0,0)',
                          color:'#fff',
                          fontWeight:'500'}}>{props.text}</span>
        </button>
    )
}