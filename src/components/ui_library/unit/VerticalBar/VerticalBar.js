import './VerticalBar.css';

export default function VerticalBar(props) {
    const width = props.width;
    const horizontalMargin = props.horizontalMargin;
    const height = props.height;
    const bottomMargin = props.bottomMargin;
    const topMargin = props.topMargin;

    return (
        <div className='vertical-bar' 
             style={{
                width:width,
                height:height,
                marginRight:horizontalMargin,
                marginLeft:horizontalMargin,
                marginTop:topMargin,
                marginBottom:bottomMargin}}>
        </div>
    )
}