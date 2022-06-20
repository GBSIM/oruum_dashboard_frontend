import './DashboardHeader.css';
import StockSearchInput from '../../stock/StockSearchInput/StockSearchInput';

export default function DashboardHeader(props) {
    return (
        <div className='header-container'>
            <StockSearchInput></StockSearchInput>
        </div>
    )
}