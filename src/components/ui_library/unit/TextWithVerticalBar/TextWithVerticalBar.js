import './TextWithVerticalBar.css';
import VerticalBar from '../VerticalBar/VerticalBar';

export default function TextWithVerticalBar(props) {
    const textType = props.textType;
    const leftText = props.leftText;
    const rightText = props.rightText;

    if (textType === 'h1') {
        return (
            <div className='text-with-vertical-bar-container'>
                <h1 className='left-text'>{leftText}</h1>
                <VerticalBar width='2px' horizontalMargin='20px' height='20px'></VerticalBar>
                <h1 className='right-text'>{rightText}</h1>
            </div>
        )
    } else if (textType === 'span') {
        return (
            <div className='text-with-vertical-bar-container'>
                <span className='left-text'>{leftText}</span>
                <VerticalBar width='2px' horizontalMargin='20px' height='20px'></VerticalBar>
                <span className='right-text'>{rightText}</span>
            </div>
        )
    } else if (textType === 'h3') {
        return (
            <div className='text-with-vertical-bar-container'>
                <h3 className='left-text' style={{color:props.leftColor}}>{leftText}</h3>
                <VerticalBar width='2px' horizontalMargin='20px' height='20px'></VerticalBar>
                <h3 className='right-text' style={{color:props.rightColor}}>{rightText}</h3>
            </div>
        )
    }
    else {
        return (
            <div className='text-with-vertical-bar-container'>
                <h2 className='left-text'>{leftText}</h2>
                <VerticalBar width='2px' horizontalMargin='20px' height='20px'></VerticalBar>
                <h2 className='right-text'>{rightText}</h2>
            </div>
        )
    }

    
}