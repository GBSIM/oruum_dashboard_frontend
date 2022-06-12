import './StockSummaryBlock.css';

import SummaryValues from "../../block/SummaryValues/SummaryValues";
import VerticalBar from "../../unit/VerticalBar/VerticalBar";

export default function StockSummaryBlock() {
    return (
        <div className="stock-summary-block-container">
            <div className="stock-summary-block-unit-container">
                <SummaryValues
                    titleList={['시작가','최고가','최저가']}
                    valueList={[0,0,0]}></SummaryValues>
                <VerticalBar width='1px' height='90px' horizontalMargin='20px' bottomMargin='10px'></VerticalBar>
                <SummaryValues
                    titleList={['거래량','PER(ttm)','시가총액']}
                    valueList={[0,0,0]}></SummaryValues>
            </div>
            <div className='stock-summary-block-divider'>
                <VerticalBar width='1px' height='90px' horizontalMargin='20px' bottomMargin='10px'></VerticalBar>
            </div>
            <div style={{minHeight:'10px'}}></div>
            <div className="stock-summary-block-unit-container">
                <SummaryValues
                    titleList={['52주최고','52주최저','평균거래량']}
                    valueList={[0,0,0]}></SummaryValues>
                <VerticalBar width='1px' height='90px' horizontalMargin='20px' bottomMargin='10px'></VerticalBar>
                <SummaryValues
                    titleList={['EPS','PER(forward)','PSR']}
                    valueList={[0,0,0]}></SummaryValues>
            </div>
        </div>
    )
}