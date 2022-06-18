import { useSelector, useDispatch } from "react-redux";

import './HomePage.css';
import '../../../default.css';


import SideNavMenuBar from "../../library/ui/nav/SideNavMenuBar/SideNavMenuBar";
import BottomNavMenuBar from '../../ui_library/block/BottomNavMenuBar/BottomNavMenuBar';
import Header from '../../ui_library/block/Header/Header';

import HomeTitle from '../../ui_library/home/HomeTitle/HomeTitle';
import HomeContentsText from '../../ui_library/home/HomeContentsText/HomeContentsText';
import HomeMenus from '../../ui_library/home/HomeMenus/HomeMenus';
import HorizontalBar from '../../ui_library/unit/HorizontalBar/HorizontalBar';
import HomeMenuStockExplanation from '../../ui_library/home/HomeMenuStockExplanation/HomeMenuStockExplanation';
import HomeMenuEconomyExplanation from "../../ui_library/home/HomeMenuEconomyExplanation/HomeMenuEconomyExplanation";
import HomeMenuIndustryExplanation from "../../ui_library/home/HomeMenuIndustryExplanation/HomeMenuIndustryExplanation";
import HomeMenuPortfolioExplanation from "../../ui_library/home/HomeMenuPortfolioExplanation/HomeMenuPortfolioExplanation";
import HomeMenuSimulationExplanation from "../../ui_library/home/HomeMenuSimulationExplanation/HomeMenuSimulationExplanation";

export default function HomePage() {
    const {menu} = useSelector(state => state.home);
    
    let HomePageContents;

    if (menu === "주식 데이터") {
        HomePageContents = <HomeMenuStockExplanation></HomeMenuStockExplanation>
    } else if (menu === '경제 데이터') {
        HomePageContents = <HomeMenuEconomyExplanation></HomeMenuEconomyExplanation>
    } else if (menu === '산업 데이터') {
        HomePageContents = <HomeMenuIndustryExplanation></HomeMenuIndustryExplanation>
    } else if (menu === '포트폴리오 관리') {
        HomePageContents = <HomeMenuPortfolioExplanation></HomeMenuPortfolioExplanation>
    } else if (menu === '시뮬레이션') {
        HomePageContents = <HomeMenuSimulationExplanation></HomeMenuSimulationExplanation>
    } else {
        HomePageContents = <div></div>
    }

    return (
        <div className='page'>
            <SideNavMenuBar></SideNavMenuBar>
            <div className="main-contents">
                <Header>
                </Header>
                <div className='page-contents'>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}