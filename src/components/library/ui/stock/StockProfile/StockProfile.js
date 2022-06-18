import { useSelector,useDispatch } from "react-redux";

import ImageContainer from "../../unit/ImageContainer/ImageContainer";

export default function StockProfile() {
    const {koreanName, englishName, ticker} = useSelector(state => state.stock);

    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <ImageContainer
                imageHeight='40px'
                image={require('../../images/StockLogo/logo_aapl.png')}></ImageContainer>
            <div style={{marginLeft:'10px'}}>
                <div>
                    <span style={{fontWeight:'500'}}>{koreanName}</span>
                </div>
                <div>
                    <span style={{fontWeight:'500'}}>{englishName} ({ticker})</span>
                </div>
            </div>
        </div>
    )
}