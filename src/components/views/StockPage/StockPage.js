import './StockPage.css';
import '../../../default.css';
import SideNavMenuBar from '../../library/ui/nav/SideNavMenuBar/SideNavMenuBar';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import DashboardHeader from '../../library/ui/header/DashboardHeader/DashboardHaeder';

import StockProfile from '../../library/ui/stock/StockProfile/StockProfile';
import StockPriceBlock from '../../library/ui/stock/StockPriceBlock/StockPriceBlock';
import StockPriceLineGraph from '../../library/ui/stock/StockPriceLineGraph/StockPriceLineGraph';

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
                    <StockPriceLineGraph></StockPriceLineGraph>
                    
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            
        </div>
    )
}