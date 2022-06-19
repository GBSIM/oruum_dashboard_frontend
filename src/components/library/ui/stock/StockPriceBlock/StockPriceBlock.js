import { useSelector,useDispatch } from "react-redux";

export default function StockPriceBlock() {
    const {currentPrice, currency, lastDailyChange, lastDailyChangeRate} = useSelector(state => state.stock);
    const absoluteLastChangeRate = Math.abs(lastDailyChangeRate);

    if (lastDailyChange >= 0) {
        return (
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2>{currency}{currentPrice}</h2>
                <div style={{minWidth:'8px'}}></div>
                <h2 style={{color:'#34B199'}}>+{lastDailyChange}({absoluteLastChangeRate})%</h2>
            </div>
        )
    } else {
        return (
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2>{currency}{currentPrice}</h2>
                <div style={{minWidth:'8px'}}></div>
                <h2 style={{color:'#F15E5E'}}>{lastDailyChange} ({absoluteLastChangeRate})%</h2>
            </div>
        )
    }
    
}