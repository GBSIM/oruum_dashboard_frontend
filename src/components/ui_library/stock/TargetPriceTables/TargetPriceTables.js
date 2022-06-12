import VerticalBar from "../../unit/VerticalBar/VerticalBar";
import TargetPriceTable from "../TargetPriceTable/TargetPriceTable";

import './TargetPriceTables.css';

export default function TargetPriceTables() {
    return (
        <div>
            <h2 style={{color: '#333333'}}>ORUUM과 함께 하는 목표주가 설정하기</h2>
            <div className="target-price-tables-contents-container">
                <TargetPriceTable 
                    title='PER로 주가 예상하기' 
                    indicator='PER'
                    highValue='30' 
                    lowValue='20'></TargetPriceTable>
                <div className="target-price-tables-divider">
                    <VerticalBar width='1px' height='280px' horizontalMargin='30px'></VerticalBar>
                </div>
                <div style={{minHeight:'30px'}}></div>
                <TargetPriceTable 
                    title='PSR로 주가 예상하기' 
                    indicator='PSR'
                    highValue='30' 
                    lowValue='20'></TargetPriceTable>
            </div>
        </div>
    )
}