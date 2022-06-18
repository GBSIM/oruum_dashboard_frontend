import './BottomNavMenuBar.css';

import ImageContainer from '../../unit/ImageContainer/ImageContainer';
import IconTextButton from '../../unit/IconTextButton/IconTextButton';
import HorizontalLine from '../../unit/HorizontalLine/HorizontalLine';

import { changePage } from '../../../../../_reducers/pager';

import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function BottomNavMenuBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {page} = useSelector(state => state.pager);

    let isHomeButtonOn = (page === '대쉬보드 홈');
    let isStockButtonOn = (page === '주식 데이터');
    let isEconomyButtonOn = (page === '경제 데이터');
    let isPortfolioButtonOn = (page === '포트폴리오');
    let isSimulationButtonOn = (page === '시뮬레이션');

    const navigateHome = () => {
        dispatch(changePage('대쉬보드 홈'));
        navigate('/');
        window.scrollTo(0,0);
    }
    const navigateStock = () => {
        dispatch(changePage('주식 데이터'));
        navigate('/Stock');
        window.scrollTo(0,0);
    }
    const navigateEconomy = () => {
        dispatch(changePage('경제 데이터'));
        navigate('/Economy');
        window.scrollTo(0,0);
    }
    const navigatePortfolio = () => {
        dispatch(changePage('포트폴리오'));
        navigate('/Portfolio');
        window.scrollTo(0,0);
    }
    const navigateSimulation = () => {
        dispatch(changePage('시뮬레이션'));
        navigate('/Simulation');
        window.scrollTo(0,0);
    }

    return (
        <div className='bottom-nav-menu-bar-container'>
            <div>
                <IconTextButton
                    buttonOn={isHomeButtonOn}
                    buttonOnImage={require('../../images/Icon/icon_home_light_black.png')}
                    buttonOffImage={require('../../images/Icon/icon_home_grey.png')}
                    iconContainerHeight='24px'
                    iconHeight='24px'
                    buttonOnTextColor='#333333'
                    buttonOffTextColor='#DCDCDC'
                    onClickEvent={navigateHome}></IconTextButton>
            </div>
            <div>
                <IconTextButton
                    buttonOn={isStockButtonOn}
                    buttonOnImage={require('../../images/Icon/icon_bar_graph_light_black.png')}
                    buttonOffImage={require('../../images/Icon/icon_bar_graph_grey.png')}
                    iconContainerHeight='24px'
                    iconHeight='24px'
                    buttonOnTextColor='#333333'
                    buttonOffTextColor='#DCDCDC'
                    onClickEvent={navigateStock}></IconTextButton>
            </div>
            <div>
                <IconTextButton
                    buttonOn={isEconomyButtonOn}
                    buttonOnImage={require('../../images/Icon/icon_dollar_light_black.png')}
                    buttonOffImage={require('../../images/Icon/icon_dollar_grey.png')}
                    iconContainerHeight='24px'
                    iconHeight='24px'
                    buttonOnTextColor='#333333'
                    buttonOffTextColor='#DCDCDC'
                    onClickEvent={navigateEconomy}></IconTextButton>
            </div>
            <div>
                <IconTextButton
                    buttonOn={isPortfolioButtonOn}
                    buttonOnImage={require('../../images/Icon/icon_pie_chart_light_black.png')}
                    buttonOffImage={require('../../images/Icon/icon_pie_chart_grey.png')}
                    iconContainerHeight='24px'
                    iconHeight='24px'
                    buttonOnTextColor='#333333'
                    buttonOffTextColor='#DCDCDC'
                    onClickEvent={navigatePortfolio}></IconTextButton>
            </div>
            <div>
                <IconTextButton
                    buttonOn={isSimulationButtonOn}
                    buttonOnImage={require('../../images/Icon/icon_calculation_light_black.png')}
                    buttonOffImage={require('../../images/Icon/icon_calculation_grey.png')}
                    iconContainerHeight='24px'
                    iconHeight='24px'
                    buttonOnTextColor='#333333'
                    buttonOffTextColor='#DCDCDC'
                    onClickEvent={navigateSimulation}></IconTextButton>
            </div>
        </div>
    )
}