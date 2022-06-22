import StockProfile from "../StockProfile/StockProfile";
import StockPriceLineGraph from "../StockPriceLineGraph/StockPriceLineGraph";
import StockPriceBlock from "../StockPriceBlock/StockPriceBlock";
import StockTagList from "../StockTagList/StockTagList";
import StockPricePeriodSelector from "../StockPricePeriodSelector/StockPricePeriodSelector";

export default function StockBasicInfo() {
    return (
        <div>
            <StockProfile></StockProfile>
            <StockPriceBlock></StockPriceBlock>
            <StockTagList></StockTagList>
            <div style={{minHeight:'20px',background:'rgba(0,0,0,0)'}}></div>
            <StockPricePeriodSelector></StockPricePeriodSelector>
            <StockPriceLineGraph></StockPriceLineGraph>
        </div>
    )
}