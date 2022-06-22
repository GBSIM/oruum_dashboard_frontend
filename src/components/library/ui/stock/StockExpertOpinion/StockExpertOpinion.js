import { useSelector,useDispatch } from "react-redux";
import TextButton from "../../unit/TextButton/TextButton"
import './StockExpertOpinion.css';

export default function StockExpertOpinion() {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <h2 style={{color:'#333333',margin:'0'}}>전문가 의견</h2>
                <div className="stock-check-point-edit-button-container">
                    <TextButton isButton={false} buttonOffTextColor='#B9B9B9' text='편집하기'></TextButton>
                </div>
            </div>
            <div style={{height:'20px'}}></div>
            <div className="stock-expert-opinion-container">
                <TradingSuggestion></TradingSuggestion>
                <TargetPrice></TargetPrice>
            </div>
        </div>
    )
}

function TradingSuggestion() {
    const {expertStrongSell,expertSell,expertHold,expertBuy,expertStrongBuy} = useSelector(state => state.stock);
    const totalOpinionNumber = expertStrongSell + expertSell + expertHold + expertBuy + expertStrongBuy;
    const maximumHeight = 220;

    return (
        <div className="trading-suggestion-container">
            <h3 style={{color:'#696969',margin:'0'}}>매수/매도 제안</h3>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-around'}}>
                <SuggestionBar
                    maximumHeight={maximumHeight}
                    opinionNumber={expertStrongSell}
                    totalOpinionNumber={totalOpinionNumber}
                    opinionText='강력매도'
                    color='#F15E5E'></SuggestionBar>
                <SuggestionBar
                    maximumHeight={maximumHeight}
                    opinionNumber={expertSell}
                    totalOpinionNumber={totalOpinionNumber}
                    opinionText='매도'
                    color='rgba(241,94,94,0.8)'></SuggestionBar>
                <SuggestionBar
                    maximumHeight={maximumHeight}
                    opinionNumber={expertHold}
                    totalOpinionNumber={totalOpinionNumber}
                    opinionText='중립'
                    color='#DCDCDC'></SuggestionBar>
                <SuggestionBar
                    maximumHeight={maximumHeight}
                    opinionNumber={expertBuy}
                    totalOpinionNumber={totalOpinionNumber}
                    opinionText='매수'
                    color='#34B199'></SuggestionBar>
                <SuggestionBar
                    maximumHeight={maximumHeight}
                    opinionNumber={expertStrongBuy}
                    totalOpinionNumber={totalOpinionNumber}
                    opinionText='강력매수'
                    color='#074B3F'></SuggestionBar>
            </div>
        </div>
    )
}

function SuggestionBar(props) {
    const height = props.maximumHeight*props.opinionNumber/props.totalOpinionNumber;
    const opinionPercentage = (props.opinionNumber/props.totalOpinionNumber*100).toFixed(1);

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',minHeight:'250px'}}>
            <div style={{background:props.color,borderRadius:'3px',width:'30px',height:(String(height)+'px')}}></div>
            <span style={{color:'#B9B9B9'}}>{props.opinionText}</span>
            <span style={{color:'#696969'}}>{props.opinionNumber}</span>
            <span style={{color:'#696969'}}>({opinionPercentage}%)</span>
        </div>
    )
}

function TargetPrice() {
    const {targetPriceLow,targetPriceAvg,targetPriceHigh,currentPrice,currency} = useSelector(state => state.stock);
    const targetPriceLowPercentage = ((targetPriceLow - currentPrice)/currentPrice*100).toFixed(1);
    const targetPriceAvgPercentage = ((targetPriceAvg - currentPrice)/currentPrice*100).toFixed(1);
    const targetPriceHighPercentage = ((targetPriceHigh - currentPrice)/currentPrice*100).toFixed(1);

    const lowestPrice = Math.min(currentPrice,targetPriceLow,targetPriceAvg,targetPriceHigh);
    const highestPrice = Math.max(currentPrice,targetPriceLow,targetPriceAvg,targetPriceHigh);
    const currentPriceLeft = (currentPrice - lowestPrice)/(highestPrice - lowestPrice)*75;
    const targetPriceLowLeft = (targetPriceLow - lowestPrice)/(highestPrice - lowestPrice)*75;
    const targetPriceAvgLeft = (targetPriceAvg - lowestPrice)/(highestPrice - lowestPrice)*75;
    const targetPriceHighLeft = (targetPriceHigh - lowestPrice)/(highestPrice - lowestPrice)*75;

    return (
        <div className="target-price-container">
            <h3 style={{color:'#696969',margin:'0'}}>적정 목표가</h3>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{position:'relative',height:'2px',background:'#DCDCDC',width:'100%',marginTop:'100px'}}>
                    <CurrentPricePoint 
                        text='현재가'
                        top='-76px' 
                        left={currentPriceLeft} 
                        unit={currency} 
                        price={currentPrice}></CurrentPricePoint>
                    <TargetPricePoint 
                        text='최저'
                        color='#F15E5E' 
                        top='3px' 
                        left={targetPriceLowLeft} 
                        unit={currency} 
                        price={targetPriceLow} 
                        percentage={targetPriceLowPercentage}></TargetPricePoint>
                    <TargetPricePoint 
                        text='평균'
                        color='#9AD8CD' 
                        top='3px' 
                        left={targetPriceAvgLeft} 
                        unit={currency} 
                        price={targetPriceAvg} 
                        percentage={targetPriceAvgPercentage}></TargetPricePoint>
                    <TargetPricePoint 
                        text='최고'
                        color='#34B199' 
                        top='3px' 
                        left={targetPriceHighLeft} 
                        unit={currency} 
                        price={targetPriceHigh} 
                        percentage={targetPriceHighPercentage}></TargetPricePoint>
                </div>
                
            </div>
        </div>
    )
}

function TargetPricePoint(props) {
    return (
        <div style={{background:'rgba(0,0,0,0)',position:'absolute',top:props.top,left:String(props.left)+'%',display:'flex',flexDirection:'column',alignItems:'center',width:'100px'}}>
            <div style={{width:'0px',height:'0px',borderBottom:'20px solid'+props.color,borderLeft:'10px solid transparent',borderRight:'10px solid transparent'}}></div>
            <div><span style={{color:'#B9B9B9'}}>{props.text}</span></div>
            <div><span style={{color:props.color}}>{props.unit}{props.price}</span></div>
            <div><span style={{color:props.color}}>({props.percentage}%)</span></div>
        </div>
    )
}

function CurrentPricePoint(props) {
    return (
        <div style={{background:'rgba(0,0,0,0)',position:'relative',top:props.top,left:String(props.left)+'%',display:'flex',flexDirection:'column',alignItems:'center',width:'100px'}}>
            <div><span style={{color:'#333333'}}>{props.unit}{props.price}</span></div>
            <div><span style={{color:'#B9B9B9'}}>{props.text}</span></div>
            <div style={{marginTop:'5px',width:'0px',height:'0px',borderTop:'20px solid #333333',borderLeft:'10px solid transparent',borderRight:'10px solid transparent'}}></div>
        </div>
    )
}