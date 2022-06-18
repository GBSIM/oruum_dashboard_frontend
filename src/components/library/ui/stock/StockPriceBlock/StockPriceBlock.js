import { useSelector,useDispatch } from "react-redux";


export default function StockPriceBlock() {
    const {currentPrice, currency, lastChange, lastChangeRate} = useSelector(state => state.stock);
    const absoluteLastChangeRate = Math.abs(lastChangeRate);

    if (lastChange >= 0) {
        return (
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2>{currency}{currentPrice}</h2>
                <div style={{minWidth:'8px'}}></div>
                <h2 style={{color:'#34B199'}}>+{lastChange}({absoluteLastChangeRate})%</h2>
            </div>
        )
    } else {
        return (
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2>{currency}{currentPrice}</h2>
                <div style={{minWidth:'8px'}}></div>
                <h2 style={{color:'#F15E5E'}}>{lastChange} ({absoluteLastChangeRate})%</h2>
            </div>
        )
    }
    
}