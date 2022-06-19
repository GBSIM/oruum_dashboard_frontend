import { useSelector,useDispatch } from "react-redux";
import IconTitleHeader from "../../unit/IconTitleHeader/IconTitleHeader";
import IconText from "../../unit/IconText/IconText";
import './StockCheckPoint.css';

export default function StockCheckPoint() {
    const {koreanName,buyPoints,sellPoints} = useSelector(state => state.stock);

    return (
        <div>
            <h2 style={{color:'#333333'}}>{koreanName}, 사야할까 말아야할까?</h2>
            <div className="check-point-container">
                <StockBuyPoint name={koreanName} buyPoints={buyPoints}></StockBuyPoint>
                <div style={{minHeight:'20px'}}></div>
                <StockSellPoint name={koreanName} sellPoints={sellPoints}></StockSellPoint>
            </div>
        </div>
    )
}

function StockBuyPoint(props) {
    return (
        <div style={{flex:'1'}}>
            <IconTitleHeader
                iconImage={require('../../images/Icon/icon_add_light_black.png')}
                iconHeight='20px'
                headerType='h3'
                textColor='#333333'
                betweenSpace='5px'
                text={props.name + ' 매수하자!'}></IconTitleHeader>
            <div style={{minHeight:'10px'}}></div>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text={props.buyPoints[0]}></IconText>
            <div style={{minHeight:'10px'}}></div>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text={props.buyPoints[1]}></IconText>
            <div style={{minHeight:'10px'}}></div>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text={props.buyPoints[2]}></IconText>
        </div>
    )
}

function StockSellPoint(props) {
    return (
        <div style={{flex:'1'}}>
            <IconTitleHeader
                iconImage={require('../../images/Icon/icon_minus_light_black.png')}
                iconHeight='20px'
                headerType='h3'
                textColor='#333333'
                betweenSpace='5px'
                text={props.name + ' 매수하자!'}></IconTitleHeader>
            <div style={{minHeight:'10px'}}></div>
            <IconText
                iconImage={require('../../images/Icon/icon_danger_yellow.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text={props.sellPoints[0]}></IconText>
            <div style={{minHeight:'10px'}}></div>
            <IconText
                iconImage={require('../../images/Icon/icon_danger_yellow.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text={props.sellPoints[1]}></IconText>
            <div style={{minHeight:'10px'}}></div>
            <IconText
                iconImage={require('../../images/Icon/icon_danger_yellow.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text={props.sellPoints[2]}></IconText>
        </div>
    )
}