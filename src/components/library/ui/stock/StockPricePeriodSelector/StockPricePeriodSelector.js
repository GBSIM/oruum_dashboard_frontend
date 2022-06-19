import TextButton from "../../unit/TextButton/TextButton"
import { useSelector, useDispatch } from "react-redux";
import { changePricePlotPeriod } from "../../../../../_reducers/stock";

export default function StockPricePeriodSelector() {
    const {plotPeriod} = useSelector(state => state.stock);
    const dispatch = useDispatch();

    const changeTo1Week = () => {
        dispatch(changePricePlotPeriod('1주일'));
    }
    const changeTo1Month = () => {
        dispatch(changePricePlotPeriod('1달'));
    }
    const changeTo3Month = () => {
        dispatch(changePricePlotPeriod('3달'));
    }
    const changeTo1Year = () => {
        dispatch(changePricePlotPeriod('1년'));
    }
    const changeTo5Year = () => {
        dispatch(changePricePlotPeriod('5년'));
    }

    return (
        <div style={{borderTop:'1px solid #DCDCDC',
                     borderBottom:'1px solid #DCDCDC',
                     width:'100%',
                     display:'flex',
                     justifyContent:'space-around',
                     paddingTop:'3px',
                     paddingBottom:'3px'}}>
            <TextButton text='1주일' buttonOnTextColor='#696969' buttonOffTextColor='#B9B9B9' 
                        isButtonOn={plotPeriod==='1주일'} onClickEvent={changeTo1Week}></TextButton>
            <TextButton text='1달' buttonOnTextColor='#696969' buttonOffTextColor='#B9B9B9' 
                        isButtonOn={plotPeriod==='1달'} onClickEvent={changeTo1Month}></TextButton>
            <TextButton text='3달' buttonOnTextColor='#696969' buttonOffTextColor='#B9B9B9' 
                        isButtonOn={plotPeriod==='3달'} onClickEvent={changeTo3Month}></TextButton>
            <TextButton text='1년' buttonOnTextColor='#696969' buttonOffTextColor='#B9B9B9' 
                        isButtonOn={plotPeriod==='1년'} onClickEvent={changeTo1Year}></TextButton>
            <TextButton text='5년' buttonOnTextColor='#696969' buttonOffTextColor='#B9B9B9' 
                        isButtonOn={plotPeriod==='5년'} onClickEvent={changeTo5Year}></TextButton>
        </div>
    )
}