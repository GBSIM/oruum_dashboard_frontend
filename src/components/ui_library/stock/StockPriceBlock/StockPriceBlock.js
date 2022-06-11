import { useSelector } from "react-redux";

import CompanyLogo from '../../unit/CompanyLogo/CompanyLogo';
import Name from '../../unit/Name/Name';
import Ticker from '../../unit/Ticker/Ticker';
import Price from '../../unit/Price/Price';
import PriceChange from '../../unit/PriceChange/PriceChange';

import './StockPriceBlock.css';

export default function StockPriceBlock() {
    const {currentPrice, lastChange, lastChangeRate, lastChangeSign, currency} = useSelector(state => state.stock);

    return (
        <div className='stock-price-block-container'>
            <CompanyLogo></CompanyLogo>
            <div style={{marginLeft:'10px'}}>
                <div className='stock-name-block'>
                    <Name></Name><Ticker></Ticker>
                </div>
                <div className='stock-price-block'>
                    <Price price={currentPrice} unit={currency}></Price>
                    <PriceChange lastChange={lastChange} lastChangeRate={lastChangeRate} lastChangeSign={lastChangeSign}></PriceChange>
                </div>
            </div>
        </div>
    )
}