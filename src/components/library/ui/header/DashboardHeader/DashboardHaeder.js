import './DashboardHeader.css';
import StockSearchInput from '../../stock/StockSearchInput/StockSearchInput';

export default function DashboardHeader(props) {
    return (
        <div className='header-container'>
            <div className='header-search-input'>
                <StockSearchInput></StockSearchInput>
            </div>
        </div>
    )
}