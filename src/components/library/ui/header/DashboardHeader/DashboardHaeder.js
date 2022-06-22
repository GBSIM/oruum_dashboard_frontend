import './DashboardHeader.css';
import StockSearchInput from '../../stock/StockSearchInput/StockSearchInput';
import ImageContainer from '../../unit/ImageContainer/ImageContainer';

export default function DashboardHeader(props) {
    return (
        <div className='header-container'>
            <div className='header-search-input'>
                <StockSearchInput></StockSearchInput>
            </div>
            <div className='header-logo-conatiner'>
                <ImageContainer
                    imageHeight='30px'
                    image={require('../../images/OruumLogo/logo_oruum.png')}></ImageContainer>
            </div>
        </div>
    )
}