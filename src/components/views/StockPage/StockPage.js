import './StockPage.css';
import '../../../default.css';
import SideNavMenuBar from '../../library/ui/nav/SideNavMenuBar/SideNavMenuBar';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import DashboardHeader from '../../library/ui/header/DashboardHeader/DashboardHaeder';

import StockProfile from '../../library/ui/stock/StockProfile/StockProfile';
import StockPriceBlock from '../../library/ui/stock/StockPriceBlock/StockPriceBlock';
import StockPriceLineGraph from '../../library/ui/stock/StockPriceLineGraph/StockPriceLineGraph';
import StockTagList from '../../library/ui/stock/StockTagList/StockTagList';
import StockPricePeriodSelector from '../../library/ui/stock/StockPricePeriodSelector/StockPricePeriodSelector';
import StockCheckPoint from '../../library/ui/stock/StockCheckPoint/StockCheckPoint';
import StockProducts from '../../library/ui/stock/StockProducts/StockProducts';
import StockIncomeStatement from '../../library/ui/stock/StockIncomeStatement/StockIncomeStatement';

export default function StockPage() {
    return (
        <div className='page'>
            {/* <NavBar></NavBar> */}
            <SideNavMenuBar></SideNavMenuBar>
            <div className='main-contents'>
                <DashboardHeader>
                </DashboardHeader>
                <div className='page-contents'>
                    <StockProfile></StockProfile>
                    <StockPriceBlock></StockPriceBlock>
                    <StockTagList></StockTagList>
                    <div style={{minHeight:'20px',background:'rgba(0,0,0,0)'}}></div>
                    <StockPricePeriodSelector></StockPricePeriodSelector>
                    <StockPriceLineGraph></StockPriceLineGraph>
                    <div style={{minHeight:'20px',background:'rgba(0,0,0,0)'}}></div>
                    <div className='dashboard-shadow-box'>
                        <StockCheckPoint></StockCheckPoint>
                    </div>
                    <div style={{minHeight:'30px',background:'rgba(0,0,0,0)'}}></div>
                    <div className='dashboard-shadow-box'>
                        <StockIncomeStatement></StockIncomeStatement>
                    </div>
                    <div style={{minHeight:'30px',background:'rgba(0,0,0,0)'}}></div>
                    <div className='dashboard-shadow-box'>
                        <StockProducts></StockProducts>
                    </div>
                    
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            
        </div>
    )
}