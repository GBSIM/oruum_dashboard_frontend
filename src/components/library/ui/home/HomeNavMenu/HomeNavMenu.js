import HorizontalLine from "../../unit/HorizontalLine/HorizontalLine"
import IconTextButton from "../../unit/IconTextButton/IconTextButton"
import VerticalLine from "../../unit/VerticalLine/VerticalLine";
import { changeHomeMenu } from "../../../../../_reducers/home";

import { useSelector, useDispatch } from "react-redux";

export default function HomeNavMenu() {
    const dispatch = useDispatch();

    const {menu} = useSelector(state => state.home);

    let isStockButtonOn = (menu === '주식 데이터');
    let isEconomyButtonOn = (menu === '경제 데이터');
    let isPortfolioButtonOn = (menu === '포트폴리오');
    let isSimulationButtonOn = (menu === '시뮬레이션');

    const changeToStock = () => {
        dispatch(changeHomeMenu('주식 데이터'));
    }
    const changeToEconomy = () => {
        dispatch(changeHomeMenu('경제 데이터'));
    }
    const changeToPortfolio = () => {
        dispatch(changeHomeMenu('포트폴리오'));
    }
    const changeToSimulation = () => {
        dispatch(changeHomeMenu('시뮬레이션'));
    }

    return (
        <div>
            <HorizontalLine
                marginTop='30px'
                marginBottom='20px'
                height='1px'
                lineColor='#DCDCDC'></HorizontalLine>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <div>
                    <IconTextButton
                        buttonOn={isStockButtonOn}
                        buttonOnTextColor='#34B199'
                        buttonOffTextColor='#B9B9B9'
                        text='주식 데이터'
                        onClickEvent={changeToStock}></IconTextButton>
                </div>
                <VerticalLine width='1px' height='20px' lineColor='#B9B9B9'></VerticalLine>
                <div>
                    <IconTextButton
                        buttonOn={isEconomyButtonOn}
                        buttonOnTextColor='#34B199'
                        buttonOffTextColor='#B9B9B9'
                        text='경제 데이터'
                        onClickEvent={changeToEconomy}></IconTextButton>
                </div>
                <VerticalLine width='1px' height='20px' lineColor='#B9B9B9'></VerticalLine>
                <div>
                    <IconTextButton
                        buttonOn={isPortfolioButtonOn}
                        buttonOnTextColor='#34B199'
                        buttonOffTextColor='#B9B9B9'
                        text='포트폴리오'
                        onClickEvent={changeToPortfolio}></IconTextButton>
                </div>
                <VerticalLine width='1px' height='20px' lineColor='#B9B9B9'></VerticalLine>
                <div>
                    <IconTextButton
                        buttonOn={isSimulationButtonOn}
                        buttonOnTextColor='#34B199'
                        buttonOffTextColor='#B9B9B9'
                        text='시뮬레이션'
                        onClickEvent={changeToSimulation}></IconTextButton>
                </div>
            </div>
        </div>
    )
}