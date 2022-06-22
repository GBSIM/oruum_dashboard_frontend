import { useSelector,useDispatch } from "react-redux";
import RoundedBar from "../../unit/RoundedBar/RoundedBar";
import './StockIncomeStatement.css';
import { convert_Number_to_text } from "../../../function/DataConversion";

export default function StockIncomeStatement() {
    const {koreanName,currency,
           incomeYearArray,revenueArray,operatingIncomeArray,netIncomeArray,
           operatingMargin,netMargin} = useSelector(state => state.stock);

    const maximumRevenue = Math.max(...revenueArray);
    const maximumOperatingIncome = Math.max(...operatingIncomeArray);
    const maximumNetIncome = Math.max(...netIncomeArray);
    const maximumIncome = Math.max(maximumRevenue,maximumOperatingIncome,maximumNetIncome);
    const maximumBarHeight = 150;

    return (
        <div>
            <h2>{koreanName}의 매출과 영업이익은 성장하고 있나요?</h2>
            <div style={{display: 'flex',flexDirection:'row'}}>
                <div className="stock-income-statement-container">
                    <div className='stock-income-graph-5years-ago'>
                        <IncomeBarGraph year={incomeYearArray.at(-6)} 
                                        maximumHeight={maximumBarHeight} maximumIncome={maximumIncome}
                                        revenue={revenueArray.at(-6)} operatingIncome={operatingIncomeArray.at(-6)} netIncome={netIncomeArray.at(-6)}></IncomeBarGraph>
                    </div>
                    <div className='stock-income-graph-4years-ago'>
                        <IncomeBarGraph year={incomeYearArray.at(-5)} 
                                        maximumHeight={maximumBarHeight} maximumIncome={maximumIncome}
                                        revenue={revenueArray.at(-5)} operatingIncome={operatingIncomeArray.at(-5)} netIncome={netIncomeArray.at(-5)}></IncomeBarGraph>
                    </div>
                    <div className='stock-income-graph-3years-ago'>
                        <IncomeBarGraph year={incomeYearArray.at(-4)} 
                                        maximumHeight={maximumBarHeight} maximumIncome={maximumIncome}
                                        revenue={revenueArray.at(-4)} operatingIncome={operatingIncomeArray.at(-4)} netIncome={netIncomeArray.at(-4)}></IncomeBarGraph>
                    </div>
                    <div className='stock-income-graph-2years-ago'>
                        <IncomeBarGraph year={incomeYearArray.at(-3)} 
                                        maximumHeight={maximumBarHeight} maximumIncome={maximumIncome}
                                        revenue={revenueArray.at(-3)} operatingIncome={operatingIncomeArray.at(-3)} netIncome={netIncomeArray.at(-3)}></IncomeBarGraph>
                    </div>
                    <div className='stock-income-graph-1year-ago'>
                        <IncomeBarGraph year={incomeYearArray.at(-2)} 
                                        maximumHeight={maximumBarHeight} maximumIncome={maximumIncome}
                                        revenue={revenueArray.at(-2)} operatingIncome={operatingIncomeArray.at(-2)} netIncome={netIncomeArray.at(-2)}></IncomeBarGraph>
                    </div>
                    <div className='stock-income-graph-current'>
                        <IncomeBarGraph year={incomeYearArray.at(-1)} 
                                        maximumHeight={maximumBarHeight} maximumIncome={maximumIncome}
                                        revenue={revenueArray.at(-1)} operatingIncome={operatingIncomeArray.at(-1)} netIncome={netIncomeArray.at(-1)}></IncomeBarGraph>
                    </div>
                    <div className='stock-income-revenue-header'>
                        <StockIncomeHeader color='#074B3F' text='매출'></StockIncomeHeader>
                    </div>
                    <div className='stock-income-operating-income-header'>
                        <StockIncomeHeader color='#34B199' text='영업이익'></StockIncomeHeader>
                    </div>
                    <div className='stock-income-net-income-header'>
                        <StockIncomeHeader color='#9AD8CD' text='순이익'></StockIncomeHeader>
                    </div>

                    <div className="stock-income-revenue-5years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(revenueArray.at(-6),currency)}</span>
                    </div>
                    <div className="stock-income-revenue-4years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(revenueArray.at(-5),currency)}</span>
                    </div>
                    <div className="stock-income-revenue-3years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(revenueArray.at(-4),currency)}</span>
                    </div>
                    <div className="stock-income-revenue-2years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(revenueArray.at(-3),currency)}</span>
                    </div>
                    <div className="stock-income-revenue-1year-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(revenueArray.at(-2),currency)}</span>
                    </div>
                    <div className="stock-income-revenue-current">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(revenueArray.at(-1),currency)}</span>
                    </div>

                    <div className="stock-income-operating-income-5years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(operatingIncomeArray.at(-6),currency)}</span>
                    </div>
                    <div className="stock-income-operating-income-4years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(operatingIncomeArray.at(-5),currency)}</span>
                    </div>
                    <div className="stock-income-operating-income-3years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(operatingIncomeArray.at(-4),currency)}</span>
                    </div>
                    <div className="stock-income-operating-income-2years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(operatingIncomeArray.at(-3),currency)}</span>
                    </div>
                    <div className="stock-income-operating-income-1year-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(operatingIncomeArray.at(-2),currency)}</span>
                    </div>
                    <div className="stock-income-operating-income-current">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(operatingIncomeArray.at(-1),currency)}</span>
                    </div>

                    <div className="stock-income-net-income-5years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(netIncomeArray.at(-6),currency)}</span>
                    </div>
                    <div className="stock-income-net-income-4years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(netIncomeArray.at(-5),currency)}</span>
                    </div>
                    <div className="stock-income-net-income-3years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(netIncomeArray.at(-4),currency)}</span>
                    </div>
                    <div className="stock-income-net-income-2years-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(netIncomeArray.at(-3),currency)}</span>
                    </div>
                    <div className="stock-income-net-income-1year-ago">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(netIncomeArray.at(-2),currency)}</span>
                    </div>
                    <div className="stock-income-net-income-current">
                        <span style={{color: '#696969'}}>{convert_Number_to_text(netIncomeArray.at(-1),currency)}</span>
                    </div>
                </div>
                <div className='stock-income-divider'></div>
                <div className='stock-income-statement-summary'>
                    <StockIncomeSummary 
                        koreanName={koreanName}
                        averageRevenueGrowth={'20.5'}
                        averageOperatingIncomeGrowth={'15.2'}
                        operatingMargin={operatingMargin}
                        netMargin={netMargin}></StockIncomeSummary>
                </div>
            </div>
        </div>
        
    )
}

function IncomeBarGraph(props) {
    const maximumIncome = props.maximumIncome;
    const maximumHeight = props.maximumHeight;
    const revenueHeight = props.revenue/maximumIncome*maximumHeight;
    const operatingIncomeHeight = props.operatingIncome/maximumIncome*maximumHeight;
    const netIncomeHeight = props.netIncome/maximumIncome*maximumHeight;

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',height:'100%'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',width:'90%'}}>
                <RoundedBar barColor='#074B3F' height={String(revenueHeight)+'px'}></RoundedBar>
                <div style={{minWidth:'3%'}}></div>
                <RoundedBar barColor='#34B199' height={operatingIncomeHeight}></RoundedBar>
                <div style={{minWidth:'3%'}}></div>
                <RoundedBar barColor='#9AD8CD' height={netIncomeHeight}></RoundedBar>
            </div>
            <span style={{color: '#B9B9B9'}}>{props.year}</span>
        </div>
    )
}

function StockIncomeHeader(props) {
    return (
        <div className="stock-income-header-container">
            <div className='stock-income-header-color-bar' style={{background:props.color}}></div>
            <div style={{minWidth:'8px'}}></div>
            <span style={{color: '#B9B9B9'}}>{props.text}</span>
        </div>
    )
}

function StockIncomeSummary(props) {
    return (
        <div style={{display:'flex',flexDirection:'column',marginLeft:'90px',marginTop:'70px'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2 style={{margin:0,color:'#B9B9B9'}}>{props.koreanName}의</h2>
            </div>
            <div style={{minHeight:'10px'}}></div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2 style={{margin:0,color:'#333333'}}>매출</h2><h2 style={{margin:0,color:'#B9B9B9'}}>은 매년</h2>
                <h2 style={{margin:0,color:'#34B199'}}>&nbsp;평균 {props.averageRevenueGrowth}%</h2>
                <h2 style={{margin:0,color:'#B9B9B9'}}>씩 성장 중!</h2>
            </div>
            <div style={{minHeight:'10px'}}></div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2 style={{margin:0,color:'#333333'}}>영업이익</h2><h2 style={{margin:0,color:'#B9B9B9'}}>은 매년</h2>
                <h2 style={{margin:0,color:'#34B199'}}>&nbsp;평균 {props.averageOperatingIncomeGrowth}%</h2>
                <h2 style={{margin:0,color:'#B9B9B9'}}>씩 성장 중!</h2>
            </div>
            <div style={{minHeight:'50px'}}></div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2 style={{margin:0,color:'#333333'}}>영업이익률</h2><h2 style={{margin:0,color:'#B9B9B9'}}>은</h2>
                <h2 style={{margin:0,color:'#34B199'}}>&nbsp;{props.operatingMargin}%</h2>
            </div>
            <div style={{minHeight:'10px'}}></div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <h2 style={{margin:0,color:'#333333'}}>순이익률</h2><h2 style={{margin:0,color:'#B9B9B9'}}>은</h2>
                <h2 style={{margin:0,color:'#34B199'}}>&nbsp;{props.netMargin}%</h2>
            </div>
        </div>
    )
}



