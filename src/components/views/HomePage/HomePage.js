import { useSelector, useDispatch } from "react-redux";

import './HomePage.css';
import '../../../default.css';

import SideNavMenuBar from "../../library/ui/nav/SideNavMenuBar/SideNavMenuBar";
import BottomNavMenuBar  from "../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar";
import DashboardHeader from "../../library/ui/header/DashboardHeader/DashboardHaeder";

import HomeTitle from "../../library/ui/home/HomeTitle/HomeTitle";
import HomeNavMenu from "../../library/ui/home/HomeNavMenu/HomeNavMenu";
import StockExplanation from "../../library/ui/home/StockExplanation/StockExplanation";
import EconomyExplanation from "../../library/ui/home/EconomyExplanation/EconomyExplanation";
import PortfolioExplanation from "../../library/ui/home/PortfolioExplanation/PortfolioExplanation";
import SimulationExplanation from "../../library/ui/home/SimulationExplanation/SimulationExplanation";

export default function HomePage() {
    const {menu} = useSelector(state => state.home);
    
    let HomePageContents;

    if (menu === "주식 데이터") {
        HomePageContents = <StockExplanation></StockExplanation>
    } else if (menu === '경제 데이터') {
        HomePageContents = <EconomyExplanation></EconomyExplanation>
    } else if (menu === '포트폴리오') {
        HomePageContents = <PortfolioExplanation></PortfolioExplanation>
    } else if (menu === '시뮬레이션') {
        HomePageContents = <SimulationExplanation></SimulationExplanation>
    } else {
        HomePageContents = <div></div>
    }

    return (
        <div className='page'>
            <SideNavMenuBar></SideNavMenuBar>
            <div className="main-contents">
                <DashboardHeader>
                </DashboardHeader>
                <div className='page-contents'>
                    <HomeTitle></HomeTitle>
                    <div style={{minHeight:'20px'}}></div>
                    <span style={{color:'#696969'}}>ORUUM 대쉬보드는 ORUUM 내의 자산 관리 컨텐츠를 제작하는 크리에이터 분들을 위한 공간이에요.</span>
                    <div style={{minHeight:'10px'}}></div>
                    <span style={{color:'#696969'}}>컨텐츠를 효율적으로 관리하기 위해 아래의 다섯 가지 메뉴를 제공하고 있어요.</span>
                    <div style={{minHeight:'10px'}}></div>
                    <span style={{color:'#696969'}}>각 메뉴 별로 아래의 설명을 읽고 “투자자에게 도움을 줄 수 있는” 컨텐츠 생성 작업을 진행해주세요!</span>
                    <HomeNavMenu></HomeNavMenu>
                    <div style={{minHeight:'30px'}}></div>
                    {HomePageContents}
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}