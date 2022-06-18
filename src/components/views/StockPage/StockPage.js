import './StockPage.css';
import '../../../default.css';
import SideNavMenuBar from '../../ui_library/block/SideNavMenuBar/SideNavMenuBar';
import BottomNavMenuBar from '../../ui_library/block/BottomNavMenuBar/BottomNavMenuBar';
import Header from '../../ui_library/block/Header/Header';
import HorizontalBar from '../../ui_library/unit/HorizontalBar/HorizontalBar';

import StockPriceBlock from '../../ui_library/stock/StockPriceBlock/StockPriceBlock';
import StockTags from '../../ui_library/stock/StockTags/StockTags';
import StockPriceLineGraph from '../../ui_library/stock/StockPriceLineGraph/StockPriceLineGraph';
import StockBuyPoint from '../../ui_library/stock/StockBuyPoint/StockBuyPoint';
import StockSellPoint from '../../ui_library/stock/StockSellPoint/StockSellPoint';
import StockAnalysisIndicators from '../../ui_library/stock/StockAnalysisIndicators/StockAnalysisIndicators';
import ProductsTable from '../../ui_library/stock/ProductsTable/ProductsTable';
import ProductsDetail from '../../ui_library/stock/ProductsDetail/ProductsDetail';
import StockNews from '../../ui_library/stock/StockNews/StockNews';
import IncomeRoundedBarGraphs from '../../ui_library/stock/IncomeRoundedBarGraphs/IncomeRoundedBarGraphs';
import ExpertExpectations from '../../ui_library/stock/ExpertExpectations/ExpertExpectations';
import LeaderDetail from '../../ui_library/stock/LeaderDetail/LeaderDetail';
import StockSummaryBlock from '../../ui_library/stock/StockSummaryBlock/StockSummaryBlock';
import TargetPriceTables from '../../ui_library/stock/TargetPriceTables/TargetPriceTables';

export default function StockPage() {
    return (
        <div className='page'>
            {/* <NavBar></NavBar> */}
            <SideNavMenuBar></SideNavMenuBar>
            <div className='main-contents'>
                <Header>
                </Header>
                <div className='page-contents'>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            
        </div>
    )
}