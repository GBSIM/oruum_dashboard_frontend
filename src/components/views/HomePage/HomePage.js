import { useSelector, useDispatch } from "react-redux";

import './HomePage.css';
import '../../../default.css';


import SideNavMenuBar from '../../ui_library/block/SideNavMenuBar/SideNavMenuBar';
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
                    <HomeTitle title='ORUUM 대쉬보드'></HomeTitle>
                    <HomeContentsText text='ORUUM 대쉬보드는 ORUUM 내의 자산 관리 컨텐츠를 제작하는 크리에이터 분들을 위한 공간이에요.'></HomeContentsText>
                    <HomeContentsText text='컨텐츠를 효율적으로 관리하기 위해 아래의 다섯 가지 메뉴를 제공하고 있어요.'></HomeContentsText>
                    <HomeContentsText text='각 메뉴 별로 아래의 설명을 읽고 “투자자에게 도움을 줄 수 있는” 컨텐츠 생성 작업을 진행해주세요!'></HomeContentsText>
                    <HorizontalBar height='1px' horizontalMargin='0px' verticalMargin='20px'></HorizontalBar>
                    <HomeMenus></HomeMenus>
                    <div style={{minHeight:'30px'}}></div>
                    {HomePageContents}
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}